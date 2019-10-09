import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {Navbar} from "../../../src/components/navigations/Navbar";

storiesOf('Layouts/First', module)
    .add('First layout component', () => <Navbar />);
