import React from 'react';
import { Meta, Story } from '@storybook/react';
import { PageHeader, PageHeaderProps } from './PageHeader';

const meta: Meta = {
  title: 'app/PageHeader',
  component: PageHeader,
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

const Template: Story<PageHeaderProps> = args => <PageHeader {...args} />;

export const Default = Template.bind({});

Default.args = {};

