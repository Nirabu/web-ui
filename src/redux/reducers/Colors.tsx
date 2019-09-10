import {combineReducers} from 'redux';

export const color = (state = {}, action:any) => {
    switch (action.type) {
        case 'AQUARIUM':
            return action.color;
        case 'CAFE':
            return {};
        default:
            return state
    }
};

export const reducers = combineReducers({
    color,
});