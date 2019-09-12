import * as React from 'react';
import {render} from "react-dom";
import {Provider} from "react-redux";
import {combineReducers, createStore} from 'redux';
import color from "./text";

const reducers = combineReducers({
    color,
});

export default reducers;

