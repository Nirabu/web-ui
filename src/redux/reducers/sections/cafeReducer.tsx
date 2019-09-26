import * as React from 'react';
import {ADD_COFFEE, DELETE_COFFEE, ADD_CAKE, DELETE_CAKE} from "../../actions/constants/constants";

const initialState = {
    coffee: 'coffee',
    cake: 'cake'
};

const cafeReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_COFFEE:
            return {
                ...state, coffee: action.coffee
            };
        case DELETE_COFFEE:
            return {
                ...state, coffee: null
            };
        case ADD_CAKE:
            return {
                ...state, cake: action.cake
            };
        case DELETE_CAKE: {
            return {
                ...state, cake: null
            }
        }
        default:
            return state;
    }
};

export default cafeReducer;