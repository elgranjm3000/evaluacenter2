import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { Grid, Paper,FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox,Button, Card, CardHeader, CardContent,Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useTranslation } from 'react-i18next';
import { Link as MuiLink } from '@mui/material';
import GlobalStyles from './GlobalStyles';
import Group from '../../assets/group.png'
import  styles  from './style';
import ListNotFound from './ListNotFound';

const List = ({listTask,onCheckoutList}) => {

  const { t } = useTranslation();


return ( 

  <>
    <GlobalStyles />
    <Box> 
        

{listTask.length > 0 ? (
    listTask.map((task, index) => (
      
          <Card style={{padding:'10px', border:'1px #DBDBDB solid', margin:'10px', borderRadius: '8px'}}>
            <CardHeader 
                title={task.cache_evaluation_type_main}                
                titleTypographyProps={{ align: 'left' }}
                subheaderTypographyProps={{ align: 'left' }}
            />
          <CardContent style={{ textAlign: 'left', paddingTop:'1px'  }}>
          
                    <MuiLink href="#" target="_blank" rel="noopener noreferrer">
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