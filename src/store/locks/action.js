import { getKisiClient } from "../../apis/kisiApi";
import * as actionTypes from './actionTypes';

export const fetchLockSuccess = (locks) => {
    return {
        type: actionTypes.FETCH_LOCKS_SUCCESS,
        data: locks,
    };
};

export const fetchLockFail = (error) => {
    return {
        type: actionTypes.FETCH_LOCKS_FAIL,
        error: error
    };
}

export const fetchLockStart = () => {
    return {
        type: actionTypes.FETCH_LOCKS_START
    };
};

export const fetchLocks = () => {

    return async dispatch => {
        const kisiClient = await getKisiClient();
        dispatch(fetchLockStart());

        try {
            const locks = await kisiClient.get("locks");
            dispatch(fetchLockSuccess(locks));
        }
        catch (error) {
            dispatch(fetchLockFail(error));
        };
    };
};