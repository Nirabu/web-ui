import * as React from 'react';
import BoxMain from "./parts/BoxMain";
import BoxHeader from "./parts/BoxHeader";

interface HomeBoxProps {
    titleHeader: string;
    titleMain: string;
    contentMain: string;
    contentFooter: string;
    color?: string;
    value?: string;
    add?: any;
    prop?: any;
    button1: string;
    button2: string;
    text1?: string;
    text2?: string;
}

const HomeBox: React.FC<HomeBoxProps> = (props) => {
    function textEventHandler() {
        props.add(props.text1);
    }

    function textEventHandler2() {
        props.add(props.text2);
    }

    return (
        <>
            <header className='box-container-header' style={{color: props.color}}>
                <BoxHeader title={props.titleHeader}/>
            </header>

            <main className='box-container-main'>
                <BoxMain title={props.titleMain} content={props.contentMain}/>
            </main>

            <footer className='box-container-footer'>
                <button onClick={() => textEventHandler()}>{props.button1}</button>
                <button onClick={() => textEventHandler2()}>{props.button2}</button>
            </footer>
        </>
    )
};

// HomeBox.defaultProps = {
//     value: 'It is default now'
// };

export default HomeBox;