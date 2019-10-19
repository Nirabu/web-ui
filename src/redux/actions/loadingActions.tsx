import * as React from "react";
import {SET_LOADING} from "./constants";

export const setLoading = (loading: boolean) => {
    return {
        type: SET_LOADING,
        loading: loading
    }
};