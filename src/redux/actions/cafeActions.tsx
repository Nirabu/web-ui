import * as React from 'react';
import {ADD_COFFEE, ADD_CAKE, DELETE_COFFEE, DELETE_CAKE} from "./constants/constants";

const addCoffee = (text: string) => {
    return {
        type: ADD_COFFEE,
        text
    }
};

const addCake = (text: string) => {
    return {
        type: ADD_CAKE,
        text
    }
};

const deleteCoffee = (text: string) => {
    return {
        type: DELETE_COFFEE
    }
};

const deleteCake = (text: string) => {
    return {
        type: DELETE_CAKE
    }
};

