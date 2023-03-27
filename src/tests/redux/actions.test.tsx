import rootReducer from "../../redux/reducers";
import {setName, getName} from "../../redux/actions";

describe("rootReducer", () => {
    test("should set name state with SET_NAME action", () => {
        const initialState = {
            name: ""
        };
        const action = setName("John");
        const expectedState = {
            name: "John"
        };
        const nextState = rootReducer(initialState, action);
        expect(nextState).toEqual(expectedState);
    });
    test("should set name state with GET_NAME action", () => {
        const initialState = {
            name: "Mike"
        };
        const action = getName();
        const expectedState = {
            name: "Mike"
        };
        const nextState = rootReducer(initialState, action);
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
