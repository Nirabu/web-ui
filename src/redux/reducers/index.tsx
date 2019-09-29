import * as React from 'react';
import {combineReducers} from 'redux';
import textApp from "./sections/textReducer";
import cafeReducer from "./sections/cafeReducer";
import newsReducer from "./sections/newsReducer";

const reducers = combineReducers({
    textApp,
    cafeReducer,
    newsReducer
});

export default reducers;
