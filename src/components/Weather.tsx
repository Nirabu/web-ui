import * as React from 'react';

export enum WeatherType {
    Rain,
    Gray,
    Sun,
    Snow
}

interface TemperatureProps {
    degrees: number;
    humid: number;
}

export const Temperature: React.FC<TemperatureProps> = (props) => {
    return (
        <div>
            <p>Temperature: {props.degrees}</p>
        </div>
    )
};