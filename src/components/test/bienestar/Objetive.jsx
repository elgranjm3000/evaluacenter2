import React, { useState }  from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, Button, Radio, RadioGroup, FormControlLabel, Grid } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';

//borderColor: 'primary.main',
export default function ObjectiveScreen({handleValuesOpenObjetive,handleCloseObjetive}) {
  
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
      handleValuesOpenObjetive("Suficiente como esta");
    }else if(value === 'mejorar_maximo'){
      handleValuesOpenObjetive("Mejorar al máximo");
    }else if(value === 'mejorar_mucho'){
      handleValuesOpenObjetive("Mejorar mucho");
    }else if(value === 'mejorar_bastante'){
      handleValuesOpenObjetive("Mejorar bastante");
    }else if(value === 'mejorar_poco'){
      handleValuesOpenObjetive("Mejorar un poco");
    }else{
      handleValuesOpenObjetive(value);
    }
    
    handleCloseObjetive();
  }

  return (
    <Box sx={{ p: 1, textAlign: 'center' }}>
      <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="back">
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center', color:"black" }}>
            Valore su estado objetivo
          </Typography>
          <IconButton edge="end" color="inherit" aria-label="close">
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Texto de descripción */}
      <Typography variant="body1">
        Estoy satisfecho con mi nivel de ingresos actual
      </Typography>

      <Box sx={{ display: 'block', justifyContent: 'center', flexWrap: 'wrap', gap: 2, my: 4}}>
        
        <RadioGroup 
        value={value}
        onChange={handleChange}
        sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}
        >
       
      <Grid container  spacing={2} justifyContent="space-between">   
        <Grid item xs={12}  sm={12} md={12} style={{textAlign:"center"}}>
          <FormControlLabel
            value="suficiente"
            control={<Radio sx={{ display: 'none' }}/>}
            selected={value === 'suficiente'}
            label={
              <StyledBox selected={value === 'suficiente'}>
                    Suficiente como esta
              </StyledBox>
            }
          />
        </Grid>
      </Grid>

          
      <Grid container  spacing={2} justifyContent="space-between" >
          <Grid item xs={6}  sm={6} md={6} style={{textAlign:"left"}}>
          <FormControlLabel
            value="mejorar_maximo"
            control={<Radio sx={{ display: 'none' }}/>}
            selected={value === 'mejorar_maximo'}
            label={

              <StyledBox selected={value === 'mejorar_maximo'}>
                    Mejorar al máximo
              </StyledBox>
              
            }
          />
          </Grid>
          <Grid item xs={6} sm={6} md={6} style={{ textAlign: "right" }}>
          <FormControlLabel
            value="mejorar_poco"
            control={<Radio sx={{ display: 'none' }} />}
            selected={value === 'mejorar_poco'}
            label={
              <StyledBox selected={value === 'mejorar_poco'}>
                    Mejorar un poco
              </StyledBox>              
            }
          />
          </Grid>
          </Grid>

    <Grid container  spacing={2} justifyContent="space-between">   
      <Grid item xs={6}  sm={6} md={6} style={{textAlign:"right"}}>     
          <FormControlLabel
            value="mejorar_mucho"
            control={<Radio sx={{ display: 'none' }} />}
            selected={value === 'mejorar_mucho'}
            label={
              <StyledBox selected={value === 'mejorar_mucho'}>
                    Mejorar mucho
              </StyledBox>      
              
            }
          />
        
        </Grid>
      
        <Grid item xs={6}  sm={6} md={6} style={{textAlign:"left"}}>     

          <FormControlLabel
            value="mejorar_bastante"
            control={<Radio sx={{ display: 'none' }} />}
            selected={value === 'mejorar_bastante'}
            label={
              <StyledBox selected={value === 'mejorar_bastante'}>
                    Mejorar bastante
              </StyledBox> 
              
            }
          />

          </Grid>
        </Grid>
        </RadioGroup>
      </Box>

      <Button variant="contained" color="primary" sx={{ width: '100%' }} onClick={handleConfirm}>
        Confirmar
      </Button>
    </Box>
  );
}
