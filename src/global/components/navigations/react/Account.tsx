import * as React from 'react';
import { NavLink } from 'react-router-dom';

import './../css/account.scss';

export const Account: React.FC = () => {
    return (
        <ul>
            <li><NavLink to='/'>Sign up</NavLink></li>
            <li><NavLink to='/aquarium'>Login</NavLink></li>
        </ul>
    )
}