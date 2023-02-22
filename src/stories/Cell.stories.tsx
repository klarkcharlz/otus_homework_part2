import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Cell from '../components/Cell/Cell';

export default {
  title: 'Example/Cell',
  component: Cell,
} as ComponentMeta<typeof Cell>;

const Template: ComponentStory<typeof Cell> = (args) => <Cell {...args} />;

export const Large = Template.bind({});
Large.args = {
  id: 100,
  active: true,
  width: 400,
  height: 400,
  speed: 2
};

export const Small = Template.bind({});
Small.args = {
  id: 1,
  active: false,
  width: 50,
  height: 50,
  speed: 0.5
};
