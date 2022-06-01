import { createTheme } from '@mui/material/styles';
import palette from './palette';

const createCustomTheme = (theme) => {
  return createTheme({
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
        main: palette[theme].main,
        light: palette[theme].light,
        dark: palette[theme].dark,
      },
    },
    typography: {
      fontFamily: [
        '"Helvetica Neue"',
        'BlinkMacSystemFont',
        'Roboto',
        '"Segoe UI"',
        'Arial',
        'sans-serif',
      ].join(','),
    },
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
}

const purple = createCustomTheme('purple')
const teal = createCustomTheme('teal');
const pink = createCustomTheme('pink')
const blue = createCustomTheme('blue')
const indigo = createCustomTheme('indigo')
const red = createCustomTheme('red')

const themes = {
    purple,
    teal,
    pink,
    blue,
    indigo,
    red,
}

export default themes;