import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import GeneralHeader from "dh-marvel/components/layouts/header/general-header.component";


export default {
  title: 'Layout/Header/GeneralHeader',
  component: GeneralHeader,
  argTypes: {
  },
} as ComponentMeta<typeof GeneralHeader>;

const Template: ComponentStory<typeof GeneralHeader> = (args: any) => <GeneralHeader {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};

export const Simple = Template.bind({});
Simple.args = {
  variant: 'simple'
};