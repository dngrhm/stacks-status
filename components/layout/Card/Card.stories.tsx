import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Card, CardProps } from './Card';

const meta: Meta = {
  title: 'layout/Card',
  component: Card,
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

const Template: Story<CardProps> = args => <Card {...args} />;

export const Default = Template.bind({});

Default.args = {};

