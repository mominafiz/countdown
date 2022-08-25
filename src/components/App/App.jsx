import styles from './App.module.css';
import { Countdown } from '../Countdown';
import StartCountdown from '../StartCountdown/StartCountdown';
import { useCallback, useState } from 'react';

function App() { 
	const [targetDatetime, setTargetDatetime] = useState(null);
	const [didCountdownStart, setDidCountdownStart] = useState(false);

	const onStartCountDown = useCallback(
	  (datetime) => {
		setTargetDatetime(datetime);
		setDidCountdownStart(true);
	  },
	  [setTargetDatetime, setDidCountdownStart],
	)

    return (
        <div className={styles.app}>
            <header className={styles.appHeader}>
                <h1>Countdown</h1>
            </header>
            <div>
                {didCountdownStart && <Countdown date={targetDatetime} />}
                {!didCountdownStart && <StartCountdown onStartCountDown={onStartCountDown} />}
            </div>
        </div>
    );
}

export default App;
