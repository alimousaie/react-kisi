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

// import React from 'react';
// import { Provider } from 'react-redux';
// import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
// import configureStore from 'redux-mock-store';
// // import { render, screen } from '../shared/test-utils';
// import GroupTitleBar from './GroupTitleBar';

// const mockStore = configureStore([]);

// describe('<GroupTitleBar/>', () => {
// 	it('should render with given state from Redux store', () => {
// 		const store = mockStore({
// 			group: {
// 				groups: [1, 2, 3],
// 			},
// 		});

// 		render(
// 			<Provider store={store}>
// 				<GroupTitleBar />
// 			</Provider>
// 		);

// 		expect(screen).toBeTruthy();
// 		expect(screen.getByText('Groups')).toBeInTheDocument();
// 		expect(screen.getByText('3')).toBeInTheDocument();
// 	});

// 	it('should render the title without plural S', () => {
// 		const store = mockStore({
// 			group: {
// 				groups: [],
// 			},
// 		});

// 		render(
// 			<Provider store={store}>
// 				<GroupTitleBar />
// 			</Provider>
// 		);

// 		expect(screen).toBeTruthy();
// 		expect(screen.queryByText('Groups')).not.toBeInTheDocument();
// 		expect(screen.getByText('Group')).toBeInTheDocument();
// 		expect(screen.getByText('0')).toBeInTheDocument();
// 	});
// });
