import {
    CHANGE_BUSAN,
    CHANGE_CAKE,
    CHANGE_COFFEE,
    CHANGE_DRESS,
    CHANGE_SEOUL,
    CHANGE_SHOES
} from "../actions/constants";

export const cafeReducer = (state = {}, action: any) => {
    switch (action.type) {
        case CHANGE_COFFEE:
            return {
                ...state, coffee: action.coffee
            };
        case CHANGE_CAKE:
            return {
                ...state, cake: action.cake
            };
        default:
            return state;
    }
};

export const shoppingReducer = (state = {}, action: any) => {
    switch (action.type) {
        case CHANGE_DRESS:
            return {
                ...state, dress: action.dress
            };
        case CHANGE_SHOES:
            return {
                ...state, shoes: action.shoes
            };
        default:
            return state;
    }
};

export const newsReducer = (state = {}, action: any) => {
    switch (action.type) {
        case CHANGE_BUSAN:
            return {
                ...state, busan: action.busan
            };
        case CHANGE_SEOUL: {
            return {
                ...state, seoul: action.seoul
            }
        }
        default:
            return state
    }
};
