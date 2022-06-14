import React from 'react';
import { Meta, Story } from '@storybook/react';
import { NextCard, NextCardProps } from './NextCard';
import styles from '../../../styles/Home.module.css'

const meta: Meta = {
  title: 'test/NextCard',
  component: NextCard,
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

const Template: Story<NextCardProps> = args => (
  <div className={styles.grid}>
    <NextCard {...args} />
  </div>
)

export const Default = Template.bind({});

Default.args = {
  text: "Testing...",
  description: "This is a test",
  link: "https://nextjs.org",
};

