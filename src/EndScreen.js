import React from 'react';

const EndScreen = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.text}>Dziękujemy za udział w badaniu!</h1>
            <br />

            <h2 style={styles.text}>prosimy o wypełnienie ankiety: <br /><a href="http://forms.gle/EMfT3BHJD7sLfbyk7">http://forms.gle/EMfT3BHJD7sLfbyk7</a></h2>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    },
    text: {
        fontSize: '32px',
        textAlign: 'center',
    }
};

export default EndScreen;
