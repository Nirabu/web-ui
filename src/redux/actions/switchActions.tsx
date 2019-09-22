import {DisplayFilter} from './constants/constants';

/* action creators */
export const changeContent = (text:string) => ({
    type: DisplayFilter.SHOW_ACTIVE,
    text
});