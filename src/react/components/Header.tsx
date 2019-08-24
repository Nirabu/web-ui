import * as React from 'react';

interface HeaderProps {
    title: string;
}

export const Header: React.FC<HeaderProps> = (props) => {
    return (
        <h1>{props.title}</h1>
    )
};