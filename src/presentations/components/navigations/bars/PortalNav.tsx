import * as React from 'react';
import {NavLink} from "react-router-dom";

export const PortalNav: React.FC = (props) => {
    return (
        <ul>
            <li><NavLink to='/playground'>Cafe</NavLink></li>
            <li><NavLink to='/aquarium'>News</NavLink></li>
            <li><NavLink to='/cafe'>Shopping</NavLink></li>
            <li><NavLink to='/garden'>TV</NavLink></li>
            <li><NavLink to='/cinema'>Weather</NavLink></li>
            <li><NavLink to='/children'>Children</NavLink></li>
        </ul>
    )
};