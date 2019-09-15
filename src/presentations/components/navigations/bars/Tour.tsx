import * as React from 'react';
import { NavLink } from 'react-router-dom';

interface NavbarProps { }

export const Tour: React.FC<NavbarProps> = (props) => {
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