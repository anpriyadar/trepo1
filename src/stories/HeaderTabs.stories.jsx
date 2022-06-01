import React from "react";
import { HeaderTabs } from "../components/HeaderTabs/HeaderTabs";
import Tab from '@mui/material/Tab';

export default {
  title: "Molecules/HeaderTabs",
  component: HeaderTabs,
  argTypes: {
    theme: {
      control: {
        type: "select",
        options: ["purple", "teal", "pink", "blue", "indigo", "red"],
      },
    },
  },
};

const Template = (args) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <HeaderTabs value={value} onChange={handleChange} {...args}>
      <Tab disableRipple label="Tab 1" />
      <Tab disableRipple label="Tab 2" />
    </HeaderTabs>
  );
};

export const Default = Template.bind({});
Default.args = {
  theme: "teal",
};
