import {combineReducers} from 'redux';

const color = (state = {}, action:any) => {
    switch (action.type) {
        case 'SHOW':
            return action.color;
        case 'HIDE':
            return {};
        default:
            return state
    }
};

export default color;
