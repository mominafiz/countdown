import React from 'react';
import { Flex } from '../Flex';
import TimeCard from '../TimeCard/TimeCard';

const addLeadingZeros = (value) => {
	value = String(value);
	while (value.length < 2) {
		value = '0' + value;
	}
	return value;
};

const DisplayTimer = (props) => {
	const {countDown} = props;
    return (
        <Flex flowDirection='row'>
            <TimeCard
                counter={addLeadingZeros(countDown.days)}
                label={countDown.days === 1 ? 'Day' : 'Days'}
            />

			<TimeCard
				counter={addLeadingZeros(countDown.hours)}
				label='Hours'
			/>

			<TimeCard
				counter={addLeadingZeros(countDown.min)}
				label='Min'
			/>

			<TimeCard
				counter={addLeadingZeros(countDown.sec)}
				label='Sec'
			/>
        </Flex>
    );
}

export default DisplayTimer;
