import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ProgressBar, ProgressBarProps } from './ProgressBar';

const meta: Meta = {
  title: 'status/ProgressBar',
  component: ProgressBar,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ProgressBarProps> = args => <ProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithLabel = Template.bind({});
WithLabel.args = {
  percent: 45,
  label: 'test',
};

export const WithPercent = Template.bind({});
WithPercent.args = {
  percent: 10,
};

export const OverflowLabel = Template.bind({});
OverflowLabel.args = {
  label: 'test test test test test test test test test test test test test test test test test test test',
  percent: 5,
};
