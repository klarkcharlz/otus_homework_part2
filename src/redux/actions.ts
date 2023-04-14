export const SAVE_STATE = 'SAVE_STATE';
export const LOAD_STATE = 'LOAD_STATE';
export const SET_STATE = "SET_STATE";

export type StateType = {
    name: string,
    cells: number
}

export const saveState = (data: StateType) => (
    { type: SAVE_STATE, payload: data }
);
export const loadState = () => (
    { type: LOAD_STATE }
);
export const setState = (data: StateType): SetStateAction => (
    { type: SET_STATE,  payload: data }
);

export interface LoadStateAction {
    type: typeof LOAD_STATE
}
export interface SaveStateAction {
    type: typeof SAVE_STATE,
    payload: StateType;
}
export interface SetStateAction {
    type: typeof SET_STATE,
    payload: StateType;
}
