"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TopNavLogo = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _IconButton = _interopRequireDefault(require("@mui/material/IconButton"));

var _ATI_logo_gray = require("../../images/logo/AT&I_logo_gray.svg");

var _ATI_logo_purple = require("../../images/logo/AT&I_logo_purple.svg");

var _ATI_logo_teal = require("../../images/logo/AT&I_logo_teal.svg");

var _ATI_logo_pink = require("../../images/logo/AT&I_logo_pink.svg");

var _ATI_logo_blue = require("../../images/logo/AT&I_logo_blue.svg");

var _ATI_logo_indigo = require("../../images/logo/AT&I_logo_indigo.svg");

var _ATI_logo_red = require("../../images/logo/AT&I_logo_red.svg");

var _Box = _interopRequireDefault(require("@mui/material/Box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getLogo = function getLogo(theme) {
  if (theme == "purple") {
    return /*#__PURE__*/_react.default.createElement(_ATI_logo_purple.ReactComponent, {
      style: {
        width: "inherit",
        height: "inherit"
      }
    });
  } else if (theme == "teal") {
    return /*#__PURE__*/_react.default.createElement(_ATI_logo_teal.ReactComponent, {
      style: {
        width: "inherit",
        height: "inherit"
      }
    });
  } else if (theme == "pink") {
    return /*#__PURE__*/_react.default.createElement(_ATI_logo_pink.ReactComponent, {
      style: {
        width: "inherit",
        height: "inherit"
      }
    });
  } else if (theme == "blue") {
    return /*#__PURE__*/_react.default.createElement(_ATI_logo_blue.ReactComponent, {
      style: {
        width: "inherit",
        height: "inherit"
      }
    });
  } else if (theme == "indigo") {
    return /*#__PURE__*/_react.default.createElement(_ATI_logo_indigo.ReactComponent, {
      style: {
        width: "inherit",
        height: "inherit"
      }
    });
  } else if (theme == "red") {
    return /*#__PURE__*/_react.default.createElement(_ATI_logo_red.ReactComponent, {
      style: {
        width: "inherit",
        height: "inherit"
      }
    });
  } else {
    return /*#__PURE__*/_react.default.createElement(_ATI_logo_gray.ReactComponent, {
      style: {
        width: "inherit",
        height: "inherit"
      }
    });
  }
};

var TopNavLogo = function TopNavLogo(_ref) {
  var theme = _ref.theme;
  var logo = getLogo(theme);
  return /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    disableRipple: true,
    sx: {
      borderRadius: 0,
      "&:hover": {
        backgroundColor: "#000000"
      },
      width: {
        mobile: 48,
        tablet: 56
      },
      height: {
        mobile: 48,
        tablet: 56
      }
    }
  }, /*#__PURE__*/_react.default.createElement(_Box.default, {
    sx: {
      width: {
        mobile: 24,
        tablet: 32
      },
      height: {
        mobile: 24,
        tablet: 32
      }
    }
  }, logo));
};

exports.TopNavLogo = TopNavLogo;
TopNavLogo.propTypes = {
  theme: _propTypes.default.string
};
TopNavLogo.defaultProps = {
  theme: null
};