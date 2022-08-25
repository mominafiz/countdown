import React from 'react';
import { Flex } from '../Flex';
import styles from './ExpiredTimer.module.css';

const ExpiredTimer = (props) => {
	return (
		<Flex>
			<p className={styles.expired}>
				Happy Birthday!!!
			</p>
		</Flex>
	)
};

export default ExpiredTimer;