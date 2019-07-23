import React from 'react';
import ReactDOM from 'react-dom';
import Master from "./containers/MainContainer";

//import MUI theme
import { ThemeProvider } from '@material-ui/styles';
import mainTheme from "../../assets/styles/muiThemes/main";

ReactDOM.render(
  <div>
    <ThemeProvider theme={mainTheme}>
    <Master/>
    </ThemeProvider>
  </div>,
  document.getElementById('root')
);
