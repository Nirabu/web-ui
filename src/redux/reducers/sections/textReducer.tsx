import {ItemFilter, ADD_ITEM, CHANGE_ITEM, CHANGE_ITEM2} from "../../actions/constants/constants";

const initialState = {
    value: 'default',
    text: 'default'
};

const textApp = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state, third: action.text
            };
        case CHANGE_ITEM:
            return {
                ...state, text: action.text
            };
        case CHANGE_ITEM2:
            return {
                ...state, text: action.text
            };
        default:
            return state;
    }
};

export default textApp;

