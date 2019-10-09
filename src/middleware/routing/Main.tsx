import React from 'react';
import {
    Route,
    Switch as RouterSwitch
} from 'react-router-dom';

import {Home} from "../../pages/Home";

export const Main = () => (
    <RouterSwitch>
        <Route exact path='/' component={Home}/>
    </RouterSwitch>
);
