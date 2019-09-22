import {DisplayFilter, ADD_TEXT, TOGGLE_TEXT, SET_VISIBILITY_FILTER} from "../actions/constants/constants";

const initialState = {
    displayFilter: DisplayFilter.SHOW_ACTIVE,
    text: []
};

const textApp = (state = {initialState}, action: any) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return Object.assign({}, state, {
                displayFilter: action.filter
            });
        case ADD_TEXT:
            return Object.assign({}, state, {
                text: [
                    {
                        text: action.text,
                    }
                ]
            });
        case TOGGLE_TEXT:
            return Object.assign({}, state, {

            });
        default:
            return state;
    }
};

export default textApp;
