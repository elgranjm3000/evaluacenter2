import React, { useState } from 'react';
import CircularSlider from '@fseehawer/react-circular-slider';
import { Typography } from '@mui/material';

const Radars = () => {
  const labels = [0.5,1,1.5,2.5,3,3.5,4.5,5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10];
  const circularPickerNumber = [
    { key: '1', number: '10/0', right: 101, top: 5 },
    { key: '2', number: 0.5, right: 70, top: 10 },
    { key: '3', number: 1, right: 45, top: 25 },
    { key: '4', number: 1.5, right: 22, top: 47 },
    { key: '5', number: 2, right: 10, top: 75 },
    { key: '6', number: 2.5, right: 5, top: 104 },
    { key: '7', number: 3, right: 10, top: 135 },
    { key: '8', number: 3.5, right: 23, top: 160 },
    { key: '9', number: 4, right: 47, top: 183 },
    { key: '10', number: 4.5, right: 72, top: 198 },
    { key: '11', number: 5, right: 107, top: 205 },
    { key: '12', number: 5.5, right: 138, top: 198 },
    { key: '13', number: 6, right: 168, top: 183 },
    { key: '14', number: 6.5, right: 185, top: 160 },
    { key: '15', number: 7, right: 205, top: 135 },
    { key: '16', number: 7.5, right: 202, top: 104 },
    { key: '17', number: 8, right: 205, top: 75 },
    { key: '18', number: 8.5, right: 183, top: 47 },
    { key: '19', number: 9, right: 170, top: 25 },
    { key: '20', number: 9.5, right: 137, top: 10 },
  ]
  const [value, setValue] = useState(0);

  const radius = 400;
  const center = radius / 2;
  const labelRadius = radius / 2.2;

  return (
    <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <CircularSlider
        width={radius} // Ancho del slider
        label="Points"
        min={0}
        max={10}
        dataIndex={2}
        onChange={value => { setValue(value); }}
        initialValue={0}
        knobPosition="top" // Posición del botón
        trackColor="#ddd" // Color de la pista
        labelColor="#005a58"
        knobColor="#005a58"
        progressColorFrom="#00bfbd"
        progressColorTo="#009c9a"
        progressSize={10} // Tamaño del progreso      
        knobSize={32} // Tamaño del botón
        appendToValue=" " // Agrega un espacio después del valor      
        trackSize={8} // Tamaño de la pista
        data={labels}

      />
      
    
    </div>
  );
};

const styles = {
 
  circularPickerWrapper: {
    borderRadius: 110,
    width: 220,
    height: 220,
    borderWidth: 2,
    position: 'absolute',
    borderColor: "#e7eaec",
    color:"black"
  },
  
}
export default Radars;
