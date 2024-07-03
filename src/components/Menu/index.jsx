import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import {Divider, Paper,MenuItem, FormControl, Select, InputLabel, ListItemIcon,Grid, Menu, Fade, Backdrop,Drawer, List, ListItem, ListItemText,Popover,Collapse } from '@mui/material';
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
import StoreIcon from '@mui/icons-material/Store';
import logo from '../../assets/imgLogo.png'
import people from '../../assets/people.png'
import TaskIcon from '@mui/icons-material/Task';
import {  Link } from 'react-router-dom';
import { Link as MuiLink } from '@mui/material';
import { GridView,Apartment, ExpandLess, ExpandMore } from '@mui/icons-material';


const menu = ({handleLogout,titleFist}) => {
// Recuperar el objeto de localStorage  
const profileData = JSON.parse(localStorage.getItem('profileData'));
const firstName = profileData?.userInfo?.first_name || 'Demo';
const lastName = profileData?.userInfo?.last_name || 'User';

const { t } = useTranslation();

const [anchorEl, setAnchorEl] = useState(null);
const [open, setOpen] = useState(false);
const [drawerStyle, setDrawerStyle] = useState({});
const [submenuOpen, setSubmenuOpen] = useState(false); // Estado para el submenú

const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
  const buttonRect = event.currentTarget.getBoundingClientRect();
    setDrawerStyle({    
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


  const handleSubmenuClick = () => {
    setSubmenuOpen(!submenuOpen); // Toggle del submenú
  };
 
return ( 
    <Box style={{margin:0}} >
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
                                    keepMounted: true, 
                                    }}
                                    PaperProps={{
                                    style: { ...style.drawer, ...drawerStyle },
                                    }}                          
                            >
                                        <List>
                                                <ListItem>
                                                    <img src={logo}></img><img src={people}></img>
                                                </ListItem>
                                                <ListItem button >
                                                    <IconButton color="inherit"><GridView style={style.menuFront} /></IconButton> <ListItemText primary="Escritorio" />
                                                </ListItem>
                                                
                                                <ListItem button onClick={handleSubmenuClick}>
                                                    <IconButton color="inherit"><Apartment style={style.menuFront} /></IconButton> 
                                                    <ListItemText primary="Mi empresa" />
                                                    {submenuOpen ? <ExpandLess /> : <ExpandMore />}
                                                </ListItem>
                                              <Collapse in={submenuOpen} timeout="auto" unmountOnExit>
                                                <List component="div" disablePadding style={{"marginLeft":"20px"}}>
                                                  <ListItem button component={Link} to="/subtask1">
                                                    <ListItemText primary="Mis comunicaciones" />
                                                  </ListItem>
                                                  <ListItem button component={Link} to="/task">
                                                    <ListItemText primary="Mis evaluaciones" />
                                                  </ListItem>
                                                </List>
                                              </Collapse>
                                                <ListItem button onClick={handleLogout}>
                                                    <IconButton color="inherit"><ExitToAppIcon style={style.menuFront} /></IconButton> <ListItemText primary="Salir " />
                                                </ListItem>
                                                <Divider style={style.divider} />

                                                <ListItem button onClick={handleLogout}>
                                                    {`${firstName} ${lastName}`}
                                                </ListItem>
                                                
                                        </List>
                        </Drawer>
                        <Box flexGrow={1} textAlign="center" style={{marginTop:"1px"}}>
                                    <Typography variant="h5" style={style.textStyle}>{titleFist}</Typography> 
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