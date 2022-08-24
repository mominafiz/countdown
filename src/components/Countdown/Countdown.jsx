import React, { useCallback, useEffect, useState } from 'react';
import styles from './Countdown.module.css';
import PropTypes from 'prop-types';

const Countdown = (props) => {
	const { date } = props;

	const [countDown, setCountDown] = useState({
		days: 0,
		hours: 0,
		min: 0,
		sec: 0,
	});

	const calculateCountDown = useCallback((endDate) => {
		let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;
	
		const timeLeft = {
		  years: 0,
		  days: 0,
		  hours: 0,
		  min: 0,
		  sec: 0,
		  millisec: 0,
		};
	
		// calculate time difference between now and expected date
		if (diff >= (365.25 * 86400)) { // 365.25 * 24 * 60 * 60
		  timeLeft.years = Math.floor(diff / (365.25 * 86400));
		  diff -= timeLeft.years * 365.25 * 86400;
		}
		if (diff >= 86400) { // 24 * 60 * 60
		  timeLeft.days = Math.floor(diff / 86400);
		  diff -= timeLeft.days * 86400;
		}
		if (diff >= 3600) { // 60 * 60
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
			setCountDown(countdownDate)
		}, 1000)

		return () => {
			stop(interval);
		}
	}, [date, calculateCountDown, setCountDown, stop]);
	
	const addLeadingZeros = (value) => {
		value = String(value);
		while (value.length < 2) {
		  value = '0' + value;
		}
		return value;
	}

	return (
		  <div className={styles.Countdown}>
			<span className={styles.countdownCol}>
			  <strong>{addLeadingZeros(countDown.days)}</strong>
			  <span>{countDown.days === 1 ? 'Day' : 'Days'}</span>
			</span>
	
			<span className={styles.countdownCol}>
			  <strong>{addLeadingZeros(countDown.hours)}</strong>
			  <span>Hours</span>
			</span>
	
			<span className={styles.countdownCol}>
			  <strong>{addLeadingZeros(countDown.min)}</strong>
			  <span>Min</span>
			</span>
	
			<span className={styles.countdownCol}>
			  <strong>{addLeadingZeros(countDown.sec)}</strong>
			  <span>Sec</span>
			</span>
		  </div>
		);
};

Countdown.propTypes = {
	date: PropTypes.string,
}

export default Countdown;