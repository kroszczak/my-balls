import React from 'react';

const WelcomeScreen = ({ onStart }) => {
    return (
        <div style={styles.container}>
            <h1>Przedstawiamy: nasze kule (The our balls expreriment)</h1>
            <p> 1. Upewnij się, że jesteś sam w pomieszczeniu w cichym pomieszczeniu.
                2. Jeśli możesz, załóż słuchawki
                3. Ustaw głośność swojego urządzenia na maksymalny poziom.

                Zobaczysz kilkanaście kulek odbijających się od ścian. Twoim zadaniem jest policzenie, ile razy czerwone kulki łącznie zderzą się ze ścianą, lub inną kulką.</p>
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
