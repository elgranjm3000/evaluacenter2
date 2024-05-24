import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import {Paper,MenuItem, FormControl, Select, InputLabel, ListItemIcon,Grid } from '@mui/material';
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
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import { fontGrid } from '@mui/material/styles/cssUtils';
import GlobalStyles from '../evaluation/GlobalStyles';


const menu = ({handleLogout}) => {
// Recuperar el objeto de localStorage  {profileData.userInfo.first_name} {profileData.userInfo.last_name}
const profileData = JSON.parse(localStorage.getItem('profileData'));

const { t } = useTranslation();

 
return ( 
    <Box style={{margin:0}}>
        <TableContainer component={Paper} style={{ backgroundColor: "write", margin: 0 }}>
            <Table style={{ fontSize:'1rem'  }}>
                <TableHead>
                <TableRow>
                    <TableCell>
                        <Box display="flex" alignItems="center" justifyContent="space-between">   
                            <IconButton color="inherit" onClick={handleLogout}>
                                <MenuIcon style={{color:"#6B9CEB"}} />
                            </IconButton>
                            <Box flexGrow={1} textAlign="center">
                                    <Typography variant="h5" style={{fontFamily:"IBM Plex Sans", fontSize:'14px',fontWeight:"700px",lineHeight:"28px",wordWrap:"break-word",fontWeight:"bold"}}>{t('headerMyTest')}</Typography> 
                            </Box>
                            <SelectLanguaje />                           
                            
                        </Box>
                    </TableCell>            
                         
                 

                   
                        
                           
                </TableRow>
                </TableHead>                
            </Table>
        </TableContainer>
    </Box>
    
   );
 };
 
 export default menu;