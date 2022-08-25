import { render, screen } from "@testing-library/react"
import Label from "../Label"

describe('<Label />', () => {
	describe('when component renders', () => {
		it('should display the text in the label', () => {
			const label = 'Mock Label';
			render(<Label>{label}</Label>);
			const labelElement = screen.getByText(label);
			expect(labelElement).toBeTruthy();
		})
	})
 })