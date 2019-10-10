import * as React from 'react';
import { CHANGE_COFFEE, CHANGE_CAKE } from './../../actions/constants/constants';

const initialState = {
    coffee: 'coffee',
    cake: 'cake'
};

const cafeReducer = (state = {}, action: any) => {
    switch (action.type) {
        case CHANGE_COFFEE:
            return {
                ...state, coffee: action.coffee
            };
        case CHANGE_CAKE:
            return {
                ...state, coffee: null
            };
        default:
            return state;
    }
};

export default cafeReducer;