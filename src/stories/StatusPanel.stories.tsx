import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import StatusPanel from '../components/StatusPanel/StatusPanel';

export default {
    title: 'Example/StatusPanel',
    component: StatusPanel,
} as ComponentMeta<typeof StatusPanel>;

const Template: ComponentStory<typeof StatusPanel> = (args) =>
    <StatusPanel {...args} />;

export const On = Template.bind({});
On.args = {
    speed: 2,
    run: true
};

export const Off = Template.bind({});
Off.args = {
    speed: 2,
    run: false
};
