import * as actionTypes from './actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
	groups: [],
	filterdGroups: [],
	filterText: null,
	pagination: null,
	loading: false,
	error: null,
};

const fetchGroupsStart = (state, action) => {
	return updateObject(state, { loading: true });
};

const fetchGroupsSuccess = (state, action) => {
	return updateObject(state, {
		groups: action.data.data,
		filterdGroups: action.data.data,
		pagination: action.data.pagination,
		filterText: null,
		loading: false,
	});
};

const fetchGroupsFail = (state, action) => {
	return updateObject(state, {
		loading: false,
		error: action.error,
	});
};

const filterGroups = (state, action) => {
	const updatedGroup = [...state.groups];
	const filterText = action.data;

	let filterdGroups;

	if (filterText.length > 0) {
		filterdGroups = updatedGroup.filter((group) =>
			group.name.toLowerCase().includes(filterText)
		);
	} else {
		filterdGroups = updatedGroup;
	}

	return updateObject(state, {
		filterdGroups,
		filterText,
	});
};

const strategies = {
	[actionTypes.FETCH_GROUPS_START]: fetchGroupsStart,
	[actionTypes.FETCH_GROUPS_SUCCESS]: fetchGroupsSuccess,
	[actionTypes.FETCH_GROUPS_FAIL]: fetchGroupsFail,
	[actionTypes.FILTER_GROUPS]: filterGroups,
	__default__: (state) => state,
};

const reducer = (state = initialState, action) => {
	const strategy = strategies[action.type] ?? strategies.__default__;
	return strategy(state, action);
};

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case actionTypes.FETCH_GROUPS_START: return fetchGroupsStart(state, action);
//     case actionTypes.FETCH_GROUPS_SUCCESS: return fetchGroupsSuccess(state, action);
//     case actionTypes.FETCH_GROUPS_FAIL: return fetchGroupsFail(state, action);
//     case actionTypes.FILTER_GROUPS: return filterGroups(state, action);
//     default: return state;
//    }
// };

export default reducer;
