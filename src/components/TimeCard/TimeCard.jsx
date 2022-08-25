import React from 'react';
import { Flex } from '../Flex';
import { Label } from '../Label';
import styles from './TimeCard.module.css';

const TimeCard = (props) => {
	const {counter, label} = props;

	if (parseInt(counter) <= 0) {
		return null;
	}

	return (
		<Flex className={styles.flexContainer}>
			<Label fontSize='7rem'>{counter}</Label>
			<Label variant='modern' fontSize='2em'>{label}</Label>
		</Flex>
	)
}

export default TimeCard;