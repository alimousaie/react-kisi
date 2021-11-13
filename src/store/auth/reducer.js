import * as actionTypes from './actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
	error: null,
	isLogedin: false,
	loading: false,
	authRedirectPath: '/',
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

const setAuthRedirectPath = (state, action) => {
	return updateObject(state, { authRedirectPath: action.path });
};

const strategies = {
	[actionTypes.AUTH_START]: authStart,
	[actionTypes.AUTH_SUCCESS]: authSuccess,
	[actionTypes.AUTH_FAIL]: authFail,
	[actionTypes.AUTH_LOGOUT]: authLogout,
	[actionTypes.SET_AUTH_REDIRECT_PATH]: setAuthRedirectPath,
	__default__: (state) => state,
};

const reducer = (state = initialState, action) => {
	const strategy = strategies[action.type] ?? strategies.__default__;
	return strategy(state, action);
};

// const reducer = ( state = initialState, action ) => {
//     switch ( action.type ) {
//         case actionTypes.AUTH_START: return authStart(state, action);
//         case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
//         case actionTypes.AUTH_FAIL: return authFail(state, action);
//         case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
//         case actionTypes.SET_AUTH_REDIRECT_PATH: return setAuthRedirectPath(state,action);
//         default:
//             return state;
//     }
// };

export default reducer;
