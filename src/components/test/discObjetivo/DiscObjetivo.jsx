import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography, TextField, Button, Link, Fade, Step, StepLabel, Stepper, useMediaQuery, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import GlobalStyles from '../../GlobalStyles';
import Menu from '../../Menu/index'
import Box from '@mui/material/Box';
import List from './List'
import Instrucction from './Instrucction';
import DialogToolbar from '../../../DialogToolbar';
import styles from './style';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';


const steps = ['Step One', 'Step Two', 'Step Three', 'Step For', 'Step Five', 'Step Six'];

const DiscObjetivo = ({ profileData, onLogout, isLoggedIn }) => {


  const [isOpen, setIsOpen] = useState(true);
  const [activeStep, setActiveStep] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = styles(isMobile);
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);
  const [validChecked, setValidChecked] = useState(false);





  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('profileData');
    onLogout();
  };

  const toggleAccordion = () => {

    setIsOpen(!isOpen);
    setExpanded(!expanded);    
    
  };

 


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
        return <List profileData={profileData} steps={step} valueProgress="16" />;
      case 1:
        return <List profileData={profileData} steps={step} valueProgress="32" />;
      case 2:
        return <List profileData={profileData} steps={step} valueProgress="48" />;
      case 3:
        return <List profileData={profileData} steps={step} valueProgress="64" />;
      case 4:
        return <List profileData={profileData} steps={step} valueProgress="80" />;
      case 5:
        return <List profileData={profileData} steps={step} valueProgress="100" />;
      default:
        return 'Unknown step';
    }
  };



  return (
    <>
      <GlobalStyles />

      <Container maxWidth="sm">

        <Menu handleLogout={handleLogout} titleFist="Perfil Objetivo DISC" />

        <Accordion defaultExpanded  sx={{ boxShadow: 'none', border: 'none' }}>
        <AccordionSummary
          expandIcon={expanded ? <ExpandMoreIcon /> : <CloseIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          onClick={toggleAccordion}
        
        >
          {t('labelTest')}
        </AccordionSummary>
        <AccordionDetails>
            <Instrucction/>
        </AccordionDetails>
      </Accordion>


        {isOpen ? <></>
          :
          <Box sx={{ width: '100%' }}>

            <div>
              {activeStep === steps.length ? (
                <DialogToolbar titleDialog={t("discp.dialogTitle")} bodyDialog={t("discp.dialogBody")} />
              ) : (
                <div>
                  <div>{getStepContent(activeStep)}</div>


                  <Button variant="contained" color="primary" style={classes.nextButton}
                    onClick={handleNext}
                  >
                    {activeStep === steps.length - 1 ? t('endPage') :  t('next')}
                  </Button>

                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    variant="contained" className="gray-button" style={classes.previousButton}
                  >
                    {t('previous')}
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

export default DiscObjetivo;
