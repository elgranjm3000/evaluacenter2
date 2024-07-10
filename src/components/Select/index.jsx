import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import {Paper,MenuItem, FormControl, Select, InputLabel, ListItemIcon } from '@mui/material';
import listLanguaje from './languaje'
import { useTranslation } from 'react-i18next';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined'; // Importa el ícono de comentario con borde
import ForumIcon from '@mui/icons-material/Forum';
import { IconButton } from '@mui/material';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';

const SelectLanguaje = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);


  //const [language, setLanguage] = useState(savedLanguage); // Estado para almacenar el idioma seleccionado

  const handleChange = (event) => {   
    const selectedLanguage = event.target.value;
    localStorage.setItem('language', selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  };

  
   
    return(
      <>
      
      <ForumOutlinedIcon style={{ padding:"18px 1px 10px 10px", fontSize: "20px" }} /> {/* Usando el ícono de comentario con borde */}
      
              <FormControl>     
      

                        <Select
                          labelId="language-label"
                          id="language-select"
                          value={i18n.language}
                          onChange={handleChange}
                          sx={{
                            height: '60px',
                            borderRadius: '100px',
                            border: 'none',
                            '& .MuiOutlinedInput-notchedOutline': {
                              border: 'none',
                            },
                          }}
                          IconComponent={(props) => (
                            <ArrowDropDownIcon {...props} sx={{ color: 'blue' }} />
                          )}
                        >
                              {listLanguaje.map((item) => (
                                  <MenuItem key={item.key} value={item.lang}>
                                        <img src={item.flag} alt={item.language} style={{ width: '20px',height: '20px',marginRight: '5px',borderRadius: '50%'   }} />                                 
                                  </MenuItem>
                              ))}
                        </Select>

                      
                  </FormControl>
                  </>
    )
}


export default SelectLanguaje;