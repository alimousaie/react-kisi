import { signIn } from '../../apis/kisiApi';
import * as actionTypes from './actionTypes';

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

export const auth = (email, password, history) => {
	return async (dispatch) => {
		dispatch(authStart());

		try {
			await signIn(email, password);
			dispatch(authSuccess(true));
			history.push('/');
		} catch (error) {
			dispatch(authFail(error));
		}
	};
};
