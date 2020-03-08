import * as React from 'react';

interface BoxProps {
    title?: string;
}

export const Square: React.FC<BoxProps> = (props) => {
    return (
        <div className='box'>
            <div className='title'>
                <h3>{props.title}</h3>
            </div>

            <main className='content'> </main>
        </div>
    )
};

export const Circle: React.FC = () => {
    return (
        <svg>
            <circle cx={20} cy={20} r={10} fill="#A497EB" />
        </svg>
    )
};


