import {GET_STATE, GetStateAction, SET_STATE, SetStateAction} from "./actions";

export interface RootState {
    name: string
}

const initialState: RootState = {
    name: ''
}

export default function rootReducer(
    state = initialState,
    action: GetStateAction | SetStateAction
): RootState {
    switch (action.type) {
        case SET_STATE:
            return {
                ...state,
                ...action.payload
            }
        case GET_STATE:
            return {
                ...state
            }
        default:
            return {
                ...state
            }
    }
}
