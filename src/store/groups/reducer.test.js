import reducer from './reducer';
import * as actionTypes from './actionTypes';

describe('groups reducer test', () => {
	const initialState = {
		groups: [],
		filterdGroups: [],
		filterText: null,
		pagination: null,
		loading: false,
		error: null,
	};

	it('should return the initial state', () => {
		const nextState = reducer(undefined, {});

		expect(nextState).toEqual({
			groups: [],
			filterdGroups: [],
			filterText: null,
			pagination: null,
			loading: false,
			error: null,
		});
	});

	it('should store the groups upon fetch completed successfully', () => {
		const action = {
			type: actionTypes.FETCH_GROUPS_SUCCESS,
			data: {
				data: [1, 2],
				pagination: {},
			},
		};

		const nextState = reducer(initialState, action);

		expect(nextState).toEqual({
			groups: [1, 2],
			filterdGroups: [1, 2],
			pagination: {},
			filterText: null,
			loading: false,
			error: null,
		});
	});

	it('should store the groups upon fetch failed', () => {
		const action = {
			type: actionTypes.FETCH_GROUPS_FAIL,
			error: 'error',
		};

		const nextState = reducer(initialState, action);

		expect(nextState).toEqual({
			groups: [],
			filterdGroups: [],
			filterText: null,
			pagination: null,
			loading: false,
			error: 'error',
		});
	});

	it('should store new data in filterdGroups', () => {
		const action = {
			type: actionTypes.FILTER_GROUPS,
			data: 'a',
		};

		const lastState = {
			...initialState,
			groups: [
				{ name: 'ab', Id: 1 },
				{ name: 'bc', Id: 2 },
				{ name: 'ba', Id: 3 },
			],
		};
		const nextState = reducer(lastState, action);

		expect(nextState).toEqual({
			groups: [
				{ name: 'ab', Id: 1 },
				{ name: 'bc', Id: 2 },
				{ name: 'ba', Id: 3 },
			],
			filterdGroups: [
				{ name: 'ab', Id: 1 },
				{ name: 'ba', Id: 3 },
			],
			filterText: 'a',
			pagination: null,
			loading: false,
			error: null,
		});
	});
});
