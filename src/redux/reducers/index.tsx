import * as React from 'react';
import {combineReducers, createStore} from 'redux';
import info from "./textReducer";

const reducers = combineReducers({
    info,
} as any);

export default reducers;

