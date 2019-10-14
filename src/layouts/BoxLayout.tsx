import * as React from 'react';
import BoxMain from "./box/parts/BoxMain";
import BoxHeader from "./box/parts/BoxHeader";
import store from "../redux/store";
import {useEffect} from "react";

interface HomeBoxProps {
    titleHeader: string;
    contentData: string;
    changeItem?: any;
    image?: any;

    titleMain?: string;
    contentFooter?: string;
    value?: string;
    add?: any;
    prop?: any;
    button1: string;
    button2: string;
    text1?: string;
    text2?: string;
}

/* imports json data. TODO: Replace with API later. */
let cafeData = require('../middleware/data/cafe.json');

const BoxLayout: React.FC<HomeBoxProps> = (props) => {


    function textEventHandler() {
        props.changeItem('test1');
        console.log(store.getState());
    }

    function textEventHandler2() {
        props.changeItem('test2');
        console.log(store.getState());
    }

    return (
        <div className='boxContent'>
            <header className='boxContent-header'>
                <BoxHeader title={props.titleHeader}/>
            </header>

            <main className='boxContent-main'>
                <BoxMain content={props.contentData} />
                <img src={props.image} width="200" height="200" alt='cannot display'/>
            </main>

            <footer className='boxContent-footer'>
                <button onClick={() => textEventHandler()}>{props.button1}</button>
                <button onClick={() => textEventHandler2()}>{props.button2}</button>
            </footer>
        </div>
    )
};

// HomeBox.defaultProps = {
//     value: 'It is default now'
// };

export default BoxLayout;