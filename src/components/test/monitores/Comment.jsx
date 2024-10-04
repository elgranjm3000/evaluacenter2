import React, { useState }  from 'react';
import { AppBar, TextField,Toolbar, IconButton, Typography, Box, Button, Radio, RadioGroup, FormControlLabel, Grid } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';


//borderColor: 'primary.main',
export default function Comment({handleValuesOpen,handleClose}) {
  
const StyledBox = styled(Box)(({ theme, selected }) => ({
        width: 100,
        height: 100,
        borderRadius: '50%',
        border: `2px solid ${selected ? theme.palette.primary.main : 'black'}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        textAlign: 'center',
        padding: theme.spacing(1),
        transition: 'border 0.3s ease', 
}));

const [value, setValue] = useState('suficiente');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleConfirm = () => {
    if(value === 'suficiente'){
      handleValuesOpen("Suficiente como esta");
    }else if(value === 'mejorar_maximo'){
      handleValuesOpen("Mejorar al máximo");
    }else if(value === 'mejorar_mucho'){
      handleValuesOpen("Mejorar mucho");
    }else if(value === 'mejorar_bastante'){
      handleValuesOpen("Mejorar bastante");
    }else if(value === 'mejorar_poco'){
      handleValuesOpen("Mejorar un poco");
    }else{
      handleValuesOpen(value);
    }
    
    handleClose();
  }

  return (
    <Box sx={{ p: 1, textAlign: 'center' }}>
      
      <form noValidate autoComplete="off">
        {/* Campo de texto */}
        <TextField
          label="Escribe tu comentario"
          variant="outlined"
          fullWidth
          margin="normal"
        />

        {/* Botón de enviar */}
        <Button variant="contained" color="primary" sx={{ width: '100%' }} onClick={handleConfirm}>
        Confirmar
      </Button>
      </form>
    
    </Box>
  );
}
