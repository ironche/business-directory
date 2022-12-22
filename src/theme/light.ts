import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f8f8fa',
      paper: '#ffffff'
    },
    secondary: {
      main: '#b41d76',
    },
    text: {
      primary: '#2f2e43',
    },
  },
});
