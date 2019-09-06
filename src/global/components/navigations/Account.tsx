import * as React from 'react';
import { NavLink } from 'react-router-dom';

import './account.scss';

export const Account: React.FC = () => {
    return (
        <ul>
            <li><NavLink to='/signup'>Sign up</NavLink></li>
            <li><NavLink to='/login'>Login</NavLink></li>
            <li><NavLink to='/favorites'>Favorites</NavLink></li>
            <li><NavLink to='/favorites'>History</NavLink></li>
        </ul>
    )
};