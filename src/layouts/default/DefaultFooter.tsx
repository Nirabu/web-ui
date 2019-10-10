import * as React from 'react';

interface StandardProps {
    version: string;
}

const DefaultFooter: React.FC<StandardProps> = (props) => {
    return (
        <div>
            <p style={{textAlign: "center"}}>{props.version}</p>
            <p style={{textAlign: "center"}}>Copyrighted Nitji. All Rights Reserved.</p>
        </div>
    )
};

export default DefaultFooter;