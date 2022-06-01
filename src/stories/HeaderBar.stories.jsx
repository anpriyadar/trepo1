import React from 'react';
import { HeaderBar } from '../components/HeaderBar/HeaderBar'; 
import { HeaderButton } from '../components/HeaderButton/HeaderButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { TopNavLogo } from "../components/TopNavLogo/TopNavLogo";
import Typography from '@mui/material/Typography';
import palette from "../common/palette";
import { HeaderTabs } from "../components/HeaderTabs/HeaderTabs";
import Tab from '@mui/material/Tab';
import Badge from '@mui/material/Badge';

export default {
    title: 'Molecules/HeaderBar',
    component: HeaderBar,
    argTypes: {
        theme: {
            control: {
                type: 'select',
                options: ['purple', 'teal', 'pink', 'blue', 'indigo', 'red']
            }
        }
    },
}

const Template = (args) => <HeaderBar {...args} />;

const LeftContentDefault = () => (
    <Typography
        variant="h2"
        sx={{
            fontSize: 16,
            fontWeight: 500,
            opacity: .75,
            color: palette.black.main,
        }}
    >
        Connections
    </Typography>
)

const RightContentDefault = () => (
    <>
        <HeaderButton><DeleteIcon /></HeaderButton>
        <HeaderButton><DeleteIcon /></HeaderButton>
    </>
);

export const Default = Template.bind({});
Default.args = {
    theme: 'teal',
    LeftContent: <LeftContentDefault />,
    RightContent: <RightContentDefault />,
}


const LeftContentTopNav = ({ theme }) => (
    <>
        <TopNavLogo theme={theme} />
    </>
);

const RightContentTopNav = () => (
    <>
        <HeaderButton topNav={true}><DeleteIcon /></HeaderButton>
        <HeaderButton topNav={true}><DeleteIcon /></HeaderButton>
    </>
);

export const TopNav = Template.bind({});
TopNav.args = {
    theme: 'teal',
    LeftContent: <LeftContentTopNav theme={"teal"}/>,
    RightContent: <RightContentTopNav />,
    topNav: true,
}

const LeftContentTabbed = (args) => {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <HeaderTabs value={value} onChange={handleChange} {...args}>
        <Tab disableRipple label="Doctors" icon={<Badge badgeContent={102}></Badge>} iconPosition="end" />
        <Tab disableRipple label="MRs" icon={<Badge badgeContent={33}></Badge>} iconPosition="end" />
      </HeaderTabs>
    );
  };

export const Tabbed = Template.bind({});
Tabbed.args = {
    theme: 'teal',
    LeftContent: <LeftContentTabbed />,
    RightContent: <RightContentDefault />,
    tabbed: true
}