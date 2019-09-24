import {ADD_ITEM, CHANGE_ITEM, ItemFilter} from './constants/constants';

/* Primarily action creators. */
export const addItem = (text: string) => ({
    type: ADD_ITEM,
    text: text
});

export const changeItem = (text: string) => ({
    type: CHANGE_ITEM
});

/* Secondary action creators (categories). */
/* Shopping. */
export const showBoth = (text: string) => ({
    type: ItemFilter.SHOW_TEXT_BOTH,
    text
});

export const showWomen = (text: string) => ({
    type: ItemFilter.SHOW_TEXT_WOMEN,
    text
});

export const showMen = (text: string) => ({
    type: ItemFilter.SHOW_TEXT_MEN,
    text
});