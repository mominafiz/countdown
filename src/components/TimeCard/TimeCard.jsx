import React from 'react';
import { Flex } from '../Flex';
import { Label } from '../Label';

const TimeCard = (props) => {
	const {counter, label} = props;

	return (
		<Flex>
			<Label fontSize='2rem'>{counter}</Label>
			<Label variant='modern' fontSize='0.8rem'>{label}</Label>
		</Flex>
	)
}

export default TimeCard;