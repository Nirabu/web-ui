import {GenresFilter, ADD_ITEM, TOGGLE_ITEM, SET_VISIBILITY_FILTER} from "../actions/constants/constants";

const initialState = {
    value: '',
    text: []
};

export const textApp = (state = {initialState}, action: any) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state, value: action.text
            }
        default:
            return state;
    }
};

