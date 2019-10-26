import * as React from 'react';
import {NavLink} from "react-router-dom";

export const NavHome: React.FC = () => {
    return (
        <ul>
            <li><a href={"default.asp"}>Home</a></li>
            <li><a href={"default.asp"}>Home</a></li>
            <li><a href={"default.asp"}>Home</a></li>
        </ul>
    )
};

export const NavAccount: React.FC = () => {
    return (
        <ul style={{fontSize: '0.7em'}}>
            <li><NavLink to='/signup'>History</NavLink></li>
            <li><NavLink to='/login'>Favorites</NavLink></li>
            <li><NavLink to='/favorites'>Login</NavLink></li>
            <li><NavLink to='/favorites'>Register</NavLink></li>
        </ul>
    )
};

export const NavTour: React.FC = () => {
    return (
        <ul>
            <li><NavLink to='/'>Portal</NavLink></li>
            <li><NavLink to='/playground'>Playground</NavLink></li>
            <li><NavLink to='/aquarium'>Aquarium</NavLink></li>
            <li><NavLink to='/cafe'>Cafe</NavLink></li>
            <li><NavLink to='/garden'>Garden</NavLink></li>
            <li><NavLink to='/cinema'>Cinema</NavLink></li>
        </ul>
    )
};
