import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Default } from "../react/layouts/pages/Default";

import {Category } from "../react/components/display/headers/Category";
import { Buttons } from "../react/components/multi/Buttons";
import {Tour} from "../sections/tour/other/types/Tour";

import '../react/layouts/pages/Default.scss'

storiesOf('Pages/Main-pages', module)
    .add(
        'Front-page',
        () => (
            <Default
                header={<Category category={Tour.Aquarium} />}
                nav={<Buttons text={'Click here'}/>}
            />
        )
    )
    .add(
        'About-page',
    () => (
        <Default
            header={<Category category={Tour.Aquarium} />}
            nav={<Buttons text={'Click here'}/>}
        />
    )
);

