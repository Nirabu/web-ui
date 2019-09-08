import * as React from 'react';
import { storiesOf } from "@storybook/react";
import { Cafe } from "../sections/tour/cafe/Cafe";

storiesOf('Pages/Sections/Cafe', module)
    .add(
        'Cafe',
        () => (
            <Cafe />
        )
    );
