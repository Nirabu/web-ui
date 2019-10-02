import * as React from 'react';
import HomeBox from "../../../layouts/box/HomeBox";

interface HomeTVContainerProps {
    text: string;
    color: string;
    add: any;
}

const HomeTVContainer: React.FC<HomeTVContainerProps> = (props) => {
    return (
        <>
            <HomeBox
                titleHeader={'TV'}
                titleMain={'Clothes'}
                contentMain={props.text}
                contentFooter={'See also'}
                color={props.color}
                add={props.add}
                button1={'Trailers'}
                button2={'Clips'}
                text1={'Movies'}
                text2={'Shows'}
            />
        </>
    )
};

export default HomeTVContainer;