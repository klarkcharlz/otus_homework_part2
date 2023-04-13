import rootReducer from "../../redux/reducers";
import {setState} from "../../redux/actions";

describe("rootReducer", () => {
    test("should set name state with SET_STATE action", () => {
        const initialState = {
            name: ''
        };
        const expectedState = {
            name: "John"
        };
        const nextState = rootReducer(
            initialState, setState({name: "John"})
        );
        expect(nextState).toEqual(expectedState);
    });
    test("should return default state for unknown action types", () => {
        const initialState = {
            name: ""
        };
        const action = {
            type: "UNKNOWN_ACTION_TYPE",
            payload: "Some data"
        };
        // @ts-ignore
        const nextState = rootReducer(initialState, action);
        expect(nextState).toEqual(initialState);
    });
});
