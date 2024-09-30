import React, { useState }  from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, Button, Radio, RadioGroup, FormControlLabel, Grid } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';

//borderColor: 'primary.main',
export default function ObjectiveScreen({handleValuesOpen,handleClose}) {
  
const StyledBox = styled(Box)(({ theme, selected }) => ({
        fontSize:"10px",
        width: 70,
        height: 70,
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
    if(value === 'siempre'){
      handleValuesOpen("Siempre");
    }else if(value === 'no_lo_se'){
      handleValuesOpen("No lo se");
    }else if(value === 'muy_a_menudo'){
      handleValuesOpen("Muy a menudo");
    }else if(value === 'nunca'){
      handleValuesOpen("Nunca");
    }else if(value === 'frecuentemente'){
      handleValuesOpen("Frecuentemente");
    }else if(value === 'pocas_veces'){
      handleValuesOpen("Pocas veces");
    }else if(value === 'regularmente'){
      handleValuesOpen("Mas o menos regulamente");
    }else if(value === 'algunas_veces'){
      handleValuesOpen("Algunas veces");
    }else{
      handleValuesOpen(value);
    }
    
    handleClose();
  }

  return (
    <Box sx={{ p: 1, textAlign: 'center' }}>
      

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
      <Grid item xs={6}  sm={6} md={6} style={{textAlign:"right"}}>     
          <FormControlLabel
            value="siempre"
            control={<Radio sx={{ display: 'none' }} />}
            selected={value === 'siempre'}
            label={
              <StyledBox selected={value === 'siempre'}>
                    Siempre
              </StyledBox>      
              
            }
          />
        
        </Grid>
      
        <Grid item xs={6}  sm={6} md={6} style={{textAlign:"left"}}>     

          <FormControlLabel
            value="no_lo_se"
            control={<Radio sx={{ display: 'none' }} />}
            selected={value === 'no_lo_se'}
            label={
              <StyledBox selected={value === 'no_lo_se'}>
                    No lo se
              </StyledBox> 
              
            }
          />

          </Grid>
        </Grid>

          
      <Grid container  spacing={2} justifyContent="space-between" >
          <Grid item xs={6}  sm={6} md={6} style={{textAlign:"left"}}>
          <FormControlLabel
            value="muy_a_menudo"
            control={<Radio sx={{ display: 'none' }}/>}
            selected={value === 'muy_a_menudo'}
            label={

              <StyledBox selected={value === 'muy_a_menudo'}>
                    Muy a menudo
              </StyledBox>
              
            }
          />
          </Grid>
          <Grid item xs={6} sm={6} md={6} style={{ textAlign: "right" }}>
          <FormControlLabel
            value="nunca"
            control={<Radio sx={{ display: 'none' }} />}
            selected={value === 'nunca'}
            label={
              <StyledBox selected={value === 'nunca'}>
                    Nunca
              </StyledBox>              
            }
          />
          </Grid>
    </Grid>

    <Grid container  spacing={2} justifyContent="space-between" >
          <Grid item xs={6}  sm={6} md={6} style={{textAlign:"left"}}>
          <FormControlLabel
            value="frecuentemente"
            control={<Radio sx={{ display: 'none' }}/>}
            selected={value === 'frecuentemente'}
            label={

              <StyledBox selected={value === 'frecuentemente'}>
                    Frecuentemente
              </StyledBox>
              
            }
          />
          </Grid>
          <Grid item xs={6} sm={6} md={6} style={{ textAlign: "right" }}>
          <FormControlLabel
            value="pocas_veces"
            control={<Radio sx={{ display: 'none' }} />}
            selected={value === 'pocas_veces'}
            label={
              <StyledBox selected={value === 'pocas_veces'}>
                    Pocas veces
              </StyledBox>              
            }
          />
          </Grid>
    </Grid>

    <Grid container  spacing={2} justifyContent="space-between">   
      <Grid item xs={6}  sm={6} md={6} style={{textAlign:"right"}}>     
          <FormControlLabel
            value="regularmente"
            control={<Radio sx={{ display: 'none' }} />}
            selected={value === 'regularmente'}
            label={
              <StyledBox selected={value === 'regularmente'}>
                    Mas o menos regulamente
              </StyledBox>      
              
            }
          />
        
        </Grid>
      
        <Grid item xs={6}  sm={6} md={6} style={{textAlign:"left"}}>     

          <FormControlLabel
            value="algunas_veces"
            control={<Radio sx={{ display: 'none' }} />}
            selected={value === 'algunas_veces'}
            label={
              <StyledBox selected={value === 'algunas_veces'}>
                    Algunas veces
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
