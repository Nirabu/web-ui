import * as React from 'react';
import {Tour} from '../../../../sections/tour/other/types/Tour';

interface HeaderProps {
    category: Tour;
}

export const Category: React.FC<HeaderProps> = (props:any) => {
    return (
        <h1>Nimado {props.category}</h1>
    )
};