import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import {Paper,MenuItem, FormControl, Select, InputLabel, ListItemIcon } from '@mui/material';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import LanguageIcon from '@mui/icons-material/Language'; 
import Badge from '@mui/material/Badge';
import Alert from '@mui/material/Alert';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import IconButton from '@mui/material/IconButton';
import SelectLanguaje from '../Select/index'
import { useTranslation } from 'react-i18next';


const menu = ({handleLogout}) => {
// Recuperar el objeto de localStorage
const profileData = JSON.parse(localStorage.getItem('profileData'));

const { t } = useTranslation();

 
return ( 
    <Box style={{margin:0}}>
        <TableContainer component={Paper} style={{ backgroundColor: "#5b9bd5", margin: 0 }}>
            <Table style={{ fontSize:'1rem'  }}>
                <TableHead>
                <TableRow>
                    <TableCell style={{ color: "#ffffff",width: "20em", }}>{profileData.userInfo.first_name} {profileData.userInfo.last_name}</TableCell>            
                    <TableCell style={{ color: "#ffffff",textAlign:'center'}}>
                        
                    <Alert severity="info" icon={false}>
                            {t('headerMyTest')}
                    </Alert>

                    </TableCell>            
                    <TableCell style={{textAlign:"right"}}>

                    <SelectLanguaje />
                        
    <IconButton color="inherit" onClick={handleLogout}>
            <ExitToAppIcon />
        </IconButton>
                        
                        </TableCell>            
                </TableRow>
                </TableHead>                
            </Table>
        </TableContainer>
    </Box>
    
   );
 };
 
 export default menu;