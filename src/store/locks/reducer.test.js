import reducer from './reducer';
import * as actionTypes from './actionTypes';

describe('locks reducer test', () => {
	const initialState = {
		locks: [],
		pagination: null,
		loading: false,
		error: null,
	};

	it('should return the initial state', () => {
		const nextState = reducer(undefined, {});

		expect(nextState).toEqual({
			locks: [],
			pagination: null,
			loading: false,
			error: null,
		});
	});

	it('should store the locks upon fetch completed successfully', () => {
		const action = {
			type: actionTypes.FETCH_LOCKS_SUCCESS,
			data: {
				data: [1, 2],
				pagination: {},
			},
		};

		const nextState = reducer(initialState, action);

		expect(nextState).toEqual({
			locks: [1, 2],
			pagination: {},
			loading: false,
			error: null,
		});
	});

	it('should store the groups upon fetch failed', () => {
		const action = {
			type: actionTypes.FETCH_LOCKS_FAIL,
			error: 'error',
		};

		const nextState = reducer(initialState, action);

		expect(nextState).toEqual({
			locks: [],
			pagination: null,
			loading: false,
			error: 'error',
		});
	});
});
