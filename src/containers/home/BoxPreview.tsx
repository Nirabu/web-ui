import * as React from 'react';

interface BoxPreviewProps {
    headline: string;
    item1: string;
    item2: string;
    extra: string;
}

const BoxPreview: React.FC<BoxPreviewProps> = (props) => {
    return (
        <>
            <h2 className='headline'> </h2>
            <p className='item1'> </p>
            <div className='extra'>

            </div>

        </>
    )
};