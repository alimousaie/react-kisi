import reducer from './reducer';
import * as actionTypes from './actionTypes';

describe('auth reducer test', () => {
	const initialState = {
		error: null,
		isLogedin: false,
		loading: false,
		authRedirectPath: '/',
	};

	it('should return the initial state', () => {
		const nextState = reducer(undefined, {});

		expect(nextState).toEqual({
			error: null,
			isLogedin: false,
			loading: false,
			authRedirectPath: '/',
		});
	});

	it('should change isLogin to true upon login completed successfully', () => {
		const action = {
			type: actionTypes.AUTH_SUCCESS,
			data: true,
		};

		const nextState = reducer(initialState, action);

		expect(nextState).toEqual({
			isLogedin: true,
			error: null,
			loading: false,
			authRedirectPath: '/',
		});
	});

	it('should change isLogin to false upon logout', () => {
		const action = {
			type: actionTypes.AUTH_LOGOUT,
			data: true,
		};

		const nextState = reducer(initialState, action);

		expect(nextState).toEqual({
			isLogedin: false,
			error: null,
			loading: false,
			authRedirectPath: '/',
		});
	});
});
