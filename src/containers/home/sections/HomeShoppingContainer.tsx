import * as React from 'react';
import HomeBox from "../../../layouts/box/HomeBox";

interface HomeShoppingContainerProps {
    text: string;
    color: string;
    value: string;
    add: any;
}

const HomeShoppingContainer: React.FC<HomeShoppingContainerProps> = (props) => {
    return (
        <>
            <HomeBox
                titleHeader={'Shopping'}
                titleMain={'Clothes'}
                contentMain={props.text}
                contentFooter={'See also'}
                color={props.color}
                value={props.value}
                add={props.add}
                button1={'Women'}
                button2={'Men'}
                text1={'Women'}
                text2={'Men'}
            />
        </>
    )
};

export default HomeShoppingContainer;
