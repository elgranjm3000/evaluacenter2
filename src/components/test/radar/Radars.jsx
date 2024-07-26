import React, { useState,useEffect } from 'react';
import CircularSlider from '@fseehawer/react-circular-slider';
import { RoundSlider } from 'mz-react-round-slider';
import { Box, LinearProgress, Typography, useMediaQuery, useTheme,Fade } from '@mui/material';
import styles from '../../styles';


const ProgressBar = ({ value }) => {
  // Asegúrate de que el valor sea un número
  const numericValue = Number(value);

  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" value={numericValue} />
      </Box>
    </Box>
  );
};


const Radars = ({ profileData, steps, valueProgress,pointers,setPointers }) => {
  console.log(pointers);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));  
  const classes = styles(isMobile);
  const labels = [0,0.5,1,1.5,2.5,3,3.5,4.5,5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10];

  return (
    <>
    <div>
      <Typography variant="h6" gutterBottom style={classes.moreDescription}>
        
          {(steps + 1) * 4} de 24
        </Typography>
        <ProgressBar value={valueProgress} />
      </div>
      

    <Box style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50h' }}>
      
    
    <RoundSlider
             data={labels}
             textColor={'#8993B7'}
             textFontSize={24}
             textFontFamily={'IBM Plex Sans'}
             enableTicks={true}
             showTickValues={true}
             ticksGroupSize={1}            
             pointers={[{value:pointers.value}]}
             pathStartAngle={ 270 }
             pathEndAngle={ 269.999 }
             ticksColor={ '#efefef' }
             tickValuesColor={ '#6093a3' }
        />

    
    </Box>

   

    </>
  );
};


export default Radars;
