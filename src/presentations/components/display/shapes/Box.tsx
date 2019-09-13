import * as React from 'react';

interface BoxProps {
    title?: string;
}


const Box: React.FC<BoxProps> = (props) => {
    return (
        <div className='box'>
            <div className='title'>
                <h3>{props.title}</h3>
            </div>

            <main className='content'>

            </main>
        </div>
    )
};