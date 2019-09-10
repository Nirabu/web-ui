import {combineReducers} from 'redux';

export const color = (state = {}, action:any) => {
    switch (action.type) {
        case 'AQUARIUM':
            return action.color;
        case 'CAFE':
            return {};
        default:
            return state
    }
};

export const reducers = combineReducers({
    color,
});



// reducers.js
// export const geod = (state = {}, action:any) => {
//     switch (action.type) {
//         case 'ACTIVATE_GEOD':
//             return action.geod;
//
//         case 'CHANGE_GEOD':
//             return action.geod;
//
//         case 'CLOSE_GEOD':
//             return {};
//
//         default:
//             return state;
//     }
// };
//
// export const reducers = combineReducers({
//     geod,
// });
