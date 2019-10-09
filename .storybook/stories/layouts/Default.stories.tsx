import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Default } from "../../../src/layouts/default/Default";

import { Buttons } from "../../../src/components/Buttons";

import '../../../src/scss/modules/layouts/others/default.scss'

storiesOf('Pages/Main-pages', module)
    .add(
        'Front-page',
        () => (
            <Default
                nav={<Buttons text={'Click here'}/>}
            />
        )
    )
    .add(
        'About-page',
    () => (
        <Default
            nav={<Buttons text={'Click here'}/>}
        />
    )
);

