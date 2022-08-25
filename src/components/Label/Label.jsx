import React from 'react';
import styles from './Label.module.css';

const Label = (props) => {
	const {variant = 'classic', fontSize} = props;

	switch (variant) {
		case 'classic':
			return <label className={styles.label} style={{ fontSize }}>{props.children}</label>;
		case 'modern':
			return <label className={`${styles.label} ${styles.modern}`} style={{ fontSize }}>{props.children}</label>;
		default:
			return null;

	}
}

export default Label;