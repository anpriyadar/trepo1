import React from "react";
import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import {ReactComponent as GrayLogo}  from "../../images/logo/AT&I_logo_gray.svg";
import {ReactComponent as PurpleLogo} from "../../images/logo/AT&I_logo_purple.svg";
import {ReactComponent as TealLogo}  from "../../images/logo/AT&I_logo_teal.svg";
import {ReactComponent as PinkLogo}  from "../../images/logo/AT&I_logo_pink.svg";
import {ReactComponent as BlueLogo} from "../../images/logo/AT&I_logo_blue.svg";
import {ReactComponent as IndigoLogo} from "../../images/logo/AT&I_logo_indigo.svg";
import {ReactComponent as RedLogo} from "../../images/logo/AT&I_logo_red.svg";
import Box from "@mui/material/Box";

const getLogo = (theme) => {
  if (theme == "purple") {
    return <PurpleLogo style={{ width: "inherit", height: "inherit" }} />;
  } else if (theme == "teal") {
    return <TealLogo style={{ width: "inherit", height: "inherit" }} />;
  } else if (theme == "pink") {
    return <PinkLogo style={{ width: "inherit", height: "inherit" }} />;
  } else if (theme == "blue") {
    return <BlueLogo style={{ width: "inherit", height: "inherit" }} />;
  } else if (theme == "indigo") {
    return <IndigoLogo style={{ width: "inherit", height: "inherit" }} />;
  } else if (theme == "red") {
    return <RedLogo style={{ width: "inherit", height: "inherit" }} />;
  } else {
    return <GrayLogo style={{ width: "inherit", height: "inherit" }} />;
  }
};

export const TopNavLogo = ({ theme }) => {
  let logo = getLogo(theme);
  return (
    <IconButton
      disableRipple
      sx={{
        borderRadius: 0,
        "&:hover": {
          backgroundColor: "#000000",
        },
        width: { mobile: 48, tablet: 56 },
        height: { mobile: 48, tablet: 56 },
      }}
    >
      <Box
        sx={{
          width: { mobile: 24, tablet: 32 },
          height: { mobile: 24, tablet: 32 },
        }}
      >
        {logo}
      </Box>
    </IconButton>
  );
};

TopNavLogo.propTypes = {
  theme: PropTypes.string,
};

TopNavLogo.defaultProps = {
  theme: null,
};
