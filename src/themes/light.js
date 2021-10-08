import { createTheme } from "@mui/material";
import common_theme  from "./common";

const light_theme = createTheme(common_theme, {
    palette: {
      type: 'light',
      primary: {
        main: '#264653',
      },
      secondary: {
        main: '#f4f1de',
      },
      error: {
        main: '#e76f51',
      },
      warning: {
        main: '#f4a261',
      },
      success: {
        main: '#2a9d8f',
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