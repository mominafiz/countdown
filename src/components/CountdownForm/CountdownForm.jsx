import React from 'react';

const TextBlock = (props) => <p>{props.errorMessage}</p>;

const CountdownForm = (props) => {
	return (
		<>
			{ props.errorMessage &&
				<TextBlock errorMessage={props.errorMessage} />
			}
			<form onSubmit={props.onSubmit}>
				{props.children}
			</form>
		</>
	);
};

export default CountdownForm;
