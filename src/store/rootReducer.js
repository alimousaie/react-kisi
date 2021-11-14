import { reducer as authReducer } from './auth';
import { reducer as groupLocksReducer } from './groupLocks';
import { reducer as groupsReducer } from './groups';
import { reducer as locksReducer } from './locks';
import { reducer as placesReducer } from './places';

export default function combineReducers(state = {}, action) {
	return {
		groupLock: groupLocksReducer(state.groupLock, action, state),
		group: groupsReducer(state.group, action, state),
		lock: locksReducer(state.lock, action, state),
		place: placesReducer(state.place, action, state),
		auth: authReducer(state.auth, action, state),
	};
}
