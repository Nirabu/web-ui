import * as React from 'react';
import {TitleBig, TitleMedium} from "../../components/Titles";

import {Circle} from "../../components/Shapes";
import {SearchBox} from "../../components/Search";
import {NavAccount} from "../../components/Navigations";

interface DefaultHeader {
    title: string;
}

const DefaultHeader: React.FC<DefaultHeader> = (props) => {
    return (
        <>
            <nav
                className='default_header_user'
                style={{display: 'flex', alignContent: 'flex-start', border: '1px solid blue'}}
            >
                <NavAccount/>
            </nav>

            <header className='default__header__search'>
                <TitleMedium title={props.title}/>
            </header>

            <article className='default__header__search'>
                <SearchBox/>
            </article>
        </>
    )
};

export default DefaultHeader;
