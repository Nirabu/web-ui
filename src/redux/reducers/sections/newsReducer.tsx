import * as React from 'react';
import { CHANGE_BUSAN, CHANGE_SEOUL } from './../../actions/constants/constants';

const newsReducer = (state = {}, action: any) => {
    switch (action.type) {
        case CHANGE_BUSAN:
            return {
                ...state, local: action.local
            };
        case CHANGE_SEOUL: {
            return {
                ...state
            }
        }
        default:
            return state
    }
};

export default newsReducer;