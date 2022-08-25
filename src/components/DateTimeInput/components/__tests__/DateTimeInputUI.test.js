import { render, screen } from '@testing-library/react';
import DateTimeInputUI from '../DateTimeInputUI';

describe('<DateTimeInputUI />', () => {
    describe('when date input component renders', () => {
        it('should display date in the input field with target date', () => {
			const mockOnChange = jest.fn();
            render(
                <DateTimeInputUI
                    targetDate='2022-12-01'
                    maxDate='2099-12-31T00:00'
					onChange={mockOnChange}
                />
            );
            const datetimeInput = screen.getByTestId('target-datetime');
            expect(datetimeInput.className).toBe('datePicker');
        });
    });
});
