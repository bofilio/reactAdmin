import { createTheme } from "@mui/material";
import common_theme  from "./common";

const light_theme = createTheme(common_theme, {
    palette: {
      type: 'light',
      primary: {
        main: '#224abe',
      },
      secondary: {
        main: '#c2cbe5',
      },
      error: {
        main: '#e76f51',
      },
      warning: {
        main: '#f4a261',
      },
      success: {
        light:'#36b9cc',
        main: '#2a9d8f',
        dark:'#004b57'

      },
      info: {
        main: '#a8dadc',
      },
      background: {
        default: '#fafafa',
        paper:'#fff'
      },
      text:{
        primary:"#264653"
      }
    },
    
  
  });

  export default light_theme;