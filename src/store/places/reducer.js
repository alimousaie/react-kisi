import * as actionTypes from './actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
	places: [],
	pagination: null,
	loading: false,
	error: null,
};

const fetchPlacesStart = (state, action) => {
	return updateObject(state, { loading: true });
};

const fetchPlacesSuccess = (state, action) => {
	return updateObject(state, {
		places: action.data.data,
		pagination: action.data.pagination,
		loading: false,
	});
};

const fetchPlacesFail = (state, action) => {
	return updateObject(state, {
		loading: false,
		error: action.error,
	});
};

const strategies = {
	[actionTypes.FETCH_PLACES_START]: fetchPlacesStart,
	[actionTypes.FETCH_PLACES_SUCCESS]: fetchPlacesSuccess,
	[actionTypes.FETCH_PLACES_FAIL]: fetchPlacesFail,
	__default__: (state) => state,
};

const reducer = (state = initialState, action) => {
	const strategy = strategies[action.type] ?? strategies.__default__;
	return strategy(state, action);
};

export default reducer;
