import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Default } from "../../../src/multiple/Default";

import {Categories } from "../../../src/single/display/subtitle/Categories";
import { Buttons } from "../../../src/single/multi/Buttons";
import {Tour} from "../../../src/containers/considerations/other/types/Tour";

import '../../../src/scss/Default.scss'

storiesOf('Pages/Main-pages', module)
    .add(
        'Front-page',
        () => (
            <Default
                header={<Categories category={Tour.Aquarium} />}
                nav={<Buttons text={'Click here'}/>}
            />
        )
    )
    .add(
        'About-page',
    () => (
        <Default
            header={<Categories category={Tour.Aquarium} />}
            nav={<Buttons text={'Click here'}/>}
        />
    )
);

