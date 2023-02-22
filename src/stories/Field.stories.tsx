import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Field from '../components/Field/Field';

export default {
  title: 'Example/Field',
  component: Field,
} as ComponentMeta<typeof Field>;

const Template: ComponentStory<typeof Field> = (args) => <Field {...args} />;

export const Large = Template.bind({});
Large.args = {
  cells: 60,
  runGame: true,
  setRunGame: () => {}
};

export const Small = Template.bind({});
Small.args = {
  cells: 20,
  runGame: true,
  setRunGame: () => {}
};
