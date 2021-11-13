import reducer from './reducer';
import * as actionTypes from './actionTypes';

describe('place reducer test', () => {
	const initialState = {
		places: [],
		pagination: null,
		loading: false,
		error: null,
	};

	it('should return the initial state', () => {
		const nextState = reducer(undefined, {});

		expect(nextState).toEqual({
			places: [],
			pagination: null,
			loading: false,
			error: null,
		});
	});

	it('should store the places upon fetch completed successfully', () => {
		const action = {
			type: actionTypes.FETCH_PLACES_SUCCESS,
			data: {
				data: [1, 2],
				pagination: {},
			},
		};

		const nextState = reducer(initialState, action);

		expect(nextState).toEqual({
			places: [1, 2],
			pagination: {},
			loading: false,
			error: null,
		});
	});

	it('should store the places upon fetch failed', () => {
		const action = {
			type: actionTypes.FETCH_PLACES_FAIL,
			error: 'error',
		};

		const nextState = reducer(initialState, action);

		expect(nextState).toEqual({
			places: [],
			pagination: null,
			loading: false,
			error: 'error',
		});
	});
});
