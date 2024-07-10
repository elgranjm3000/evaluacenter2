import React, { useState, useEffect, useRef } from 'react';
import logo from '../../assets/logo.png'
import {Zoom, Container, CircularProgress, Box } from '@mui/material';
import GlobalStyles from './GlobalStyles';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const WelcomeScreen = () => {


  const [visible, setVisible] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
      const interval = setInterval(() => {
          setVisible(true);
      }, 1000); 

      return () => clearInterval(interval); 
  }, []);

  return (
    <>
    <GlobalStyles />

    <Container maxWidth={isMobile ? 'xs' : 'sm'} style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'  }}>
   
       <Zoom in={visible} timeout={500}>
        <div>
            <img src={logo} style={{width:"8rem"}}/>
            <h1 style={styles.title_1}>People Perfomance</h1>
            <span style={styles.title_2} >INTERNATIONAL</span>
        </div>
      </Zoom>
      <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
          
        >
            <CircularProgress style={styles.blackCircularProgress} />
        </Box>
    </Container>
    </>
  );
};


const styles =  {
  blackCircularProgress: {
    color: 'black',
    marginTop:'20px'
},
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',    
    backgroundColor: '#1787D8',
    color: '#fff',
   
  },
  title_1:{
    color: '#fff',
    fontSize: '35px',
    fontFamily: 'Hiragino Sans GB W05 W4',
    fontWeight: '300',
    wordWrap: 'break-word',
    marginBottom: '1px'
  },
  title_2:{       
    color: '#80BFF0',
    fontFamily: 'Inter',
    letterSpacing: '2.40px',
    wordWrap: 'break-word',
    marginLeft:'140px',
    fontWeight: '400',    

  }
  
};

export default WelcomeScreen;