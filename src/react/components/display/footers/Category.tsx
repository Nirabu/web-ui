import * as React from 'react';
import {Tour} from "../../../../sections/tour/other/types/Tour";

interface CategoryProps {
    category: Tour;
}

export const Category: React.FC<CategoryProps> = (props) => {
    return (
        <footer className='footer'>
            <p>@{props.category}</p>
            <p>All rights reserved to Nimado</p>
        </footer>
    )
};