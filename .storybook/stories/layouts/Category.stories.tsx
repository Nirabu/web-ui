import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {Category} from "../../../src/presentations/components/display/headers/Category";
import {Tour} from '../../../src/containers/tour/other/types/Tour';

storiesOf('Components/Headers/tour', module)
    .add('Aquarium', () => <Category category={Tour.Cafe}/>);
