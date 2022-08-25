import React, { useCallback, useEffect, useState } from 'react';
import { Button } from '../Button';
import {DisplayTimer} from '../DisplayTimer';

const StopCountdown = (props) => {
    const { date, onStopCountdownTimer } = props;

    const [countDown, setCountDown] = useState({
        days: 0,
        hours: 0,
        min: 0,
        sec: 0
    });

	const isCountdownExpired = (countDown) => {
		return countDown.sec <= 0 && countDown.min <= 0 && countDown.days <= 0 && countDown.hours <= 0;
	}

    const calculateCountDown = useCallback((endDate) => {
        let diff =
            (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

        const timeLeft = {
            years: 0,
            days: 0,
            hours: 0,
            min: 0,
            sec: 0,
            millisec: 0
        };

        // calculate time difference between now and expected date
        if (diff >= 365.25 * 86400) {
            // 365.25 * 24 * 60 * 60
            timeLeft.years = Math.floor(diff / (365.25 * 86400));
            diff -= timeLeft.years * 365.25 * 86400;
        }
        if (diff >= 86400) {
            // 24 * 60 * 60
            timeLeft.days = Math.floor(diff / 86400);
            diff -= timeLeft.days * 86400;
        }
        if (diff >= 3600) {
            // 60 * 60
            timeLeft.hours = Math.floor(diff / 3600);
            diff -= timeLeft.hours * 3600;
        }
        if (diff >= 60) {
            timeLeft.min = Math.floor(diff / 60);
            diff -= timeLeft.min * 60;
        }
        timeLeft.sec = diff;
        return timeLeft;
    }, []);

    const stop = useCallback((interval) => {
        clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            const countdownDate = calculateCountDown(date);
			if (isCountdownExpired(countdownDate)) {
				onStopCountdownTimer(true);
				stop(interval);
			}
            setCountDown(countdownDate);
        }, 1000);

        return () => {
            stop(interval);
        };
    }, [date, calculateCountDown, setCountDown, stop, onStopCountdownTimer]);
	

	const onStopCountdownTimerHandler = useCallback(
	  () => {
		if (typeof onStopCountdownTimer === 'function') {
			onStopCountdownTimer();
		}
	  },
	  [onStopCountdownTimer],
	)
	

    return (
		<>	
			<DisplayTimer countDown={countDown} />
			<Button onClick={onStopCountdownTimerHandler}>Stop</Button>
		</>
    );
};

export default StopCountdown;
