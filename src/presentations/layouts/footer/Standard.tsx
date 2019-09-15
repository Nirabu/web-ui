import * as React from 'react';

interface StandardProps {
    version: string;
}

const Standard: React.FC<StandardProps> = (props) => {
    return (
        <>
            <p className='copyright-nitji'>Copyright Nitji corp. All Rights Reserved.</p>
            <p className='version-nimado'>{props.version}</p>
        </>
    )
};

export default Standard;