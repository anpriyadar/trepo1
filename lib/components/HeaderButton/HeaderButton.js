"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeaderButton = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@mui/material/styles");

var _IconButton = _interopRequireDefault(require("@mui/material/IconButton"));

var _themes = _interopRequireDefault(require("../../common/themes"));

var _palette = _interopRequireDefault(require("../../common/palette"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeaderButton = function HeaderButton(_ref) {
  var children = _ref.children,
      theme = _ref.theme,
      topNav = _ref.topNav;
  return /*#__PURE__*/_react.default.createElement(_styles.ThemeProvider, {
    theme: _themes.default[theme]
  }, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    disableRipple: true,
    sx: {
      color: function color(theme) {
        return topNav ? theme.palette.primary.light : _palette.default.black.main;
      },
      opacity: topNav ? 1 : 0.5,
      borderRadius: 0,
      "&:hover": {
        backgroundColor: topNav ? "#000000" : "initial"
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
  }, children));
};

exports.HeaderButton = HeaderButton;
HeaderButton.propTypes = {
  theme: _propTypes.default.string,
  topNav: _propTypes.default.bool
};
HeaderButton.defaultProps = {
  theme: null,
  topNav: false
};