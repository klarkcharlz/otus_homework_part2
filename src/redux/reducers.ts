import {GET_NAME, GetNameAction, SET_NAME, SetNameAction} from "./actions";

export interface RootState {
    name: string
}

const initialState: RootState = {
    name: ""
}
export default function rootReducer(
    state = initialState,
    action: SetNameAction | GetNameAction
): RootState {
    switch (action.type) {
        case SET_NAME:
            return {
                ...state,
                name: action.payload
            }
        case GET_NAME:
            return {
                ...state,
                name: state.name
            }
        default:
            return state
    }
}
