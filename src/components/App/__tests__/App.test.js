import { render, screen } from '@testing-library/react';
import {App} from '..';

describe('<App />', () => {
	it('renders learn react link', () => {
	  render(<App />);
	  screen.getByText(/Countdown/i);
	});
});
