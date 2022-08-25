import React from "react";
import styles from "./DateTimeInputUI.module.css";

const DateTimeInputUI = (props) => {
	return (
        <input
            onChange={props.onChange}
            data-testid="target-datetime"
            type="datetime-local"
            value={props.targetDate || new Date().toDateString()}
            className={styles.datePicker}
            min={props.targetDate}
            max={props.maxDate}
        />
    );
}

export default DateTimeInputUI;