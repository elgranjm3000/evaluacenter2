import React, { useState, useEffect } from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Container, Grid, Typography, TextField, Button, Link, Fade, Step, StepLabel, Stepper,useMediaQuery, useTheme, Modal, Stack,Alert,AlertTitle  } from '@mui/material';
import { useTranslation } from 'react-i18next';
import styles from './components/styles';
import { useNavigate } from 'react-router-dom';
const DialogToolbar = ({titleDialog,bodyDialog}) => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = styles(isMobile);
  const { t } = useTranslation();  

  const handleRedirect = () => {
    navigate('/task'); 
  }
  return (
    
               <>
               {openModal && (
                        <Dialog
                          open={openModal}
                          onClose={handleRedirect}
                          aria-labelledby="alert-dialog-title"
                          aria-describedby="alert-dialog-description"
                          disableEscapeKeyDown
                        >
                          <DialogTitle id="alert-dialog-title">{titleDialog}</DialogTitle>
                          
                          <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                              {bodyDialog}
                            </DialogContentText>
                          </DialogContent>
                          
                          <DialogActions>
                            <Button onClick={handleRedirect} color="secondary">
                              {t('radares.buttonReady')}
                            </Button>
                            
                          </DialogActions>
                        </Dialog>
                )}
              </> 
             
  );

}



export default DialogToolbar;
