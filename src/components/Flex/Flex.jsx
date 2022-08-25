import React from 'react';
import styles from './Flex.module.css';


const Flex = (props) => {
	const {flowDirection} = props;
	const flowDirectionStyle = flowDirection === 'row' ? styles.row : styles.column;

	return (
		<div className={`${styles.container} ${flowDirectionStyle}`}>
			{props.children}
		</div>
	);
}

export default Flex;