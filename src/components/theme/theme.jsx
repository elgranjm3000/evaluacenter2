import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Arial', // Puedes agregar más fuentes aquí
      'IBM Plex Sans'
    ].join(','),
    h1: {
      fontWeight: 100,
      fontSize: '30px',
    },
    h2: {
      fontWeight: 100,
      fontSize: '24px',
    },
    h3: {
      fontWeight: 100,
      fontSize: '16px',
      marginTop: '5px',
    },
    h4: {
      fontWeight: 600,
      fontSize: '14px',
      marginTop: '5px',
    },
    h5: {
      fontWeight: 600,
      fontSize: '12px',
      marginTop: '5px',
    },
    h6: {
      fontWeight: 600,
      fontSize: '10px',
      marginTop: '5px',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@global': {
          body: {
            backgroundColor: 'red',
            fontFamily: '"Arial", sans-serif',
            // Aplica tu clase CSS al body
            className: 'gray-bg',
          },
        },
      },
    },
  },
});

export default theme;