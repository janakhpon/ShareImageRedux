import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#003459',
    },
    secondary: {
      main: '#f3ffbd',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#011627',
    },
    text: {
      default: '#ffffff',
      main: "#ffffff",
    },
    textColor: '#ffffff',
  },
  root: {
    textDecoration: 'none',
  },
});


export default theme;
