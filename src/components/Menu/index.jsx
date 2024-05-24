import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import {Paper,MenuItem, FormControl, Select, InputLabel, ListItemIcon,Grid, Menu, Fade, Backdrop,Drawer, List, ListItem, ListItemText,Popover } from '@mui/material';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import IconButton from '@mui/material/IconButton';
import SelectLanguaje from '../Select/index'
import { useTranslation } from 'react-i18next';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import style from './style'


const menu = ({handleLogout}) => {
// Recuperar el objeto de localStorage  {profileData.userInfo.first_name} {profileData.userInfo.last_name}
const profileData = JSON.parse(localStorage.getItem('profileData'));

const { t } = useTranslation();

const [anchorEl, setAnchorEl] = useState(null);
const [open, setOpen] = useState(false);
const [drawerStyle, setDrawerStyle] = useState({});

const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
  const buttonRect = event.currentTarget.getBoundingClientRect();
    setDrawerStyle({
      top: buttonRect.top,
      left: buttonRect.left,
      transform: 'translateX(0)', // Asegura que el Drawer no se mueva al abrir
    });
  setOpen(true);

};

const handleClose = () => {
  setAnchorEl(null);
  setOpen(false);

};
const handleToggleDrawer = (open) => (event) => {
    // Evitar que el evento onClick en el Drawer cierre el Drawer
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
  };
 
return ( 
    <Box style={{margin:0}}>
        <TableContainer component={Paper} style={style.tableContainer}>
            <Table style={{ fontSize:'1rem'  }}>
                <TableHead>
                <TableRow>
                    <TableCell>
                        <Box display="flex" alignItems="center" justifyContent="space-between">   
                            <IconButton color="inherit" onClick={handleClick}>
                                <MenuIcon style={style.menuIcon} />
                            </IconButton>
                            <Backdrop open={open} onClick={handleClose} style={{ zIndex: 1 }} />

                            <Drawer 
                                    anchor="left"
                                    open={open}
                                    onClose={handleClose}
                                    ModalProps={{
                                    keepMounted: true, // Mejora el rendimiento al no desmontar el componente
                                    }}
                                    PaperProps={{
                                    style: { ...style.drawer, ...drawerStyle },
                                    }}                          
                            >
                                        <List>
                                        <ListItem button onClick={handleLogout}>
                                            <ListItemText primary="Cerrar sesión" />
                                        </ListItem>
                                        <ListItem button onClick={handleToggleDrawer(false)}>
                                            <ListItemText primary="Opción 2" />
                                        </ListItem>
                                        <ListItem button onClick={handleToggleDrawer(false)}>
                                            <ListItemText primary="Opción 3" />
                                        </ListItem>
                                        </List>
                        </Drawer>
                            <Box flexGrow={1} textAlign="center">
                                    <Typography variant="h5" style={style.textStyle}>{t('headerMyTest')}</Typography> 
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