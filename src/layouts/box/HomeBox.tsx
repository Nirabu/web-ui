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
    value?: string;
    showBoth?: any;
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
                <button onClick={props.showBoth}>Redux-button</button>
                <p>{props.value}</p>
                <BoxFooter content={props.showBoth}/>
            </footer>
        </>
    )
};

HomeBox.defaultProps = {
    value: 'It is default now'
};

export default HomeBox;