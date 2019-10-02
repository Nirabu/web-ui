import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Default } from "../../../src/layouts/Default";

import {Categories } from "../../../src/components/display/subtitle/Categories";
import { Buttons } from "../../../src/components/multi/Buttons";
import {Tour} from "../../../src/containers/considerations/other/types/Tour";

import '../../../src/scss/modules/layouts/default.scss'

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

