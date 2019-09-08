import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Default } from "../../presentations/layouts/pages/Default";

import {Category } from "../../presentations/components/display/headers/Category";
import { Buttons } from "../../presentations/components/multi/Buttons";
import {Tour} from "../../containers/tour/other/types/Tour";

import '../../presentations/layouts/pages/Default.scss'

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

