import React, { useState, useEffect } from 'react';
import WelcomeScreen from './WelcomeScreen';
import BallAnimation from './BallAnimation';
import EndScreen from './EndScreen';

const App = () => {
    const [screen, setScreen] = useState('welcome');

    useEffect(() => {
        let timer;
        if (screen === 'animation') {
            timer = setTimeout(() => {
                setScreen('end');
            }, 60000); // 60 seconds
        }
        return () => clearTimeout(timer);
    }, [screen]);

    const handleStart = () => {
        setScreen('animation');
    };

    return (
        <div style={{ margin: 0, padding: 0, overflow: 'hidden' }}>
            {screen === 'welcome' && <WelcomeScreen onStart={handleStart} />}
            {screen === 'animation' && <BallAnimation />}
            {screen === 'end' && <EndScreen />}
        </div>
    );
};

export default App;
