import React from 'react';
import styles from './Label.module.css';

const Label = (props) => {
	return <div className={styles.label}>{props.children}</div>
}

export default Label;