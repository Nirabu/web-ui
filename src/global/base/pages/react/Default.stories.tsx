import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Default } from "./Default";

import {Header } from "../../../components/display/react/Header";
import { Buttons } from "../../../components/multi/react/Buttons";

import '../css/Default.scss'

storiesOf('Pages/Main-pages', module)
    .add(
        'Front-page',
        () => (
            <Default
                header={<Header title={'Nimado'} />}
                nav={<Buttons text={'Click here'}/>}
            />
        )
    )
    .add(
        'About-page',
    () => (
        <Default
            header={<Header title={'About'} />}
            nav={<Buttons text={'Click here'}/>}
        />
    )
);

