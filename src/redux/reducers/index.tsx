import * as React from 'react';
import {combineReducers} from 'redux';
import {cafeReducer, shoppingReducer, newsReducer} from "./homeReducers";
import {loadingReducer} from "./loadingReducers";

const reducers = combineReducers({
    cafeReducer,
    newsReducer,
    shoppingReducer,
    loadingReducer
});

export default reducers;
