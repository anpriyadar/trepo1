import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "@mui/material/styles";
import Tabs from '@mui/material/Tabs';
import themes from "../../common/themes";

export const HeaderTabs = ({ 
    children,
    theme,
    value,
    onChange
  }) => {
    return (
      <ThemeProvider theme={themes[theme]}>
        <Tabs
            value={value}
            onChange={onChange}
            sx={{
                "& .MuiTabs-flexContainer": {
                  gap: '24px'
                },
                "& .MuiTab-root": {
                    fontWeight: 400,
                    textTransform: 'none',
                    minWidth: '50px',
                    padding: '16px 0',
                    minHeight: 0,
                    height: { mobile: '48px', tablet: '56px' }
                },
                "& .MuiTab-root.Mui-selected": {
                    color: 'primary.dark'
                },
                "& .MuiTabs-indicator": {
                    bgcolor: 'primary.dark'
                  },
                "& .MuiBadge-badge": {
                    border: 1,
                    fontWeight: 400,
                    position: 'initial',
                    transform: 'none',
                }
            }}
        >
            {children}
        </Tabs>
      </ThemeProvider>
    );
  };
  
  HeaderTabs.propTypes = {
    theme: PropTypes.string,
  };
  
  HeaderTabs.defaultProps = {
    theme: null,
  };
  