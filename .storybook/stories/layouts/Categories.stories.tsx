import * as React from 'react';
import {storiesOf} from "@storybook/react";
import {Category} from "../../../src/components/display/footers/Category";
import {Tour} from "../../../src/containers/considerations/other/types/Tour";

storiesOf('Components/Footers/tour', module)
    .add('Aquarium', () => <Category category={Tour.Aquarium} />)


