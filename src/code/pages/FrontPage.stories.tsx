import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Frontpage } from "./Frontpage";

import {Header } from "../components/Header";
import { Buttons } from "../components/Buttons";

import './../../styles/pages/FrontPage.scss'

storiesOf('Pages/Main-pages', module)
    .add(
        'Front-page',
        () => (
            <Frontpage
                header={<Header title={'Nimado'} />}
                nav={<Buttons text={'Click here'}/>}
            />
        )
    )
    .add(
        'About-page',
    () => (
        <Frontpage
            header={<Header title={'About'} />}
            nav={<Buttons text={'Click here'}/>}
        />
    )
);

