import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Cafe } from "./Cafe";
import { Aquarium } from "../aquarium/Aquarium";

storiesOf('Pages/Sections/Cafe', module)
    .add(
        'Menu',
        () => (
            <Aquarium />
        )
    )
    .add(
        'About',
        () => (
            <Aquarium />
        )
    );

