import { render, screen, fireEvent } from '../../shared/test-utils';
import configureStore from 'redux-mock-store';
import SearchBox from './SearchBox';
import { filterGroups } from '../../store/groups/action';
import '@testing-library/jest-dom/extend-expect';

const mockStore = configureStore([]);

describe('<SearchBox/>', () => {
	let store;

	beforeEach(() => {
		store = mockStore({});
		store.dispatch = jest.fn();
		render(<SearchBox placeholder='Search Groups' />, { store });
	});

	it('should render with given state from Redux store', () => {
		expect(screen).toBeTruthy();
		expect(screen.getByPlaceholderText(/Search Groups/)).toBeInTheDocument();
	});

	it('should dispatch an action on button click', async () => {
		fireEvent.change(screen.getByRole('textbox'), {
			target: { value: 'test search box' },
		});

		expect(store.dispatch).toHaveBeenCalledTimes(1);
		expect(store.dispatch).toHaveBeenCalledWith(
			filterGroups('test search box')
		);
	});
});

// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import configureStore from 'redux-mock-store';
// import { filterGroups } from '../../store/groups/action';
// import SearchBox from './SearchBox';
// import '@testing-library/jest-dom/extend-expect';

// const mockStore = configureStore([]);

// describe('<SearchBox/>', () => {
// 	let store;
// 	let component;

// 	beforeEach(() => {
// 		store = mockStore({});
// 		store.dispatch = jest.fn();

// 		component = render(
// 			<Provider store={store}>
// 				<SearchBox placeholder='Search Groups' />
// 			</Provider>
// 		);
// 	});

// 	it('should render with given state from Redux store', () => {
// 		expect(screen).toBeTruthy();
// 		expect(screen.getByPlaceholderText(/Search Groups/)).toBeInTheDocument();
// 	});

// 	it('should dispatch an action on button click', async () => {
// 		fireEvent.change(screen.getByRole('textbox'), {
// 			target: { value: 'test search box' },
// 		});

// 		expect(store.dispatch).toHaveBeenCalledTimes(1);
// 		expect(store.dispatch).toHaveBeenCalledWith(
// 			filterGroups('test search box')
// 		);
// 	});
// });
