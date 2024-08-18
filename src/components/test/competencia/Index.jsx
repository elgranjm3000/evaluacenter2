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
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const steps = ['Step One', 'Step Two', 'Step Three', 'Step For', 'Step Five', 'Step Six'];

const Index = ({ profileData, onLogout, onCheckout, isLoggedIn }) => {


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

      <Container maxWidth="sm">

        <Menu handleLogout={handleLogout} titleFist={t('radares.competence')} />

        <Box display="flex" justifyContent="space-between" style={{ marginTop: '20px' }} onClick={toggleAccordion}>
          <Typography variant="body1" style={{ textAlign: 'left', color: 'black', fontWeight: 'bold' }}>
            {t('howTest')}
          </Typography>
          <Typography variant="body1" style={{ textAlign: 'right', color: 'black', fontWeight: 'bold' }}>
            {isOpen ?  <CloseIcon /> : <KeyboardArrowDownIcon />}
          </Typography>
        </Box>



        {isOpen ?
          <Instrucction />

          :
          <Fade in={true} timeout={1000}>
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
          </Fade>
        }

      </Container>
    </>
  );

}



export default Index;
