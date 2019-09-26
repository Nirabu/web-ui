import * as React from 'react';
import {ADD_LOCAL, DELETE_LOCAL, ADD_ABROAD, DELETE_ABROAD} from "../constants/constants";

export const addLocal = (local: string) => {
    return {
        type: ADD_LOCAL,
        local
    }
};

export const deleteLocal = () => {
    return {
        type: DELETE_LOCAL
    }
};

export const addAbroad = (abroad: string) => {
    return {
        type: ADD_ABROAD,
        abroad
    }
};

export const deleteAbroad = () => {
    return {
        type: DELETE_ABROAD
    }
};

