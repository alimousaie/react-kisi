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

export default reducer;
