import * as React from 'react';
import HomeBox from "../../layouts/box/HomeBox";

interface HomeChildrenContainerProps {
    text: string;
    color: string;
    value: string;
    add: any;
}

const HomeChildrenContainer: React.FC<HomeChildrenContainerProps> = (props) => {
    return (
        <>
            <HomeBox
                titleHeader={'Children'}
                titleMain={'Clothes'}
                contentMain={props.text}
                contentFooter={'See also'}
                color={props.color}
                value={props.value}
                add={props.add}
                prop={props}
                button1={'Books'}
                button2={'Toys'}
                text1={'New cakes'}
                text2={'New coffee'}
            />
        </>
    )
};

export default HomeChildrenContainer;