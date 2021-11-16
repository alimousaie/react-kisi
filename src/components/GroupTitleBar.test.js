import { render, screen } from '../shared/test-utils';
import '@testing-library/jest-dom/extend-expect';
import GroupTitleBar from './GroupTitleBar';

describe('<GroupTitleBar/>', () => {
	it('should render with given state from Redux store', () => {
		const initialState = {
			group: {
				groups: [1, 2, 3],
			},
		};

		render(<GroupTitleBar />, { initialState: initialState });

		expect(screen).toBeTruthy();
		expect(screen.getByText('Groups')).toBeInTheDocument();
		expect(screen.getByText('3')).toBeInTheDocument();
	});

	it('should render the title without plural S', () => {
		const initialState = {
			group: {
				groups: [],
			},
		};

		render(<GroupTitleBar />, { initialState: initialState });

		expect(screen).toBeTruthy();
		expect(screen.queryByText('Groups')).not.toBeInTheDocument();
		expect(screen.getByText('Group')).toBeInTheDocument();
		expect(screen.getByText('0')).toBeInTheDocument();
	});
});
