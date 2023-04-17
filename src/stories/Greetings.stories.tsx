import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import Greetings from '../components/Greetings/Greetings';

export default {
    title: 'Example/Greetings',
    component: Greetings,
} as ComponentMeta<typeof Greetings>;

const Template: ComponentStory<typeof Greetings> = (args) => <Greetings/>;

export const Example = Template.bind({});
Example.args = {
    name: 'Mike'
};
