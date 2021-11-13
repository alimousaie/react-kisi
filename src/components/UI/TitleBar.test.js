import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TitleBar from './TitleBar';

describe('<TitleBar/>', () => {
	it('renders the component', () => {
		const props = { title: '', subtitle: '', badge: '' };

		render(<TitleBar {...props} />);
		expect(screen).toBeTruthy();
	});

	it('should rendred correctly with props', () => {
		const props = {
			title: 'sample title',
			subtitle: 'sub title test',
			badge: '12',
		};

		render(<TitleBar {...props} />);
		expect(screen.getByText('sample title')).toBeInTheDocument();
		expect(screen.getByText('sub title test')).toBeInTheDocument();
		expect(screen.getByText('12')).toBeInTheDocument();
	});
});
