"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeaderTabs = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@mui/material/styles");

var _Tabs = _interopRequireDefault(require("@mui/material/Tabs"));

var _themes = _interopRequireDefault(require("../../common/themes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeaderTabs = function HeaderTabs(_ref) {
  var children = _ref.children,
      theme = _ref.theme,
      value = _ref.value,
      onChange = _ref.onChange;
  return /*#__PURE__*/_react.default.createElement(_styles.ThemeProvider, {
    theme: _themes.default[theme]
  }, /*#__PURE__*/_react.default.createElement(_Tabs.default, {
    value: value,
    onChange: onChange,
    sx: {
      "& .MuiTabs-flexContainer": {
        gap: '24px'
      },
      "& .MuiTab-root": {
        fontWeight: 400,
        textTransform: 'none',
        minWidth: '50px',
        padding: '16px 0',
        minHeight: 0,
        height: {
          mobile: '48px',
          tablet: '56px'
        }
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
        transform: 'none'
      }
    }
  }, children));
};

exports.HeaderTabs = HeaderTabs;
HeaderTabs.propTypes = {
  theme: _propTypes.default.string
};
HeaderTabs.defaultProps = {
  theme: null
};