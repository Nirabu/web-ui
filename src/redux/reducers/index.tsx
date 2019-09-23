import * as React from 'react';
import {combineReducers} from 'redux';
import {textApp} from "./textReducer";

const reducers = combineReducers({
    textApp
});

export default reducers;
