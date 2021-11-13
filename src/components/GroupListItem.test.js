import { render, screen } from '../shared/test-utils';
import '@testing-library/jest-dom/extend-expect';
import GroupListItem from './GroupListItem';

describe('<GroupListItem/>', () => {
	it('renders the component', () => {
		const group = {};
		render(<GroupListItem group={group} />);
		expect(screen.getByRole('listitem')).toBeTruthy();
	});

	it('should render all props correctly', () => {
		const group = {
			id: 1,
			name: 'test group',
			description: 'some description',
			locksCount: 2,
		};
		render(<GroupListItem group={group} />);

		expect(screen).toBeTruthy();
		expect(screen.getByRole('link')).toHaveAttribute('href', '/groups/1');
		expect(screen.getByText(group.name)).toBeInTheDocument();
		expect(screen.getByText(group.description)).toBeInTheDocument();
		expect(screen.getByRole('button')).toHaveTextContent('2');
	});

	it('should render "No description" when the group description is null or empty', () => {
		const group = {
			id: 1,
			name: 'test group',
			description: '',
			locksCount: 2,
		};
		render(<GroupListItem group={group} />);
		expect(screen.getByText('No description')).toBeInTheDocument();
	});
});
