import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { Grid, Paper,FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox,Button, Card, CardHeader, CardContent,Typography,useMediaQuery, useTheme } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useTranslation } from 'react-i18next';
import { Link as MuiLink} from '@mui/material';

import GlobalStyles from './GlobalStyles';
import Group from '../../assets/group.png'
import  styles  from './style';
import ListNotFound from './ListNotFound';

const List = ({listTask,onCheckoutList}) => {

  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const classes = styles(isMobile);
  const listTask2 = [
    {
      cache_evaluation_category_main: 'radar',
      cache_evaluation_type_main: 'radar',
      id: 107918
    },
    {
      cache_evaluation_category_main: 'Disc',
      cache_evaluation_type_main: 'disc',
      id: 129095
    },
    {
      cache_evaluation_category_main: 'Disc objetivo',
      cache_evaluation_type_main: 'disc-objetivo',
      id: 114716
    },
    {
      cache_evaluation_category_main: 'Radar competencia',
      cache_evaluation_type_main: 'radarcompetencia',
      id: 128381
    },
    {
      cache_evaluation_category_main: 'Radar observadores',
      cache_evaluation_type_main: 'radar-observadores',
      id: 129850
    },
    {
      cache_evaluation_category_main: 'Valores motivaciones',
      cache_evaluation_type_main: 'motivational',
      id: 129878
    },
    {
      cache_evaluation_category_main: 'Vital personal',
      cache_evaluation_type_main: 'welfare',
      id: 129898,
      type:1  
    },
    {
      cache_evaluation_category_main: 'Vital bienestar',
      cache_evaluation_type_main: 'welfare',
      id: 129898,
      type:2  
    },
    {
      cache_evaluation_category_main: 'Monitores',
      cache_evaluation_type_main: 'monitores',
      id: 128381
    },
    
  ];
  

return ( 

  <>
    <GlobalStyles />
    <Box> 
        

{listTask2.length > 0 ? (
    listTask2.map((task, index) => (

          <Card style={classes.cardStyle}>
        
            <CardHeader 
                style={classes.cardContent}
                title={task.cache_evaluation_category_main}                
                titleTypographyProps={{ align: 'left',style:  classes.cardText  }}
                subheaderTypographyProps={{ align: 'left' }}              

            />
          <CardContent style={classes.cardContentList}> 

          <MuiLink
      href={`/${task.cache_evaluation_type_main}/${task.id}${task.cache_evaluation_type_main === "welfare" ? `/${task.type}` : ''}`}
      rel="noopener noreferrer"
      style={classes.cardLink}
    >
      {t('openTest')}
    </MuiLink>    

          </CardContent>
            
          </Card>
    )) 
  
  ) : (
    <ListNotFound/>
  )}
    </Box>
    </>
   );
 };
 
 export default List;