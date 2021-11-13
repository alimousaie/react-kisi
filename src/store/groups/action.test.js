import * as actionTypes from './actionTypes';
import * as actions from './action';
import store from '../../shared/test-actions-setup';

describe('Test Group actions', () => {
	beforeEach(() => {
		store.clearActions();
	});

	it('dispatches fetchGroups after a successfull get response from Api', () => {
		store.dispatch(actions.fetchGroups()).then(() => {
			let expectedActions = [
				{ type: actionTypes.FETCH_GROUPS_START },
				{
					type: actionTypes.FETCH_GROUPS_SUCCESS,
					data: {},
				},
			];
			expect(store.getActions()).toEqual(expectedActions);
		});
	});
});
