import {StateType} from '../actions';

export const loadState = (): StateType | undefined => {
    const serializedState = localStorage.getItem("state");
    try {
        return serializedState ? JSON.parse(serializedState): undefined;
    } catch (err) {
        return undefined;
    }

};

export const saveState = (state: StateType): void => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("state", serializedState);
    } catch (err) {
        console.log(err);
    }
};