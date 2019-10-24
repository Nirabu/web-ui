import * as React from "react";

interface BoxPaginationProps {
    link0: string;
    link1: string;
    link2: string;
    link3?: string;
    link4?: string;
}

export const HomeBoxPagination: React.FC<BoxPaginationProps> = (props) => {
    return (
        <nav className='homeBoxPagination'>
            <ul>
                <li><a href="default.asp">{props.link0}</a></li>
                <li><a href="default.asp">{props.link1}</a></li>
                <li><a href="default.asp">{props.link2}</a></li>
                <li><a href="default.asp">{props.link3}</a></li>
                <li><a href="default.asp">{props.link4}</a></li>
            </ul>
        </nav>
    )
};
