import { getKisiClient } from "../../apis/kisiApi";
import * as actionTypes from './actionTypes';

export const fetchGroupSuccess = (groups) => {
    return {
        type: actionTypes.FETCH_GROUPS_SUCCESS,
        data: groups,
    };
};

export const fetchGroupFail = (error) => {
    return {
        type: actionTypes.FETCH_GROUPS_FAIL,
        error: error
    };
};

export const fetchGroupStart = () => {
    return {
        type: actionTypes.FETCH_GROUPS_START
    };
};

export const fetchGroups = () => {
    
    return async dispatch => {
        const kisiClient = await getKisiClient();
        dispatch(fetchGroupStart());
        try {
            const groups = await kisiClient.get("groups");
            dispatch(fetchGroupSuccess(groups));
        } catch (error) {
            console.log("fetchGroups error", error);
            dispatch(fetchGroupFail(error));
        }
    };
};

export const filterGroups = (filterText) => {
    return {
        type: actionTypes.FILTER_GROUPS,
        data: filterText,
    };
};