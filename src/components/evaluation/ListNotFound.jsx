import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { Button, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import GlobalStyles from './GlobalStyles';
import Group from '../../assets/group.png'
import  styles  from './style';


const ListNotFound = () => {

  const { t } = useTranslation();


return ( 

  <>
    <GlobalStyles />
  
        <Box>
                  <img src={Group} style={styles.imgPadding}></img>
                  <Typography variant="h1" style={styles.pending}>
                      {t('pending')}
                  </Typography>
                  <Typography variant="body1" style={styles.subTitle}>
                    {t('pendingDetails')}
                  </Typography>

                  <Button variant="text" style={styles.buttonList}>
                        Regresar al inicio
                  </Button>
        </Box>

    </>
   );
 };
 
 export default ListNotFound;