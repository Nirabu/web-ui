import * as React from 'react';
import {ADD_COFFEE, ADD_CAKE, DELETE_COFFEE, DELETE_CAKE} from "../constants/constants";

export const addCoffee = (coffee: string) => {
    return {
        type: ADD_COFFEE,
        coffee
    }
};

export const addCake = (cake: string) => {
    return {
        type: ADD_CAKE,
        cake
    }
};

export const deleteCoffee = (coffee: string) => {
    return {
        type: DELETE_COFFEE
    }
};

export const deleteCake = (cake: string) => {
    return {
        type: DELETE_CAKE
    }
};

