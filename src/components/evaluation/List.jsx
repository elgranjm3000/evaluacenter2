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



const List = ({listTask,onCheckoutList}) => {

  const { t } = useTranslation();


return ( 
    <Box> 
    {listTask.map((task, index) => (
      
          <Card style={{padding:'10px', border:'1px solid', margin:'10px'}}>
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
    ))}  

{/* <TableContainer component={Paper} >
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
        </TableContainer> */}


    </Box>
    
   );
 };
 
 export default List;