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


const menu = ({handleLogout}) => {
// Recuperar el objeto de localStorage
const profileData = JSON.parse(localStorage.getItem('profileData'));
const [language, setLanguage] = useState('7'); // Estado para almacenar el idioma seleccionado
const handleChange = (event) => {
    setLanguage(event.target.value); // Actualiza el estado cuando se selecciona un idioma
  };

  const listLanguaje = [
    {
      language: 'Ingles (English)',
      flag: 'https://evaluacenter.com/bundles/epp3corekernel/images/flags/EN.png',
      key: 1,
    },
    {
      language: 'Italiano (Italiano)',
      flag: 'https://evaluacenter.com/bundles/epp3corekernel/images/flags/IT.png',
      key: 2,
    },
    {
      language: 'Aleman (Deutch)',
      flag: 'https://evaluacenter.com/bundles/epp3corekernel/images/flags/DE.png',
      key: 3,
    },
    {
      language: 'Catalán (Catalá)',
      flag: 'https://evaluacenter.com/bundles/epp3corekernel/images/flags/CA.png',
      key: 4,
    },
    {
      language: 'Francés (Français)',
      flag: 'https://evaluacenter.com/bundles/epp3corekernel/images/flags/FR.png',
      key: 5,
    },
    {
      language: 'Portugués (Portugués)',
      flag: 'https://evaluacenter.com/bundles/epp3corekernel/images/flags/PT.png',
      key: 6,
    },

    {
        language: 'Español',
        flag: 'https://evaluacenter.com/bundles/epp3corekernel/images/flags/ES.png',
        key: 7,
      },
  ]
return ( 
    <Box style={{margin:0}}>
        <TableContainer component={Paper} style={{ backgroundColor: "#5b9bd5", margin: 0 }}>
            <Table style={{ fontSize:'1rem'  }}>
                <TableHead>
                <TableRow>
                    <TableCell style={{ color: "#ffffff",width: "20em", }}>{profileData.userInfo.first_name} {profileData.userInfo.last_name}</TableCell>            
                    <TableCell style={{ color: "#ffffff",textAlign:'center'}}>
                        
                    <Alert severity="info" icon={false}>
                        Mis evaluaciones
                    </Alert>

                    </TableCell>            
                    <TableCell style={{textAlign:"right"}}>

                    <FormControl>
     
      <Select
        labelId="language-label"
        id="language-select"
        value={language}
        onChange={handleChange}
        style={{height:'40px'}}
      >


            {listLanguaje.map((item) => (
                <MenuItem key={item.key} value={item.key}>
                <img src={item.flag} alt={item.language} style={{ width: '20px', marginRight: '5px' }} />
                {item.language}
                </MenuItem>
            ))}
        
       
        
      </Select>
    </FormControl>
                        
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