import * as React from 'react';
import BoxMain from "./parts/BoxMain";
import BoxHeader from "./parts/BoxHeader";
import BoxFooter from "./parts/BoxFooter";

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
            <header className='box-container-header' style={{color: props.color}}>
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