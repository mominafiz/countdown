import React, { useRef } from 'react';
import { usePress } from 'react-aria';
import {Button} from 'semantic-ui-react';

const ButtonComponent = (props) => {
	const { children } = props;
	const ref = useRef();
	const {pressProps} = usePress({
		onPress: props.onPress
	});

	return (
		<Button data-testid="button" {...pressProps} ref={ref}>
			{children}
		</Button>
	)
};


export default ButtonComponent;