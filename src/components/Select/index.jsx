import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import {Paper,MenuItem, FormControl, Select, InputLabel, ListItemIcon } from '@mui/material';
import listLanguaje from './languaje'
import { useTranslation } from 'react-i18next';


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
              <FormControl>     
                        <Select
                          labelId="language-label"
                          id="language-select"
                          value={i18n.language}
                          onChange={handleChange}
                          style={{height:'40px',color:"black", borderRadius: '100px'}}
                          
                        >
                              {listLanguaje.map((item) => (
                                  <MenuItem key={item.key} value={item.lang}>
                                  <img src={item.flag} alt={item.language} style={{ width: '20px', marginRight: '5px' }} />
                                 
                                  </MenuItem>
                              ))}
                        </Select>

                      
                  </FormControl>
        
    )
}


export default SelectLanguaje;