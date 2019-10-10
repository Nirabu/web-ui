import * as React from 'react';
import {
    CHANGE_COFFEE,
    CHANGE_CAKE,
    CHANGE_SHOES,
    CHANGE_DRESS,
    CHANGE_BUSAN,
    CHANGE_SEOUL
} from "../constants";

/* cafe */
export const changeCoffee = (coffee: string) => {
    return {
        type: CHANGE_COFFEE,
        coffee: coffee
    }
};

export const changeCake = (cake: string) => {
    return {
        type: CHANGE_CAKE,
        cake: cake
    }
};

/* shopping */
export const changeShoes = (shoes: string) => {
    return {
        type: CHANGE_SHOES,
        shoes: shoes
    }
};

export const changeDress = (dress: string) => {
    return {
        type: CHANGE_DRESS,
        dress: dress
    }
};

/* News */
export const changeBusan = (busan: string) => {
    return {
        type: CHANGE_BUSAN,
        busan: busan
    }
};

export const changeSeoul = (seoul: string) => {
    return {
        type: CHANGE_SEOUL,
        seoul: seoul
    }
};