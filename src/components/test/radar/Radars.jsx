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
        <Typography variant="body1" paragraph style={{textAlign:'left',marginTop:'20px'}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
      </Typography>
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
  const [size, setSize] = useState(400); // Tamaño inicial

  useEffect(() => {
    function handleResize() {
      const newSize = Math.min(window.innerWidth * 0.8, 350);
      setSize(newSize);
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Ajuste inicial

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
    <div>
      <Typography variant="h6" gutterBottom style={classes.moreDescription}>
        
          {(steps + 1) * 4} de 24
        </Typography>
        <ProgressBar value={valueProgress} />
      </div>
      

    <Box style={{ width: size, height: size,  justifyContent: "center", alignItems: "center",    display: "flex", border:"1px solid",     margin: "0 auto" }}>
      
    
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
