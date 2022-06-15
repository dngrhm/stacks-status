import React from 'react';
import { Meta, Story } from '@storybook/react';
import { StatusCard, StatusCardProps } from './StatusCard';

const meta: Meta = {
  title: 'app/StatusCard',
  component: StatusCard,
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

const Template: Story<StatusCardProps> = args => <StatusCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'Sync Status',
  percent: 45,
  description: '678910 of 739652',
};

