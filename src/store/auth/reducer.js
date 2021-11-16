import * as actionTypes from './actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
	error: null,
	isLogedin: false,
	loading: false,
};

const authStart = (state, action) => {
	return updateObject(state, { error: null, loading: true });
};

const authSuccess = (state, action) => {
	return updateObject(state, {
		isLogedin: action.data,
		error: null,
		loading: false,
	});
};

const authFail = (state, action) => {
	return updateObject(state, {
		error: action.error,
		loading: false,
	});
};

const authLogout = (state, action) => {
	return updateObject(state, { isLogedin: false });
};

const strategies = {
	[actionTypes.AUTH_START]: authStart,
	[actionTypes.AUTH_SUCCESS]: authSuccess,
	[actionTypes.AUTH_FAIL]: authFail,
	[actionTypes.AUTH_LOGOUT]: authLogout,
	__default__: (state) => state,
};

const reducer = (state = initialState, action) => {
	const strategy = strategies[action.type] ?? strategies.__default__;
	return strategy(state, action);
};

export default reducer;
