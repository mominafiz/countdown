import React, { useCallback, useState } from "react";
import DateTimeInputUI from './components/DateTimeInputUI';

const DateTimeInput = (props) => {
	const {onChange, maxDate, targetDate } = props;

	const [value, setValue] = useState(targetDate);
	const onChangeHandler = useCallback((event) => {
		const dateTimeInputValue = event.target.value;
		setValue(dateTimeInputValue);
	
		if (typeof onChange === 'function') {
			onChange(dateTimeInputValue);
		}
	}, [onChange]);

    return (
        <DateTimeInputUI
            onChange={onChangeHandler}  
            targetDate={value}
            maxDate={maxDate}
        />
    );
};


export default DateTimeInput;
