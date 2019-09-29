import * as React from 'react';
import {ADD_LOCAL, ADD_ABROAD, DELETE_ABROAD, DELETE_LOCAL} from "../../actions/constants/constants";

const newsReducer = (state = {}, action: any) => {
    switch (action.type) {
        case ADD_LOCAL:
            return {
                ...state, local: action.local
            };
        case DELETE_LOCAL: {
            return {
                ...state
            }
        }
        case ADD_ABROAD: {
            return {
                ...state, abroad: action.abroad
            }
        }
        case DELETE_ABROAD: {
            return {
                ...state
            }
        }
        default:
            return state
    }
};

export default newsReducer;