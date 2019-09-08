import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {Category} from "../react/components/display/headers/Category";
import {Tour} from '../sections/tour/other/types/Tour';

storiesOf('Components/Headers/tour', module)
    .add('Aquarium', () => <Category category={Tour.Cafe}/>);
