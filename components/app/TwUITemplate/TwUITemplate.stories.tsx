import React from 'react';
import { Meta, Story } from '@storybook/react';
import { TwUITemplate, TwUITemplateProps } from './TwUITemplate';

const meta: Meta = {
  title: 'app/TwUITemplate',
  component: TwUITemplate,
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

const Template: Story<TwUITemplateProps> = args => <TwUITemplate {...args} />;

export const Default = Template.bind({});

Default.args = {};

