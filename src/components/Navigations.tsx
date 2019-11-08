import * as React from 'react';
import {NavLink} from "react-router-dom";

export const NavHome: React.FC = () => {
    return (
        <ul className='navHome'>
            <li><a href={"default.asp"}>Home</a></li>
            <li><a href={"default.asp"}>Home</a></li>
            <li><a href={"default.asp"}>Home</a></li>
        </ul>
    )
};

export const NavAccount: React.FC = () => {
    return (
        <ul className='navAccount'>
            <li><NavLink to='/signup'>History</NavLink></li>
            <li><NavLink to='/login'>Favorites</NavLink></li>
            <li><NavLink to='/favorites'>Login</NavLink></li>
            <li><NavLink to='/favorites'>Register</NavLink></li>
        </ul>
    )
};

export const NavTour: React.FC = () => {
    return (
        <ul className='navTour'>
            <li style={{fontSize: '0.9em'}}><NavLink to='/'>Home</NavLink></li>
            <li style={{fontSize: '0.9em'}}><NavLink to='/cafe'>Cafe</NavLink></li>
            <li style={{fontSize: '0.9em'}}><NavLink to='/shopping'>Shopping</NavLink></li>
        </ul>
    )
};
