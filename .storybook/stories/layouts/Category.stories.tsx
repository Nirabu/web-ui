import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {Categories} from "../../../src/single/display/subtitle/Categories";
import {Tour} from '../../../src/containers/considerations/other/types/Tour';

storiesOf('Components/Headers/tour', module)
    .add('Aquarium', () => <Categories category={Tour.Cafe}/>);
