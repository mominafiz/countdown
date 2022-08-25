import React, { useRef } from 'react';
import { usePress } from 'react-aria';
import styles from './Button.module.css';

const ButtonComponent = (props) => {
	const { children } = props;
	const ref = useRef();
	const {pressProps} = usePress({
		onPress: props.onPress
	});

	return (
		<button data-testid="button" className={styles.button} {...pressProps} ref={ref}>
			{children}
		</button>
	)
};


export default ButtonComponent;