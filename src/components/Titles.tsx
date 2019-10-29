import * as React from "react";
import {Component} from 'react';

interface TitlesProps {
    title: string;
}

class test extends Component {
    render() {
        return (
            <div>

            </div>
        );
    }
}

export const TitleSmall: React.FC<TitlesProps> = (props) => {
    return (
        <>
            <h5>{props.title}</h5>
        </>
    )
};

export const TitleMedium: React.FC<TitlesProps> = (props) => {
    return (
        <>
            <h3 style={{fontSize: '1.3em'}}>{props.title}</h3>
        </>
    )
};

export const TitleBig: React.FC<TitlesProps> = (props) => {
    return (
        <>
            <h1>{props.title}</h1>
        </>
    )
};


