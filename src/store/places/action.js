import { getKisiClient } from "../../apis/kisiApi";
import * as actionTypes from './actionTypes';

export const fetchPlaceSuccess = (palces) => {
    return {
        type: actionTypes.FETCH_PLACES_SUCCESS,
        data: palces,
    };
};

export const fetchPlaceFail = (error) => {
    return {
        type: actionTypes.FETCH_PLACES_FAIL,
        error: error
    };
};

export const fetchPlaceStart = () => {
    return {
        type: actionTypes.FETCH_PLACES_START
    };
};

export const fetchPlaces = () => {
    
    return async dispatch => {
        const kisiClient = await getKisiClient();
        dispatch(fetchPlaceStart());

        try {
            const places = await kisiClient.get("places");
            dispatch(fetchPlaceSuccess(places));

        }
        catch (error) {
            dispatch(fetchPlaceFail(error));
        };
    };
};