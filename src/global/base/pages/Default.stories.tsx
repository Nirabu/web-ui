import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Default } from "./Default";

import {Header } from "../../components/display/Header";
import { Buttons } from "../../components/multi/Buttons";

import './Default.scss'

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

