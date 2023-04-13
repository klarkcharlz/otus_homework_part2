export const SET_STATE = "SET_STATE";

export type StateType = {
    name: string
}

export interface SetStateAction {
    type: typeof SET_STATE,
    payload: StateType;
}

export const setState = (data: StateType): SetStateAction => {
    return {
        type: SET_STATE,
        payload: data
    }
}
