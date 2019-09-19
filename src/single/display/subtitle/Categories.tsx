import * as React from 'react';
import {Tour} from '../../../containers/considerations/other/types/Tour';

interface HeaderProps {
    category: Tour;
}

export const Categories: React.FC<HeaderProps> = (props:any) => {
    return (
        <h1>Nimado {props.category}</h1>
    )
};