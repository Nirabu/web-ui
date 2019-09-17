import * as React from 'react';
import BoxMain from "./Parts/BoxMain";
import BoxHeader from "./Parts/BoxHeader";
import BoxFooter from "./Parts/BoxFooter";

interface HomeBoxProps {
    titleHeader: string;
    titleMain: string;
    contentMain: string;
    contentFooter: string;
    color?: string;
}

const HomeBox: React.FC<HomeBoxProps> = (props) => {
    return (
        <>
            <header className='box-container-header'>
                <BoxHeader title={props.titleHeader}/>
            </header>

            <main className='box-container-main'>
                <BoxMain title={props.titleMain} content={props.contentMain}/>
            </main>

            <footer className='box-container-footer'>
                <BoxFooter content={props.contentFooter}/>
            </footer>
        </>
    )
};

export default HomeBox;