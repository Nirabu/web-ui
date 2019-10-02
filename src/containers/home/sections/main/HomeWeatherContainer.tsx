import * as React from 'react';
import HomeBox from "../../../../layouts/box/HomeBox";

interface HomeWeatherContainerProps {
    color: string;
    add: any;
    text: string;
}

const HomeWeatherContainer: React.FC<HomeWeatherContainerProps> = (props) => {
    return (
        <>
            <HomeBox
                titleHeader={'Weather'}
                titleMain={'Clothes'}
                contentMain={props.text}
                contentFooter={'See also'}
                color={props.color}
                add={props.add}
                button1={'Today'}
                button2={'Tomorrow'}
                text1={'Today'}
                text2={'Tomorrow'}
            />
        </>
    )
};

export default HomeWeatherContainer;