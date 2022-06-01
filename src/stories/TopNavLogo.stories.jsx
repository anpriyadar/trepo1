import React from 'react';
import { TopNavLogo } from '../components/TopNavLogo/TopNavLogo';

export default {
    title: 'Atoms/TopNavLogo',
    component: TopNavLogo,
    argTypes: {
        theme: {
            control: {
                type: 'select',
                options: ['purple', 'teal', 'pink', 'blue', 'indigo', 'red']
            }
        }
    },
}

const Template = (args) => <TopNavLogo {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    theme: 'teal'
}