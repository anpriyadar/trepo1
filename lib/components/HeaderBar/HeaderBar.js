"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeaderBar = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@mui/material/styles");

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _palette = _interopRequireDefault(require("../../common/palette"));

var _themes = _interopRequireDefault(require("../../common/themes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeaderBar = function HeaderBar(_ref) {
  var theme = _ref.theme,
      LeftContent = _ref.LeftContent,
      RightContent = _ref.RightContent,
      topNav = _ref.topNav,
      tabbed = _ref.tabbed;
  return /*#__PURE__*/_react.default.createElement(_styles.ThemeProvider, {
    theme: _themes.default[theme]
  }, /*#__PURE__*/_react.default.createElement(_Box.default, {
    sx: {
      backgroundColor: topNav ? _palette.default.black.main : 'transparent',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: {
        mobile: '0px 8px 0px 8px',
        tablet: '0px 34px 0px 34px'
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
        zIndex: '-1'
      } : ''
    }
  }, /*#__PURE__*/_react.default.createElement(_Box.default, {
    sx: {
      display: 'flex',
      gap: '12px'
    }
  }, /*#__PURE__*/_react.default.cloneElement(LeftContent, {
    theme: theme
  })), /*#__PURE__*/_react.default.createElement(_Box.default, {
    sx: {
      display: 'flex',
      gap: '12px'
    }
  }, RightContent)));
};

exports.HeaderBar = HeaderBar;
HeaderBar.propTypes = {
  theme: _propTypes.default.string,
  LeftContent: _propTypes.default.func,
  RightContent: _propTypes.default.func,
  topNav: _propTypes.default.bool,
  tabbed: _propTypes.default.bool
};
HeaderBar.defaultProps = {
  theme: null,
  LeftContent: undefined,
  RightContent: undefined,
  topNav: false,
  tabbed: false
};