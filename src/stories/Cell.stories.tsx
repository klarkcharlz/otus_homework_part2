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
  width: 400,
  height: 400
};

export const Small = Template.bind({});
Small.args = {
  id: 1,
  width: 50,
  height: 50
};
