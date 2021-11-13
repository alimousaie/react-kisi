import * as actionTypes from './actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
	locks: [],
	pagination: null,
	loading: false,
	error: null,
};

const fetchLocksStart = (state, action) => {
	return updateObject(state, { loading: true });
};

const fetchLocksSuccess = (state, action) => {
	return updateObject(state, {
		locks: action.data.data,
		pagination: action.data.pagination,
		loading: false,
	});
};

const fetchLocksFail = (state, action) => {
	return updateObject(state, {
		loading: false,
		error: action.error,
	});
};

const strategies = {
	[actionTypes.FETCH_LOCKS_START]: fetchLocksStart,
	[actionTypes.FETCH_LOCKS_SUCCESS]: fetchLocksSuccess,
	[actionTypes.FETCH_LOCKS_FAIL]: fetchLocksFail,
	__default__: (state) => state,
};

const reducer = (state = initialState, action) => {
	const strategy = strategies[action.type] ?? strategies.__default__;
	return strategy(state, action);
};

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case actionTypes.FETCH_LOCKS_START: return fetchLocksStart(state, action);
//     case actionTypes.FETCH_LOCKS_SUCCESS: return fetchLocksSuccess(state, action);
//     case actionTypes.FETCH_LOCKS_FAIL: return fetchLocksFail(state, action);
//     default: return state;
//   }
// };

export default reducer;
