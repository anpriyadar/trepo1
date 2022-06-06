"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("@mui/material/styles");

var _palette = _interopRequireDefault(require("./palette"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createCustomTheme = function createCustomTheme(theme) {
  return (0, _styles.createTheme)({
    breakpoints: {
      values: {
        mobile: 0,
        tablet: 640,
        laptop: 1024,
        desktop: 1280
      }
    },
    palette: {
      primary: {
        main: _palette.default[theme].main,
        light: _palette.default[theme].light,
        dark: _palette.default[theme].dark
      }
    },
    typography: {
      fontFamily: ['"Helvetica Neue"', 'BlinkMacSystemFont', 'Roboto', '"Segoe UI"', 'Arial', 'sans-serif'].join(',')
    }
    /* components:{
       MuiTab: {
         styleOverrides: {
           root: {
             '&.Mui-selected': {
               color: palette[theme].dark,
             }
           }
         }
       }
     } */

  });
};

var purple = createCustomTheme('purple');
var teal = createCustomTheme('teal');
var pink = createCustomTheme('pink');
var blue = createCustomTheme('blue');
var indigo = createCustomTheme('indigo');
var red = createCustomTheme('red');
var themes = {
  purple: purple,
  teal: teal,
  pink: pink,
  blue: blue,
  indigo: indigo,
  red: red
};
var _default = themes;
exports.default = _default;