import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#000000',
      paper: '#121212'
    },
    secondary: {
      main: '#b41d76',
    },
    text: {
      primary: '#dadada',
    },
  },
});
