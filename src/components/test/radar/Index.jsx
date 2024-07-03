import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography, TextField, Button, Link, Fade, Step, StepLabel, Stepper } from '@mui/material';
import SelectLanguaje from '../../Select/languaje'
import { useTranslation } from 'react-i18next';
import Styles from '../Styles';
import Menu from '../../Menu/index'


import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import FormControlLabel from '@mui/material/FormControlLabel';
import people_rushing from '../../../assets/test/people-rushing.svg'
import done from '../../../assets/test/done.svg'
import asking_question from '../../../assets/test/asking-question.svg'
import online_shopping from '../../../assets/test/online-shopping.svg'
import Radars from './Radars'
import Instrucction from './Instrucction';

const steps = ['Step One', 'Step Two', 'Step Three', 'Step For', 'Step Five', 'Step Six'];

const Index = ({ profileData, onLogout, onCheckout, isLoggedIn }) => {


  const [isOpen, setIsOpen] = useState(true);
  const [activeStep, setActiveStep] = useState(0);


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
        return <Radars profileData={profileData} steps={step} valueProgress="16" />;
      case 1:
        return <Radars profileData={profileData} steps={step} valueProgress="32" />;
      case 2:
        return <Radars profileData={profileData} steps={step} valueProgress="48" />;
      case 3:
        return <Radars profileData={profileData} steps={step} valueProgress="64" />;
      case 4:
        return <Radars profileData={profileData} steps={step} valueProgress="80" />;
      case 5:
        return <Radars profileData={profileData} steps={step} valueProgress="100" />;
      default:
        return 'Unknown step';
    }
  };



  return (
    <>
      <Styles />

      <Container maxWidth="sm">

        <Menu handleLogout={handleLogout} titleFist="Radares" />

        <Box display="flex" justifyContent="space-between" style={{ marginTop: '20px' }} onClick={toggleAccordion}>
          <Typography variant="body1" style={{ textAlign: 'left', color: 'black', fontWeight: 'bold' }}>
            ¿Cómo realizo este test?
          </Typography>
          <Typography variant="body1" style={{ textAlign: 'right', color: 'black', fontWeight: 'bold' }}>
            X
          </Typography>
        </Box>



        {isOpen ?
          <Instrucction />

          :
          <Box>

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


                  <Button variant="contained" color="primary" style={{ "width": "100%" }}
                    onClick={handleNext}
                  >
                    {activeStep === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
                  </Button>

                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    variant="contained" className="gray-button" style={{ "width": "100%", "marginTop": "15px" }}
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



export default Index;
