import * as React from "react";

interface TitlesProps {
    title: string;
}

export const TitleSmall: React.FC<TitlesProps> = (props) => {
    return (
        <>
            <h6>{props.title}</h6>
        </>
    )
};

export const TitleMedium: React.FC<TitlesProps> = (props) => {
    return (
        <>
            <h3>{props.title}</h3>
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


