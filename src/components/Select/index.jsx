import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import {Paper,MenuItem, FormControl, Select, InputLabel, ListItemIcon } from '@mui/material';
import listLanguaje from './languaje'

const SelectLanguaje = () => {
  const [language, setLanguage] = useState('7'); // Estado para almacenar el idioma seleccionado
  const handleChange = (event) => {
    setLanguage(event.target.value); // Actualiza el estado cuando se selecciona un idioma
  };
   
    return(
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
        
    )
}


export default SelectLanguaje;