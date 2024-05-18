import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { Grid, Paper,FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox,Button } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useTranslation } from 'react-i18next';


const List = ({listTask,onCheckoutList}) => {

  const { t } = useTranslation();


return ( 
    <Box> 

<TableContainer component={Paper} >
      <Table style={{ fontSize:'1rem'  }}>
        <TableHead>
          <TableRow>
            <TableCell colSpan={2}>{t('myTest')}</TableCell>            
          </TableRow>
        </TableHead>
        <TableBody>
        {listTask.map((task, index) => (
            <TableRow style={{ borderBottom: 'none' }} key={index}>
                <TableCell style={{ borderBottom: 'none' }} >{task.cache_evaluation_type_main}</TableCell>
                <TableCell style={{ borderBottom: 'none' }}>
                                <Button variant="contained" style={{ backgroundColor:'#70ad47',width:'100%' }} onClick={onCheckoutList}>
                                {t('openTest')}
                                </Button>
                </TableCell>            
            </TableRow>
         ))}  
         
        </TableBody>
      </Table>
    </TableContainer>


    </Box>
    
   );
 };
 
 export default List;