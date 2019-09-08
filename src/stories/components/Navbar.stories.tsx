import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {Navbar} from "../../react/layouts/Navbar";

storiesOf('Layouts/First', module)
    .add('First layout component', () => <Navbar />);
