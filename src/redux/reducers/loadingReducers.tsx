import {SET_LOADING} from "../actions/constants";

export const loadingReducer = (state = {}, action: any) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state, loading: action.loading
            };
        default:
            return state;
    }
};
