import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Change this to your preferred primary color
    },
    secondary: {
      main: '#dc004e', // Change this to your preferred secondary color
    },
  },
  typography: {
    h3: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 500,
    },
  },
});

export default theme;
