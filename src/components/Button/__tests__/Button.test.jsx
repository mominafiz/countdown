
import {fireEvent, render, screen} from '@testing-library/react';
import ButtonComponent from '../Button';

describe('<ButtonComponent />', () => {
	describe('when button component is rendered', () => {
		it ('should display button with Start text', async () => {
			const Component = <ButtonComponent>
				Start
			</ButtonComponent>
			render(Component);
			await screen.findByText('Start');
		})
	});

	describe('when button is clicked', () => {
		it('should fire click event and callback is called', async () => {
			const buttonHandler = jest.fn();

			render(<ButtonComponent onClick={buttonHandler}>Start</ButtonComponent>);
			const button = await screen.findByTestId('button');
			fireEvent(button, new MouseEvent('click', { bubbles: true}));
			expect(buttonHandler).toHaveBeenCalled();
			expect(buttonHandler).toHaveBeenCalledTimes(1);
		});
	})
})