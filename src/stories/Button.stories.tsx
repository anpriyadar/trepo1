import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../components/Button/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ReactComponentLibrary/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const HelloWorld1 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld1.args = {
  label: 'Hello world 1',
};

export const HelloWorld2 = Template.bind({});
HelloWorld2.args = {
  label: 'Hello world 2',
};