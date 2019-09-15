import * as React from 'react';

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
