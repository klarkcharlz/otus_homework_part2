import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ControlForm from '../components/ControlForm/ControlForm';

export default {
  title: 'Example/ControlForm',
  component: ControlForm,
} as ComponentMeta<typeof ControlForm>;

const Template: ComponentStory<typeof ControlForm> = (args) => <ControlForm {...args} />;

export const Large = Template.bind({});
Large.args = {
  setSettings: () => {},
  setPlayMode: () => {},
  reset: () => {},
  width: 400,
  height: 400,
  speed: 2
};

export const Small = Template.bind({});
Small.args = {
  setSettings: () => {},
  setPlayMode: () => {},
  width: 50,
  height: 50,
  speed: 0.5
};
