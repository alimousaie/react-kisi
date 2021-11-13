import { signIn } from '../../apis/kisiApi';
import * as actionTypes from './actionTypes';
import store from '../store';

export const authStart = () => {
	return {
		type: actionTypes.AUTH_START,
	};
};

export const authSuccess = (isLogedin) => {
	return {
		type: actionTypes.AUTH_SUCCESS,
		data: isLogedin,
	};
};

export const authFail = (error) => {
	return {
		type: actionTypes.AUTH_FAIL,
		error: error,
	};
};

export const logout = () => {
	return {
		type: actionTypes.AUTH_LOGOUT,
	};
};

export const auth = (email, password) => {
	return async (dispatch) => {
		dispatch(authStart());

		try {
			await signIn(email, password);
			dispatch(authSuccess(true));
		} catch (err) {
			dispatch(authFail(err.response.data.error));
		}
	};
};

export const setAuthRedirectPath = (path) => {
	return {
		type: actionTypes.SET_AUTH_REDIRECT_PATH,
		path: path,
	};
};

export const authCheckState = () => {
	return (dispatch) => {
		console.log('store.getState', store.getState());
		console.log('store.getState().authReducer', store.getState().auth);

		const isLogedin = store.getState().auth.isLogedin;
		if (!isLogedin) {
			dispatch(logout());
		}
	};
};
