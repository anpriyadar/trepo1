"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TopNav = exports.Tabbed = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _HeaderBar = require("../components/HeaderBar/HeaderBar");

var _HeaderButton = require("../components/HeaderButton/HeaderButton");

var _Delete = _interopRequireDefault(require("@mui/icons-material/Delete"));

var _TopNavLogo = require("../components/TopNavLogo/TopNavLogo");

var _Typography = _interopRequireDefault(require("@mui/material/Typography"));

var _palette = _interopRequireDefault(require("../common/palette"));

var _HeaderTabs = require("../components/HeaderTabs/HeaderTabs");

var _Tab = _interopRequireDefault(require("@mui/material/Tab"));

var _Badge = _interopRequireDefault(require("@mui/material/Badge"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _default = {
  title: 'Molecules/HeaderBar',
  component: _HeaderBar.HeaderBar,
  argTypes: {
    theme: {
      control: {
        type: 'select',
        options: ['purple', 'teal', 'pink', 'blue', 'indigo', 'red']
      }
    }
  }
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_HeaderBar.HeaderBar, args);
};

var LeftContentDefault = function LeftContentDefault() {
  return /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "h2",
    sx: {
      fontSize: 16,
      fontWeight: 500,
      opacity: .75,
      color: _palette.default.black.main
    }
  }, "Connections");
};

var RightContentDefault = function RightContentDefault() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_HeaderButton.HeaderButton, null, /*#__PURE__*/_react.default.createElement(_Delete.default, null)), /*#__PURE__*/_react.default.createElement(_HeaderButton.HeaderButton, null, /*#__PURE__*/_react.default.createElement(_Delete.default, null)));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  theme: 'teal',
  LeftContent: /*#__PURE__*/_react.default.createElement(LeftContentDefault, null),
  RightContent: /*#__PURE__*/_react.default.createElement(RightContentDefault, null)
};

var LeftContentTopNav = function LeftContentTopNav(_ref) {
  var theme = _ref.theme;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_TopNavLogo.TopNavLogo, {
    theme: theme
  }));
};

var RightContentTopNav = function RightContentTopNav() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_HeaderButton.HeaderButton, {
    topNav: true
  }, /*#__PURE__*/_react.default.createElement(_Delete.default, null)), /*#__PURE__*/_react.default.createElement(_HeaderButton.HeaderButton, {
    topNav: true
  }, /*#__PURE__*/_react.default.createElement(_Delete.default, null)));
};

var TopNav = Template.bind({});
exports.TopNav = TopNav;
TopNav.args = {
  theme: 'teal',
  LeftContent: /*#__PURE__*/_react.default.createElement(LeftContentTopNav, {
    theme: "teal"
  }),
  RightContent: /*#__PURE__*/_react.default.createElement(RightContentTopNav, null),
  topNav: true
};

var LeftContentTabbed = function LeftContentTabbed(args) {
  var _React$useState = _react.default.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var handleChange = function handleChange(event, newValue) {
    setValue(newValue);
  };

  return /*#__PURE__*/_react.default.createElement(_HeaderTabs.HeaderTabs, _extends({
    value: value,
    onChange: handleChange
  }, args), /*#__PURE__*/_react.default.createElement(_Tab.default, {
    disableRipple: true,
    label: "Doctors",
    icon: /*#__PURE__*/_react.default.createElement(_Badge.default, {
      badgeContent: 102
    }),
    iconPosition: "end"
  }), /*#__PURE__*/_react.default.createElement(_Tab.default, {
    disableRipple: true,
    label: "MRs",
    icon: /*#__PURE__*/_react.default.createElement(_Badge.default, {
      badgeContent: 33
    }),
    iconPosition: "end"
  }));
};

var Tabbed = Template.bind({});
exports.Tabbed = Tabbed;
Tabbed.args = {
  theme: 'teal',
  LeftContent: /*#__PURE__*/_react.default.createElement(LeftContentTabbed, null),
  RightContent: /*#__PURE__*/_react.default.createElement(RightContentDefault, null),
  tabbed: true
};