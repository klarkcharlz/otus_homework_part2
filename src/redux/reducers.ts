import {SET_STATE, SetStateAction} from "./actions";

export interface RootState {
    name: string
}

const initialState: RootState = {
    name: ''
}

export default function rootReducer(
    state = initialState,
    action: SetStateAction
): RootState {
    switch (action.type) {
        case SET_STATE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return {
                ...state
            }
    }
}
