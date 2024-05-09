import { createTheme } from '@mui/material/styles';
import {
    grayBg,
    almostWhite,
    center,
    evaluacenterTextColor,
    btnBgColor,
    evaluacenterFontRegular,
  } from '../globalSyles' 

  import { GlobalStyles } from '@mui/material';



  const inputBorderColor = '#e5e6e7'

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
        MuiTextField: {
          styleOverrides: {
            root: {
              '& .MuiInputBase-root': {
                borderRadius: '8px',                
                padding: '10px 20px',
                height:'30px',
                marginTop:'15px'
              },
              '& .MuiInputBase-input': {
                fontSize: '16px',
                
              },
              '& .MuiInputLabel-root': {
                color: '#333',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#ccc',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#aaa',
              },
              '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#2196f3',
              },
            },
          },
        },

        MuiButton: {
            styleOverrides: {
              root: {
                backgroundColor: '#1ab394',
                color: '#FFFFFF',
                padding: '10px 20px',
                borderRadius: '5px',
                textTransform: 'uppercase',
                borderCollapse:'#1ab394',
                '&:hover': {
                  backgroundColor: '#1ab394',
                },
              },
            },
        },

        MuiPaper: {
            styleOverrides: {
              root: {
                padding: '20px', // Ajusta el espacio interno
                backgroundColor: 'transparent', // Cambia el color de fondo
                borderRadius: '0px', // Ajusta el radio de borde
                border: '0px'
                
              },
            },
          },

     
    },
   
  });
  
  export default theme;


