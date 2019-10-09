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

const Temperature: React.FC<TemperatureProps> = () => {
    return (
        <div>
            <p>31 Celsius</p>
        </div>
    )
};

export default Temperature;