import * as React from 'react';
import { CHANGE_SHOES } from '../../actions/constants/constants';
import { CHANGE_DRESS } from './../../actions/constants/constants';

const shoppingReducer = (state = {}, action: any) => {
    switch (action.type) {
        case CHANGE_DRESS:
            return {
                ...state, coffee: action.coffee
            };
        case CHANGE_SHOES:
            return {
                ...state, coffee: null
            };
        default:
            return state;
    }
};

export default shoppingReducer;