import * as actionTypes from './actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
	groupLocks: {},
	loading: false,
	error: null,
};

const fetchGroupLocksStart = (state, action) => {
	return updateObject(state, { loading: true });
};

const fetchGroupLocksSuccess = (state, action) => {
	const updatedGroupLockList = { ...state.groupLocks, ...action.data };

	return updateObject(state, {
		groupLocks: updatedGroupLockList,
		loading: false,
		error: null,
	});
};

const fetchGroupLocksFail = (state, action) => {
	return updateObject(state, {
		loading: false,
		error: action.error,
	});
};

const assignLockStart = (state, action) => {
	return updateObject(state, { loading: true });
};

const assignLockSuccess = (state, action) => {
	let updatedState = { ...state.groupLocks };

	action.data.forEach((item) => {
		// if (!(item.group_id in updatedState)) {
		if (!updatedState.hasOwnProperty(item.groupId)) {
			updatedState[item.groupId] = [];
		}

		updatedState[item.groupId].push(item);
	});

	return updateObject(state, {
		groupLocks: updatedState,
		loading: false,
	});
};

const assignLockFail = (state, action) => {
	return updateObject(state, {
		loading: false,
		error: action.error,
	});
};

const unassignLockStart = (state, action) => {
	return updateObject(state, { loading: true });
};

const unassignLockSuccess = (state, action) => {
	const updatedState = { ...state.groupLocks };
	const updatedGroupLock = updatedState[action.data.groupId].filter(
		(row) => row.id !== action.data.groupLockId
	);
	updatedState[action.data.groupId] = updatedGroupLock;

	return updateObject(state, {
		groupLocks: updatedState,
		loading: false,
	});
};

const unassignLockFail = (state, action) => {
	return updateObject(state, {
		loading: false,
		error: action.error,
	});
};

const unassignAllLockStart = (state, action) => {
	return updateObject(state, { loading: true });
};

const unassignAllLockSuccess = (state, action) => {
	const updatedState = { ...state.groupLocks };
	updatedState[action.data] = [];

	return updateObject(state, {
		groupLocks: updatedState,
		loading: false,
	});
};

const unassignAllLockFail = (state, action) => {
	return updateObject(state, {
		loading: false,
		error: action.error,
	});
};

const strategies = {
	[actionTypes.FETCH_GROUP_LOCKS_START]: fetchGroupLocksStart,
	[actionTypes.FETCH_GROUP_LOCKS_SUCCESS]: fetchGroupLocksSuccess,
	[actionTypes.FETCH_GROUP_LOCKS_FAIL]: fetchGroupLocksFail,
	[actionTypes.ASSIGN_LOCK_START]: assignLockStart,
	[actionTypes.ASSIGN_LOCK_SUCCESS]: assignLockSuccess,
	[actionTypes.ASSIGN_LOCK_FAIL]: assignLockFail,
	[actionTypes.UNASSIGN_LOCK_START]: unassignLockStart,
	[actionTypes.UNASSIGN_LOCK_SUCCESS]: unassignLockSuccess,
	[actionTypes.UNASSIGN_LOCK_FAIL]: unassignLockFail,
	[actionTypes.UNASSIGN_ALL_LOCK_START]: unassignAllLockStart,
	[actionTypes.UNASSIGN_ALL_LOCK_SUCCESS]: unassignAllLockSuccess,
	[actionTypes.UNASSIGN_ALL_LOCK_FAIL]: unassignAllLockFail,
	__default__: (state) => state,
};

const reducer = (state = initialState, action) => {
	const strategy = strategies[action.type] ?? strategies.__default__;
	return strategy(state, action);
};

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case actionTypes.FETCH_GROUP_LOCKS_START: return fetchGroupLocksStart(state, action);
//     case actionTypes.FETCH_GROUP_LOCKS_SUCCESS: return fetchGroupLocksSuccess(state, action);
//     case actionTypes.FETCH_GROUP_LOCKS_FAIL: return fetchGroupLocksFail(state, action);
//     case actionTypes.ASSIGN_LOCK_START: return assignLockStart(state, action);
//     case actionTypes.ASSIGN_LOCK_SUCCESS: return assignLockSuccess(state, action);
//     case actionTypes.ASSIGN_LOCK_FAIL: return assignLockFail(state, action);
//     case actionTypes.UNASSIGN_LOCK_START: return unassignLockStart(state, action);
//     case actionTypes.UNASSIGN_LOCK_SUCCESS: return unassignLockSuccess(state, action);
//     case actionTypes.UNASSIGN_LOCK_FAIL: return unassignLockFail(state, action);
//     case actionTypes.UNASSIGN_ALL_LOCK_START: return unassignAllLockStart(state, action);
//     case actionTypes.UNASSIGN_ALL_LOCK_SUCCESS: return unassignAllLockSuccess(state, action);
//     case actionTypes.UNASSIGN_ALL_LOCK_FAIL: return unassignAllLockFail(state, action);
//     default: return state;
//   }
// };

export default reducer;
