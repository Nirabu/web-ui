import * as React from 'react';
import {TitleSmall} from "../../../components/Titles";

interface BoxFooterProps {

    content: string;
}

const BoxFooter: React.FC<BoxFooterProps> = (props) => {
    return (
        <>
            <footer className='box-footer'>
                <TitleSmall title={props.content}/>
            </footer>
        </>
    )
};

export default BoxFooter;