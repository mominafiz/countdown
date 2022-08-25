import styles from './App.module.css';
import { StopCountdown } from '../StopCountdown';
import {StartCountdown} from '../StartCountdown';
import { useCallback, useState } from 'react';
import ExpiredTimer from '../ExpiredTimer/ExpiredTimer';

function App() { 
	const [targetDatetime, setTargetDatetime] = useState(null);
	const [didCountdownStart, setDidCountdownStart] = useState(false);
	const [expiredTimer, setExpiredTimer] = useState(false);

	const onStartCountDown = useCallback(
	  (datetime) => {
		if (Date.parse(datetime) < new Date()) {
			setExpiredTimer(true);
		}
		setTargetDatetime(datetime);
		setDidCountdownStart(true);
	  },
	  [setTargetDatetime, setDidCountdownStart],
	)

	const onStopCountdown = useCallback(
	  (isTimerExpired) => {
		if (!!isTimerExpired) {
			setExpiredTimer(isTimerExpired);
		} else {
			setTargetDatetime(null);
			setDidCountdownStart(false);
			setExpiredTimer(false);
		}
	  },
	  [setTargetDatetime, setDidCountdownStart],
	)
	

    return (
        <div className={styles.app} data-testid='countDownTimerApp'>
            <div>
				{expiredTimer && <ExpiredTimer />}
                {!expiredTimer && didCountdownStart && <StopCountdown onStopCountdownTimer={onStopCountdown} date={targetDatetime} />}
                {!expiredTimer && !didCountdownStart && <StartCountdown onStartCountDown={onStartCountDown} />}
            </div>
        </div>
    );
}

export default App;
