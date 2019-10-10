import * as React from 'react';
import {combineReducers} from 'redux';
import {cafeReducer, shoppingReducer, newsReducer} from "./homeReducers";

const reducers = combineReducers({
    cafeReducer,
    newsReducer,
    shoppingReducer
});

export default reducers;
