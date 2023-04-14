import {
    SAVE_STATE,
    LOAD_STATE,
    SET_STATE,
    StateType,
    LoadStateAction,
    SaveStateAction,
    SetStateAction
} from './actions';


const initialState = {
    name: '',
    cells: 60
};

export default function (
    state:StateType = initialState,
    action: LoadStateAction | SaveStateAction | SetStateAction
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
        default:
            return state;
    }
}
