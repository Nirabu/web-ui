import * as React from 'react';
import {combineReducers} from 'redux';
import cafeReducer from "./sections/cafeReducer";
import newsReducer from "./sections/newsReducer";
import shoppingReducer from "./sections/shoppingReducer";

const reducers = combineReducers({
    cafeReducer,
    newsReducer,
    shoppingReducer
});

export default reducers;
