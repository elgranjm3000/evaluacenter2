import React, { useState } from 'react';
import CircularSlider from '@fseehawer/react-circular-slider';
import { Typography } from '@mui/material';
import { useMediaQuery, useTheme } from '@mui/material';
import { RoundSlider } from 'mz-react-round-slider';


const Radars = () => {
  const labels = [0,0.5,1,1.5,2.5,3,3.5,4.5,5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10];
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));  

  const [ pointers, setPointers ] = useState([
    {
        value: 0
    }
]);

  return (
    <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50h' }}>
       <RoundSlider
             min={0}
             data={labels}
             textColor={'#8993B7'}
             textFontSize={24}
             textFontFamily={'IBM Plex Sans'}
             enableTicks={true}
             showTickValues={true}
             ticksGroupSize={1}            
             pointers={pointers}
             onChange={setPointers}
             pathStartAngle={ 270 }
             pathEndAngle={ 269.999 }
             ticksColor={ '#efefef' }
             tickValuesColor={ '#6093a3' }
             textPrefix={ ' ' }
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
