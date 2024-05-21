import React from 'react';

const WelcomeScreen = ({ onStart }) => {
    return (
        <div style={styles.container}>
            <h1>Welcome to the Ball Animation</h1>
            <p>This is a brief description of the animation.</p>
            <button onClick={onStart} style={styles.button}>Start</button>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
    },
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
    }
};

export default WelcomeScreen;
