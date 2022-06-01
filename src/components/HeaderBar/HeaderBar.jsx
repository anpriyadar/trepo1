import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "@mui/material/styles";
import Box from '@mui/material/Box';
import palette from "../../common/palette";
import themes from "../../common/themes";

export const HeaderBar = ({
    theme,
    LeftContent,
    RightContent,
    topNav,
    tabbed,
}) => {
    return (
      <ThemeProvider theme={themes[theme]}>
        <Box
            sx={{
                backgroundColor: topNav ? palette.black.main : 'transparent',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: {
                    mobile: '0px 8px 0px 8px',
                    tablet: '0px 34px 0px 34px',
                },
                position: 'relative',
                '&:after': tabbed ? {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    height: '1px',
                    width: '100%',
                    bgcolor: '#DADCDE',
                    zIndex: '-1',
                } : '',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    gap: '12px',
                }}
            >
                {React.cloneElement(LeftContent, {theme: theme})}
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    gap: '12px',
                }}
            >
                {RightContent}
            </Box>
        </Box>
      </ThemeProvider>
    );
  };
  
  HeaderBar.propTypes = {
    theme: PropTypes.string,
    LeftContent: PropTypes.func,
    RightContent: PropTypes.func,
    topNav: PropTypes.bool,
    tabbed: PropTypes.bool,
  };
  
  HeaderBar.defaultProps = {
    theme: null,
    LeftContent: undefined,
    RightContent: undefined,
    topNav: false,
    tabbed: false,
  };
  
