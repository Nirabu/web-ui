import * as React from 'react';
import TitleBig from "../../components/display/titles/TitleBig";
import Circle from "../../components/graphics/shapes/Circle";
import SearchBox from "../../components/inputs/searchfields/SearchBox";
import {Account} from "../../components/navigations/bars/Account";

const HomeHeaderContainer: React.FC = () => {
    return (
        <>
            <header>
                <TitleBig title='Nitji'/>
            </header>

            <article>
                <SearchBox/>
            </article>

            <nav>
                <Account/>
            </nav>
        </>
    )
};

export default HomeHeaderContainer;