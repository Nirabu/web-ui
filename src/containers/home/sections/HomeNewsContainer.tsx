import * as React from 'react';
import HomeBox from "../../../layouts/box/HomeBox";
import styles from "../../../scss/modules/exports/sections.module.scss";

interface HomeNewsContainerProps {
    local: string;
    value: string;
    addLocal: any;
    color: string;
}

const HomeNewsContainer: React.FC<HomeNewsContainerProps> = (props) => {
    return (
        <>
            <HomeBox
                titleHeader={'News'}
                titleMain={'Korea'}
                contentMain={props.local}
                contentFooter={'See also'}
                color={styles.news}
                value={props.color}
                add={props.addLocal}
                button1={'Local'}
                button2={'Abroad'}
                text1={'New local'}
                text2={'New abroad'}
            />
        </>
    )
};

export default HomeNewsContainer;