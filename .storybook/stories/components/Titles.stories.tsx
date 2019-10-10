import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { TitleBig } from './../../../src/components/Titles';

storiesOf('Components/Titles', module).add("Big title", () => 
    <TitleBig title='Big title' />
)