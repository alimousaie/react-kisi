import * as actionTypes from './actionTypes';
import * as actions from './action';
import store from '../../shared/test-actions-setup';

describe('Test Auth actions', () => {
	beforeEach(() => {
		store.clearActions();
	});

	it('dispatches AUTH_SUCCESS after a successfull sign in requets', () => {
		store.dispatch(actions.auth('a', 'b')).then(() => {
			let expectedActions = [
				{ type: actionTypes.AUTH_START },
				{
					type: actionTypes.AUTH_SUCCESS,
					data: true,
				},
			];
			expect(store.getActions()).toEqual(expectedActions);
		});
	});

	it('dispatches AUTH_FAIL after sign in requets failed', () => {
		store.dispatch(actions.auth('c', 'b')).then(() => {
			let expectedActions = [
				{ type: actionTypes.AUTH_START },
				{
					type: actionTypes.AUTH_FAIL,
					error: 'login failed!',
				},
			];
			expect(store.getActions()).toEqual(expectedActions);
		});
	});
});
