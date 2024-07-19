import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { Button, Typography,useMediaQuery, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import GlobalStyles from './GlobalStyles';
import Group from '../../assets/group.png'
import  styles  from './style';


const ListNotFound = () => {

  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = styles(isMobile);


return ( 

  <>
    <GlobalStyles />
  
        <Box>
                  <img src={Group} style={classes.imgPadding}></img>
                  <Typography variant="h1" style={classes.pending}>
                      {t('pending')}
                  </Typography>
                

                 
        </Box>

    </>
   );
 };
 
 export default ListNotFound;