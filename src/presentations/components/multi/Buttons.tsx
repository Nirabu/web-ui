import * as React from 'react';

interface ButtonsProps {
    text: string;
}

export const Buttons: React.FC<ButtonsProps> = (props) => {
    return (
        <button className='button button__color'>{props.text}</button>
    )
};