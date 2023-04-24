import {
    LOAD_STATE,
    LoadStateAction,
    RESET_STATE,
    ResetStateAction,
    SAVE_STATE,
    SaveStateAction,
    SET_STATE,
    SetStateAction,
    StateType
} from './actions';


const initialState = {
    name: '',
    cells: 10,
    filling: 40,
    speed: 2
};

type Actions = ResetStateAction | LoadStateAction | SaveStateAction | SetStateAction;

export default function (
    state: StateType = initialState,
    action: Actions
) {
    switch (action.type) {
        case SAVE_STATE:
            localStorage.setItem(
                'appState', JSON.stringify(action.payload)
            );
            return state;
        case LOAD_STATE:
            const savedState = JSON.parse(
                <string>localStorage.getItem('appState')
            );
            return savedState ? savedState : state;
        case SET_STATE:
            return {
                ...state,
                ...action.payload
            }
        case RESET_STATE:
            return {
                ...state,
                ...initialState
            }
        default:
            return state;
    }
}
