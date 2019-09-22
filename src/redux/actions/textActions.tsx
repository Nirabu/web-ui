import {DisplayFilter, ADD_TEXT, TOGGLE_TEXT, SET_VISIBILITY_FILTER} from './constants/constants';

export function addText(text: string) {
    return {
        type: ADD_TEXT,
        text
    }
}

export const toggleText = (index: string) => ({
    type: TOGGLE_TEXT,
    index
});

export function setVisibilityFilter(filter: any) {
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    }
}

// export const hideText = (info: string) => ({
//     type: DisplayFilter.HIDE,
// });
//
//
// export function showTextfunction(info: string) {
//     return {
//         type: DisplayFilter.SHOW,
//         info
//     }
// }
//

