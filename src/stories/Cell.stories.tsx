import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Cell from '../components/Cell/Cell';

export default {
  title: 'Example/Cell',
  component: Cell,
} as ComponentMeta<typeof Cell>;

const Template: ComponentStory<typeof Cell> = (args) => <Cell {...args} />;

export const Live = Template.bind({});
Live.args = {
  lived: true,
  speed: 2
};

export const Dead = Template.bind({});
Dead.args = {
  lived: false,
  speed: 2
};
