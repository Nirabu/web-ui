import * as React from 'react';

interface ButtonsProps {
    text: string;
}

export const ButtonNormal: React.FC<ButtonsProps> = (props) => {
    return (
        <button className='button button__color'>{props.text}</button>
    )
};

export const ButtonSmall: React.FC<ButtonsProps> = (props) => {
    return (
        <button className='button button__color'>{props.text}</button>
    )
};