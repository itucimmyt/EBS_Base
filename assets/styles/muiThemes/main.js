/*This is main muiThemes file, you may edit the colors in this file
in order to set the theme colors that will rule all over the application*/

import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      ligth: '#92c94b',
      main: "#77BC1F",
      dark: '#538315',
      contrastText: '#fff',
    },
    secondary: {
      ligth: '#77777b',
      main: "#55565A",
      dark: '#3b3c3e',
      contrastText: '#fff',
    },
    error: {
      main: "#9f1c37",
      contrastText: '#fff',
    }
  }
});


export default theme;
