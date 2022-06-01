import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import themes from "../../common/themes";
import palette from "../../common/palette";

export const HeaderButton = ({ 
  children,
  theme,
  topNav,
}) => {
  return (
    <ThemeProvider theme={themes[theme]}>
      <IconButton
        disableRipple
        sx={{
          color: (theme) => topNav ? theme.palette.primary.light : palette.black.main,
          opacity: topNav ? 1 : 0.5,
          borderRadius: 0,
          "&:hover": {
            backgroundColor: topNav ? "#000000" : "initial",
          },
          width: { mobile: 48, tablet: 56 },
          height: { mobile: 48, tablet: 56 },
        }}
      >
        {children}
      </IconButton>
    </ThemeProvider>
  );
};

HeaderButton.propTypes = {
  theme: PropTypes.string,
  topNav: PropTypes.bool,
};

HeaderButton.defaultProps = {
  theme: null,
  topNav: false,
};
