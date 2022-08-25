import React from 'react';
import styles from './Button.module.css';

const ButtonComponent = (props) => {
	const { children, onClick, isDisabled } = props;
	

	return (
		<button data-testid="button" className={`${styles.button} ${isDisabled ? styles.disabled : ''}`} onClick={onClick} disabled={isDisabled}>
			{children}
		</button>
	)
};


export default ButtonComponent;