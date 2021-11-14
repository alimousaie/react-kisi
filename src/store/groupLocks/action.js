import { getKisiClient } from '../../apis/kisiApi';
import * as actionTypes from './actionTypes';

export const fetchGroupLocksSuccess = (groupId, groupLocks) => {
	return {
		type: actionTypes.FETCH_GROUP_LOCKS_SUCCESS,
		data: { [groupId]: groupLocks },
	};
};

export const fetchGroupLocksFail = (error) => {
	return {
		type: actionTypes.FETCH_GROUP_LOCKS_FAIL,
		error: error,
	};
};

export const fetchGroupLocksStart = () => {
	return {
		type: actionTypes.FETCH_GROUP_LOCKS_START,
	};
};

export const fetchGroupLocks = (groupId) => {
	return async (dispatch) => {
		const kisiClient = await getKisiClient();
		dispatch(fetchGroupLocksStart());

		try {
			const groupLocks = await kisiClient.get(
				`group_locks?group_id=${groupId}`
			);
			dispatch(fetchGroupLocksSuccess(groupId, groupLocks));
		} catch (error) {
			dispatch(fetchGroupLocksFail(error));
		}
	};
};

export const assignLockSuccess = (groupLocks) => {
	return {
		type: actionTypes.ASSIGN_LOCK_SUCCESS,
		data: groupLocks,
	};
};

export const assignLockFail = (error) => {
	return {
		type: actionTypes.ASSIGN_LOCK_FAIL,
		error: error,
	};
};

export const assignLockStart = () => {
	return {
		type: actionTypes.ASSIGN_LOCK_START,
	};
};

export const assignLock = (pairs) => {
	return async (dispatch) => {
		dispatch(assignLockStart());

		try {
			const kisiClient = await getKisiClient();
			const result = pairs.map((pair) => {
				const data = {
					group_lock: {
						group_id: pair.groupId,
						lock_id: pair.lockId,
					},
				};

				return kisiClient.post('group_locks', data);
			});

			const groupLocks = await Promise.all(result);
			dispatch(assignLockSuccess(groupLocks));
		} catch (error) {
			console.error('assignLock', error);
			dispatch(assignLockFail(error));
		}
	};
};

export const unassignLockStart = () => {
	return {
		type: actionTypes.UNASSIGN_LOCK_START,
	};
};

export const unassignLockSuccess = (groupId, groupLockId) => {
	return {
		type: actionTypes.UNASSIGN_LOCK_SUCCESS,
		data: { groupId, groupLockId },
	};
};

export const unassignLockFail = (error) => {
	return {
		type: actionTypes.UNASSIGN_LOCK_FAIL,
		error: error,
	};
};

export const unassignLock = (groupId, groupLockId) => {
	return async (dispatch) => {
		const kisiClient = await getKisiClient();
		dispatch(assignLockStart());
		try {
			await kisiClient.delete(`group_locks/${groupLockId}`);
			dispatch(unassignLockSuccess(groupId, groupLockId));
		} catch (error) {
			console.error('unassignLock', error);
			dispatch(unassignLockFail(error));
		}
	};
};

export const unassignAllLockStart = () => {
	return {
		type: actionTypes.UNASSIGN_ALL_LOCK_START,
	};
};

export const unassignAllLockSuccess = (groupId) => {
	return {
		type: actionTypes.UNASSIGN_ALL_LOCK_SUCCESS,
		data: groupId,
	};
};

export const unassignAllLockFail = (error) => {
	return {
		type: actionTypes.UNASSIGN_ALL_LOCK_FAIL,
		error: error,
	};
};

export const unassignAllLock = (groupId, groupLocks) => {
	return async (dispatch) => {
		const kisiClient = await getKisiClient();
		dispatch(unassignAllLockStart());

		try {
			const result = groupLocks.map((groupLock) => {
				return kisiClient.delete(`group_locks/${groupLock.id}`);
			});

			await Promise.all(result);
			dispatch(unassignAllLockSuccess(groupId));
		} catch (error) {
			console.error('unassignAllLock', error);
			dispatch(unassignAllLockFail(error));
		}
	};
};
