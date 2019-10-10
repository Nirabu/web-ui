import * as React from 'react';
import { storiesOf } from "@storybook/react";
import {ButtonNormal} from "../../../src/components/Buttons";


storiesOf('Pages/Sections/Cafe', module)
    .add('Ok button', () => <ButtonNormal text={'Ok'}/>);
