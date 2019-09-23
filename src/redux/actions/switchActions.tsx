import {GenresFilter} from './constants/constants';

/* action creators */
/* shopping */
export const showBoth = (text:string) => ({
    type: GenresFilter.SHOW_TEXT_BOTH,
    text
});

export const showWomen = (text: string) => ({
    type: GenresFilter.SHOW_TEXT_WOMEN,
    text
});

export const showMen = (text: string) => ({
    type: GenresFilter.SHOW_TEXT_MEN,
    text
});