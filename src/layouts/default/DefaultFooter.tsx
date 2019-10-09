import * as React from 'react';

interface StandardProps {
    version: string;
}

const DefaultFooter: React.FC<StandardProps> = (props) => {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <p className='copyright-nitji'>Copyright Nitji corp. All Rights Reserved.</p>
            <p className='version-nimado'>{props.version}</p>
        </div>
    )
};

export default DefaultFooter;