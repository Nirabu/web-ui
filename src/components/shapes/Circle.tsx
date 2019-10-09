import * as React from 'react';

interface CircleProps {

}

const Circle: React.FC<CircleProps> = () => {
    return (
        <svg>
            <circle cx={20} cy={20} r={10} fill="#A497EB" />
        </svg>
    )
};

export default Circle;