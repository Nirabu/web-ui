import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {Buttons} from "./Buttons";

storiesOf('Button', module)
    .add('Ok button', () => <Buttons text={'Ok'}/>);
