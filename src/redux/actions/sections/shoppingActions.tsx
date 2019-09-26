import * as React from 'react';
import {ADD_CLOTH, DELETE_CLOTH, CHANGE_CLOTH} from "../constants/constants";


const addCloth = (cloth: string) => {
    return {
        type: ADD_CLOTH,
        cloth
    }
};

