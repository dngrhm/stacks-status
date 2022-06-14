---
to: screens/<%= dir %>/<%= name %>/<%= name %>.stories.tsx
---
import React from 'react';
import { Meta, Story } from '@storybook/react';
import { <%= name %>, <%= name %>Props } from './<%= name %>';

const meta: Meta = {
  title: 'Screens/<%= dir %>/<%= name %>',
  component: <%= name %>,
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

const Template: Story<<%= name %>Props> = args => <<%= name %> {...args} />;

export const Default = Template.bind({});

Default.args = {};

