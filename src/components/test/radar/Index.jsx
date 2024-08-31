import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography, TextField, Button, Link, Fade, Step, StepLabel, Stepper,useMediaQuery, useTheme  } from '@mui/material';
import SelectLanguaje from '../../Select/languaje'
import { useTranslation } from 'react-i18next';
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
import { useParams } from 'react-router-dom';
import styles from '../../styles';
import DialogToolbar from '../../../DialogToolbar';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import GlobalStyles from '../../GlobalStyles';


const steps = ['Step One', 'Step Two', 'Step Three', 'Step For', 'Step Five', 'Step Six'];

const Index = ({ profileData, onLogout, onCheckout, isLoggedIn }) => {

  const [expanded, setExpanded] = useState(false);

  const [isOpen, setIsOpen] = useState(true);
  const [activeStep, setActiveStep] = useState(0);
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = styles(isMobile);

  const { t } = useTranslation();
  const { instance } = useParams();




  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('profileData');
    onLogout();
  };

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
    setExpanded(!expanded);    

  };

  const onCheckoutList = () => {
    onCheckout();
  }


  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setPointers([{value: 0 },{value: 0 }]);

  };


  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const [ pointers, setPointers ] = useState([
    { value: 0 },
    { value: 0 }
]);




  const getStepContent = (step,pointers,setPointers) => {
    console.log(step);
    switch (step) {
      case 0:
        return <Radars profileData={profileData} steps={step} valueProgress="16" pointers={pointers} setPointers={setPointers} />;
      case 1:
        return <Radars profileData={profileData} steps={step} valueProgress="32" pointers={pointers} setPointers={setPointers}/>;
      case 2:
        return <Radars profileData={profileData} steps={step} valueProgress="48" pointers={pointers} setPointers={setPointers}/>;
      case 3:
        return <Radars profileData={profileData} steps={step} valueProgress="64" pointers={pointers} setPointers={setPointers}/>;
      case 4:
        return <Radars profileData={profileData} steps={step} valueProgress="80" pointers={pointers} setPointers={setPointers}/>;
      case 5:
        return <Radars profileData={profileData} steps={step} valueProgress="100" pointers={pointers} setPointers={setPointers}/>;
      default:
        return 'Unknown step';
    }
  };



  return (
    <>
   <GlobalStyles />
      <Container maxWidth="sm">

        <Menu handleLogout={handleLogout} titleFist={t('radares.radar')} />

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


        {isOpen ?<></>
          :
          <Box>

            <div>
              {activeStep === steps.length ? (
                <DialogToolbar titleDialog={t("radares.dialogTitle")} bodyDialog={t("radares.dialogBody")} />
              ) : (
                <div>

                  <Typography variant="body1" style={{ textAlign: 'center', color: 'black', fontWeight: 'bold' }}>
                      {t('state')}      
                  </Typography>
                  

                  <div>{getStepContent(activeStep,pointers,setPointers)}</div>


                  <Button variant="contained" color="primary" style={{ "width": "100%" }}
                    onClick={handleNext}
                  >
                    {activeStep === steps.length - 1 ? 'Finalizar' : t('next')   }
                  </Button>

                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    variant="contained" className="gray-button" style={{ "width": "100%", "marginTop": "15px" }}
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



export default Index;
