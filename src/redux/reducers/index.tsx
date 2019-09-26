import * as React from 'react';
import {combineReducers} from 'redux';
import textApp from "./textReducer";
import cafeReducer from "./sections/cafeReducer";

const reducers = combineReducers({
    textApp,
    cafeReducer
});

export default reducers;
