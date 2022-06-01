import React from 'react';
import { HeaderButton } from '../components/HeaderButton/HeaderButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default {
    title: 'Atoms/HeaderButton',
    component: HeaderButton,
    argTypes: {
        theme: {
            control: {
                type: 'select',
                options: ['purple', 'teal', 'pink', 'blue', 'indigo', 'red']
            }
        }
    },
}

const Template = (args) => <HeaderButton {...args}><DeleteIcon /></HeaderButton>;

export const Default = Template.bind({});
Default.args = {
    theme: 'teal'
}

export const TopNav = Template.bind({});
TopNav.args = {
    theme: 'teal',
    topNav: true,
}

