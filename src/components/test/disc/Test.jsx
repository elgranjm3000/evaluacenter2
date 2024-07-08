import React, {useState,useEffect } from 'react';
import { Container, Grid, Typography, TextField, Button, Link, Fade,Step, StepLabel, Stepper,useMediaQuery, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import GlobalStyles from './GlobalStyles';
import Menu from '../../Menu/index'
import Box from '@mui/material/Box';
import List from './List'
import Instrucction from './Instrucction';
import styles from './style';

const steps = ['Step One', 'Step Two', 'Step Three', 'Step For','Step Five','Step Six'];

const Test = ({ profileData, onLogout, onCheckout,isLoggedIn }) => {


  const [isOpen, setIsOpen] = useState(true);
  const [activeStep, setActiveStep] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = styles(isMobile);
  const { t } = useTranslation();

  
   

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('profileData');
        onLogout();
      };
    
      const toggleAccordion = () => {
        console.log(isOpen);
        setIsOpen(!isOpen);
        console.log(isOpen);
    };
    
      const onCheckoutList = () => {
        onCheckout();
      }


      const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };


      const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };
    
      const handleReset = () => {
        setActiveStep(0);
      };


      const getStepContent = (step) => {
        switch (step) {
          case 0:
            return <List profileData = {profileData} steps={step} valueProgress="16" />;
          case 1:
            return <List profileData = {profileData} steps={step} valueProgress="32"/>;
          case 2:
            return <List profileData = {profileData} steps={step} valueProgress="48"/>;
          case 3:
              return <List profileData = {profileData} steps={step} valueProgress="64"/>;
          case 4:
                return <List profileData = {profileData} steps={step} valueProgress="80"/>;
          case 5:
                  return <List profileData = {profileData} steps={step} valueProgress="100"/>;
          default:
            return 'Unknown step';
        }
      };
    

    
        return (
          <>
          <GlobalStyles/>
          
        <Container maxWidth="sm">     
            
                <Menu handleLogout={handleLogout} titleFist="Disc Premium" />

                <Box display="flex"  justifyContent="space-between" style={{marginTop:'20px'}} onClick={toggleAccordion}>      
                        <Typography variant="body1" style={{ textAlign: 'left', color:'black', fontWeight:'bold' }}>
                        {t('labelTest')}
                        </Typography>
                        <Typography variant="body1" style={{ textAlign: 'right', color:'black', fontWeight:'bold' }}>
                          X
                        </Typography>
                </Box>

             

              {isOpen ? <Instrucction/> 
              : 
              <Box sx={{ width: '100%' }}>
  
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography variant="h6" gutterBottom>
              All steps completed
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <div>{getStepContent(activeStep)}</div>          
           

              <Button variant="contained" color="primary" style={classes.nextButton}
                onClick={handleNext}
              >
                {activeStep === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
              </Button>

              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                variant="contained" className="gray-button" style={classes.previousButton}
              >
                Anterior
              </Button>
            
              
           
          </div>
        )}
      </div>
    </Box>
              }

          </Container>
          </>
        );
      
}

export default Test;
