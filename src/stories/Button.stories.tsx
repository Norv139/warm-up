import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Disabled = Template.bind({});
Disabled.args = {
  isLoading: false,
  disabled: false,
  label: 'Button',
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',

};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  typeColor: 'secondary'
};

export const Danger = Template.bind({});
Danger.args = {
  label: 'Button',
  typeColor: 'danger'
};

export const Success = Template.bind({});
Success.args = {
  label: 'Button',
  typeColor: 'success',
  disabled: false,
  isLoading: false
};