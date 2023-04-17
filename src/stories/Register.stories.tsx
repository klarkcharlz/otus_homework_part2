import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import Register from '../components/Register/Register';

export default {
    title: 'Example/Register',
    component: Register,
} as ComponentMeta<typeof Register>;

const Template: ComponentStory<typeof Register> = (args) => <Register {...args} />;

export const Example = Template.bind({});
Example.args = {
    saveData: () => {},
    setRunGame: () => {}
};
