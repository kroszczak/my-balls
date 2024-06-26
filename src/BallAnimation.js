import React, { useEffect } from 'react';
import Sketch from 'react-p5';

const BallAnimation = () => {
  // Tworzenie nowego obiektu Audio i odtwarzanie pliku audio po zamontowaniu komponentu
  useEffect(() => {
    const audio = new Audio('elev.mp3');
    audio.volume = 0.007;
    audio.play().then(_ => { console.log('działa!') });

    const stopAudioAfterTimeout = setTimeout(() => {
      audio.pause();
      audio.currentTime = 0; // Opcjonalnie resetowanie czasu odtwarzania
    }, 35000);

    // Funkcja czyszcząca, zostanie wywołana po odmontowaniu komponentu
    return () => {
      clearTimeout(stopAudioAfterTimeout);
      audio.pause(); // Zatrzymaj odtwarzanie audio, jeśli komponent zostanie odmontowany
    };
  }, []); // Pusta tablica zależności oznacza, że useEffect zostanie uruchomiony tylko raz po zamontowaniu komponentu

  let balls = [];
  const screenWidth = window.innerWidth;
  const ballSize = (screenWidth > 1000 ? 65 : 35);
  const colors = ['#0000FF', '#00FF00', '#FFFF00']; // Zbiór kolorów: czerwony, niebieski, zielony, żółty

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    for (let i = 0; i < (screenWidth > 1000 ? 25 : 14); i++) {
      const color = i < (screenWidth > 1000 ? 5 : 4) ? '#FF0000' : p5.random(colors);

      balls.push(new Ball(p5, p5.random(p5.width), p5.random(p5.height), ballSize, color));
    }
    console.log(balls);
  };

  const draw = (p5) => {
    p5.background(255); // Zmieniono kolor tła na biały
    for (let ball of balls) {
      ball.update();
      ball.display();
      ball.checkEdges();
      ball.checkOtherBalls(balls, p5);
    }
  };

  class Ball {
    constructor(p5, x, y, size, color) {
      this.p5 = p5;
      this.position = p5.createVector(x, y);
      this.velocity = p5.createVector(p5.random(-1, 1), p5.random(-1, 1)).mult(p5.random(4, 6));
      this.size = size;
      this.color = color;
    }

    update() {
      this.position.add(this.velocity);
    }

    display() {
      this.p5.fill(this.color);
      this.p5.ellipse(this.position.x, this.position.y, this.size, this.size);
    }

    checkEdges() {
      if (this.position.x + this.size / 2.0 >= this.p5.width + 5 || this.position.x - this.size / 2 <= 5) {
        this.velocity.x *= -1;
      }
      if (this.position.y + this.size / 2.0 >= this.p5.height + 5 || this.position.y - this.size / 2 <= 5) {
        this.velocity.y *= -1;
      }
    }

    checkOtherBalls(otherBalls, p5) {
      for (let otherBall of otherBalls) {
        if (otherBall !== this) {
          let distance = this.position.dist(otherBall.position);
          let minDistance = this.size / 2.0 + otherBall.size / 2.0;
          if (distance < minDistance) {
            let normal = p5.constructor.Vector.sub(otherBall.position, this.position).normalize();
            let d1 = this.velocity.dot(normal);
            let d2 = otherBall.velocity.dot(normal);
            let v1 = p5.constructor.Vector.sub(this.velocity, p5.constructor.Vector.mult(normal, d1 - d2));
            let v2 = p5.constructor.Vector.sub(otherBall.velocity, p5.constructor.Vector.mult(normal, d2 - d1));
            this.velocity = v1;
            otherBall.velocity = v2;
            if (distance < (minDistance / 2)) {
              otherBall.position = p5.createVector(otherBall.position.x + ballSize + 2, otherBall.position.y);
            }
            // Dodajemy warunek sprawdzający, czy kule są zbyt bliskoq
            // if (distance < 2) {
            //   this.position.add(normal);
            //   otherBall.position.sub(normal);
            // }
          }
        }
      }
    }
  }

  return <Sketch setup={setup} draw={draw} />;
};

export default BallAnimation;
