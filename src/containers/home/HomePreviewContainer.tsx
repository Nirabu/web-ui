import HomeBox from "../../layouts/box/HomeBox";
import * as React from 'react';
import TitleMedium from "../../components/display/titles/TitleMedium";
import TitleSmall from "../../components/display/titles/TitleSmall";

interface HomePreviewContainerProps { }

const HomePreviewContainer: React.FC<HomePreviewContainerProps> = (props) => {
    return (
        <>
            <header className='preview-title'>
                <TitleMedium title='Top'/>
            </header>

            <div className='recipes'>
                <TitleSmall title={'Desserts'}/>
            </div>

            <div className='blogs'>
                <TitleSmall title={'Blogs'}/>
            </div>
        </>
    )
};

export default HomePreviewContainer;