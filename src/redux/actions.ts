export const SAVE_STATE = 'SAVE_STATE';
export const LOAD_STATE = 'LOAD_STATE';
export const SET_STATE = "SET_STATE";
export const RESET_STATE = "RESET_STATE";
export const UPDATE_STATE = "UPDATE_STATE";

export type StateType = {
    name: string,
    cells: number,
    filling: number,
    speed: number
}

export const saveState = (data: StateType): SaveStateAction => (
    { type: SAVE_STATE, payload: data }
);
export const loadState = (): LoadStateAction => (
    { type: LOAD_STATE, payload: {} }
);
export const setState = (data: StateType): SetStateAction => (
    { type: SET_STATE,  payload: data }
);
export const resetState = (): ResetStateAction => (
    { type: RESET_STATE, payload: {} }
);

export interface LoadStateAction {
    type: typeof LOAD_STATE,
    payload: StateType | {};
}
export interface ResetStateAction {
    type: typeof RESET_STATE,
    payload: StateType | {};
}
export interface SaveStateAction {
    type: typeof SAVE_STATE,
    payload: StateType;
}
export interface SetStateAction {
    type: typeof SET_STATE,
    payload: StateType;
}
