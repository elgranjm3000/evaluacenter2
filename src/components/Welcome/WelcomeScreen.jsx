import React, { useState, useEffect, useRef } from 'react';
import logo from '../../assets/logo.png'
import {Zoom, Container, CircularProgress, Box } from '@mui/material';

const WelcomeScreen = () => {


  const [visible, setVisible] = useState(false);

  useEffect(() => {
      const interval = setInterval(() => {
          setVisible(true);
      }, 1000); 

      return () => clearInterval(interval); 
  }, []);

  return (
    <Container maxWidth="sm">
   
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
            <CircularProgress />
        </Box>
    </Container>
  );
};


const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#1787D8',
  },
  title_1:{
    color: 'write',
    fontSize: '16',
    fontFamily: 'Hiragino Sans',
    fontWeight: '300',
    wordWrap: 'break-word'
  },
  title_2:{
    color: '#80BFF0',
    fontSize: '8',
    fontFamily: 'Inter'   
  }
  
};

export default WelcomeScreen;