import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Default } from "../../../src/presentations/layouts/pages/Default";

import {Categories } from "../../../src/presentations/components/display/subtitle/Categories";
import { Buttons } from "../../../src/presentations/components/multi/Buttons";
import {Tour} from "../../../src/containers/considerations/other/types/Tour";

import '../../../src/presentations/layouts/pages/Default.scss'

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

