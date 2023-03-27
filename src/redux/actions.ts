export const SET_STATE = "SET_STATE";
export const GET_STATE = "GET_STATE";

export interface SetStateAction {
    type: typeof SET_STATE,
    payload: object;
}

export interface GetStateAction {
    type: typeof GET_STATE
}

export function setState(data: object): SetStateAction {
    return {
        type: SET_STATE,
        payload: data
    }
}

export function getState(): GetStateAction {
    return {
        type: GET_STATE,
    }
}
