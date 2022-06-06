"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Primary = void 0;

var _react = _interopRequireDefault(require("react"));

var _TopNavLogo = require("../components/TopNavLogo/TopNavLogo");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Atoms/TopNavLogo',
  component: _TopNavLogo.TopNavLogo,
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
  return /*#__PURE__*/_react.default.createElement(_TopNavLogo.TopNavLogo, args);
};

var Primary = Template.bind({});
exports.Primary = Primary;
Primary.args = {
  theme: 'teal'
};