import * as React from 'react';
import { storiesOf } from "@storybook/react";
import { Cafe } from "./Cafe";

storiesOf('Pages/Sections/Cafe', module)
    .add(
        'Cafe',
        () => (
            <Cafe />
        )
    );
