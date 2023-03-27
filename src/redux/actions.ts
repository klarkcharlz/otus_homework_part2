export const SET_NAME = "SET_NAME";
export const GET_NAME = "GET_NAME";

export interface SetNameAction {
    type: typeof SET_NAME,
    payload: string
}

export interface GetNameAction {
    type: typeof GET_NAME
}

export function setName(name: string): SetNameAction {
    return {
        type: SET_NAME,
        payload: name
    }
}

export function getName(): GetNameAction {
    return {
        type: GET_NAME,
    }
}
