import React, { useCallback, useState } from "react";
import DateTimeInputUI from './components/DateTimeInputUI';

const DateTimeInput = (props) => {
	const {onChange, maxDate, targetDate } = props;
	const [error, setError] = useState('');

	const [value, setValue] = useState(targetDate);
	const onChangeHandler = useCallback((event) => {
		const dateTimeInputValue = event.target.value;
		if (!dateTimeInputValue) {
			setError('Please select the date time');
		}

		setValue(dateTimeInputValue);
	
		if (typeof onChange === 'function') {
			onChange(dateTimeInputValue, error);
		}
	}, [onChange, setError, error]);

    return (
        <DateTimeInputUI
            onChange={onChangeHandler}  
            targetDate={value}
            maxDate={maxDate}
        />
    );
};


export default DateTimeInput;
