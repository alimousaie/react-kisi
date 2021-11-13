import reducer from './reducer';
import * as actionTypes from './actionTypes';

describe('groupLock reducer test', () => {
	const initialState = {
		groupLocks: {},
		loading: false,
		error: null,
	};

	it('should return the initial state', () => {
		const nextState = reducer(undefined, {});

		expect(nextState).toEqual({
			groupLocks: {},
			loading: false,
			error: null,
		});
	});

	it('should store the group lock upon fetch completed successfully', () => {
		const action = {
			type: actionTypes.FETCH_GROUP_LOCKS_SUCCESS,
			data: { 1: [1, 2] },
		};

		const nextState = reducer(initialState, action);

		expect(nextState).toEqual({
			groupLocks: { 1: [1, 2] },
			loading: false,
			error: null,
		});
	});

	it('should store the group lock upon fetch failed', () => {
		const action = {
			type: actionTypes.FETCH_GROUP_LOCKS_FAIL,
			error: 'error',
		};

		const nextState = reducer(initialState, action);

		expect(nextState).toEqual({
			groupLocks: {},
			loading: false,
			error: 'error',
		});
	});

	it('should store the group lock upon assign lock completed successfully', () => {
		const action = {
			type: actionTypes.ASSIGN_LOCK_SUCCESS,
			data: [
				{ groupId: 1, id: 1 },
				{ groupId: 1, id: 2 },
				{ groupId: 2, id: 3 },
				{ groupId: 2, id: 4 },
			],
		};

		const nextState = reducer(initialState, action);

		expect(nextState).toEqual({
			groupLocks: {
				1: [
					{ groupId: 1, id: 1 },
					{ groupId: 1, id: 2 },
				],
				2: [
					{ groupId: 2, id: 3 },
					{ groupId: 2, id: 4 },
				],
			},
			loading: false,
			error: null,
		});
	});

	it('should remove selected group lock from groupLocks list upon unassign completed successfully', () => {
		const action = {
			type: actionTypes.UNASSIGN_LOCK_SUCCESS,
			data: { groupId: 1, groupLockId: 1 },
		};

		const lastState = {
			...initialState,
			groupLocks: {
				1: [
					{ groupId: 1, id: 1 },
					{ groupId: 1, id: 2 },
				],
				2: [
					{ groupId: 2, id: 3 },
					{ groupId: 2, id: 4 },
				],
			},
		};
		const nextState = reducer(lastState, action);

		expect(nextState).toEqual({
			groupLocks: {
				1: [{ groupId: 1, id: 2 }],
				2: [
					{ groupId: 2, id: 3 },
					{ groupId: 2, id: 4 },
				],
			},
			loading: false,
			error: null,
		});
	});

	it('should remove all group locks related to the group from groupLocks list upon unassign completed successfully', () => {
		const action = {
			type: actionTypes.UNASSIGN_ALL_LOCK_SUCCESS,
			data: 1,
		};

		const lastState = {
			...initialState,
			groupLocks: {
				1: [
					{ groupId: 1, id: 1 },
					{ groupId: 1, id: 2 },
				],
				2: [
					{ groupId: 2, id: 3 },
					{ groupId: 2, id: 4 },
				],
			},
		};
		const nextState = reducer(lastState, action);

		expect(nextState).toEqual({
			groupLocks: {
				1: [],
				2: [
					{ groupId: 2, id: 3 },
					{ groupId: 2, id: 4 },
				],
			},
			loading: false,
			error: null,
		});
	});
});
