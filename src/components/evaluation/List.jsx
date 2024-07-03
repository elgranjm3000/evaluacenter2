import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { Grid, Paper,FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox,Button, Card, CardHeader, CardContent,Typography,useMediaQuery, useTheme, } from '@mui/material';
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


return ( 

  <>
    <GlobalStyles />
    <Box> 
        

{listTask.length > 0 ? (
    listTask.map((task, index) => (

          <Card style={{padding:'1px', border:'1px #DBDBDB solid', margin:'10px', borderRadius: '8px'}}>
        
            <CardHeader 
                style={{paddingLeft:"10px", paddingTop:"5px",paddingBottom:"5px"}}
                title={task.cache_evaluation_category_main}                
                titleTypographyProps={{ align: 'left',style: { fontWeight: 'bold', fontSize:"18px" } }}
                subheaderTypographyProps={{ align: 'left' }}              

            />
          <CardContent style={{ textAlign: 'left', paddingLeft:"10px", paddingTop:"5px",paddingBottom:"10px"  }}>          
                    <MuiLink href={`/${task.cache_evaluation_category_main}`} rel="noopener noreferrer" style={{fontSize:"18px"}}>
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