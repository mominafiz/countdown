import React, { useCallback, useState } from 'react';
import { Button } from '../Button';
import { DateTimeInput } from '../DateTimeInput';
import { Flex } from '../Flex';
import { Label } from '../Label';

const StartCountdown = (props) => {
	const [datetime, setDatetime] = useState(null);
	const [error, setError] = useState('');
	const [isBtnDisabled, setIsBtnDisabled] = useState(true);

	const onDateTimeInputChange = useCallback(
	  (value, error) => {
		if (!error) {
			setDatetime(value);
			setIsBtnDisabled(false);
		} else {
			setError(error);
			setIsBtnDisabled(true);
		}
	  },
	  [setDatetime, setError],
	);
	
	const onClick = useCallback((event) => {
		event.preventDefault();

		if (!error && typeof props.onStartCountDown === 'function') {
			props.onStartCountDown(datetime);
		}
	}, [error, props, datetime]);

    return (
        <>
			<p>
				{error}
			</p>
			<Flex>
				<Label>Select DateTime</Label>
				<DateTimeInput onChange={onDateTimeInputChange} />
				<Button onClick={onClick} isDisabled={isBtnDisabled}>
					<span>Start</span>
				</Button>
			</Flex>
        </>
    );
};

export default StartCountdown;
