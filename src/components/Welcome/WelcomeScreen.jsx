import React, { useState, useEffect, useRef } from 'react';
import logo from '../../assets/logo.png'
import {Zoom, Container, CircularProgress, Box } from '@mui/material';
import GlobalStyles from './GlobalStyles';


const WelcomeScreen = () => {


  const [visible, setVisible] = useState(false);

  useEffect(() => {
      const interval = setInterval(() => {
          setVisible(true);
      }, 1000); 

      return () => clearInterval(interval); 
  }, []);

  return (
    <>
    <GlobalStyles />

    <Container maxWidth="sm" style={styles.container}>
   
       <Zoom in={visible} timeout={500}>
        <div>
            <img src={logo} />
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


const styles = {
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
    color: 'write',
    fontSize: '35px',
    fontFamily: 'Hiragino Sans',
    fontWeight: '300',
    wordWrap: 'break-word',
    marginBottom: '1px'
  },
  title_2:{    
    color: 'write',
    fontSize: '15px',
    fontFamily: 'Inter',
    marginLeft:'140px',
    letterSpacing: '2.40px',
    wordWrap: 'break-word',
  }
  
};

export default WelcomeScreen;