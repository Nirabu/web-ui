import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { ButtonNormal, ButtonSmall } from './../../../src/components/Buttons';

storiesOf('Components/Buttons', module) 
.add('Default button', () => <ButtonNormal text='Normal button' />)
.add('Small button', () => <ButtonSmall text='Small button' />)



