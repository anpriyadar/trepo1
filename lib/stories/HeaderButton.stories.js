"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TopNav = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _HeaderButton = require("../components/HeaderButton/HeaderButton");

var _Delete = _interopRequireDefault(require("@mui/icons-material/Delete"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Atoms/HeaderButton',
  component: _HeaderButton.HeaderButton,
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
  return /*#__PURE__*/_react.default.createElement(_HeaderButton.HeaderButton, args, /*#__PURE__*/_react.default.createElement(_Delete.default, null));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  theme: 'teal'
};
var TopNav = Template.bind({});
exports.TopNav = TopNav;
TopNav.args = {
  theme: 'teal',
  topNav: true
};