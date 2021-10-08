import { createTheme } from '@mui/material/styles';
import common_theme  from './common';

const dark_theme = createTheme(common_theme, {
  palette:{
    type: 'dark',
    primary: {
      main: '#1A313A',
    },
    secondary: {
      main: '#AAA89B',
    },
    error: {
      main: '#A14D38',
    },
    warning: {
      main: '#AA7143',
    },
    success: {
      main: '#1D6D64',
    },
    info: {
      main: '#75989A',
    },
    background: {
      default: '#2b2b2b',
    },
    text:{
      primary:"#fafafa"
    }

  },

});
export default dark_theme;