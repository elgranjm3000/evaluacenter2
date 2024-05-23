import React, { useEffect, useRef } from 'react';
import logo from './assets/logo.png'
import { TextField, Button, Container, Typography } from '@mui/material';



const WelcomeScreen = () => {

  

  return (
    <Container maxWidth="sm">
      <img src={logo} />
      <h1 style={styles.title_1}>People Perfomance</h1>
      <span style={styles.title_2} >INTERNATIONAL</span>
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