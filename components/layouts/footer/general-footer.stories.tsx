import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import GeneralFooter from "dh-marvel/components/layouts/footer/general-footer.component";


export default {
  title: 'Layout/Footer/GeneralFooter',
  component: GeneralFooter,
  argTypes: {
  },
} as ComponentMeta<typeof GeneralFooter>;

const Template: ComponentStory<typeof GeneralFooter> = (args: any) => <GeneralFooter {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};