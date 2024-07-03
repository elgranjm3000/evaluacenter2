import React, { Component,useState,useEffect } from 'react'; 

import {  Typography,Fade } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import people_rushing from '../../../assets/test/people-rushing.svg'
import done from '../../../assets/test/done.svg'
import asking_question from '../../../assets/test/asking-question.svg'
import online_shopping from '../../../assets/test/online-shopping.svg'

const Instrucction = () => { 
  
    const { t } = useTranslation();
    const [checked, setChecked] = useState(false);
    const handleChange = (event) => {
        setChecked(event.target.checked);
      };
return (
  <>
  <Fade in={true} timeout={1000}>
            <Box style={{padding:"50px"}}>
  
            <Box borderBottom={1} borderColor="divider">
                            <Card>
                                <Box display="flex" alignItems="center">
                                  <CardMedia
                                    component="img"
                                    image={done}
                                    alt="Imagen"
                                    sx={{ width: 58, height: 58, objectFit: 'cover' }}
                                  />
                                  <CardContent>
                                    <Typography variant="subtitle2" component="div" style={{textAlign:"left"}}>
                                        Esta autoevaluación es para su propio beneficio, sea lo más objetivo posible.
                                    </Typography>          
                                  </CardContent>
                                </Box>
                          </Card>
            </Box>
 <Box borderBottom={1} borderColor="divider" style={{marginTop:'30px'}}>
              <Card>
                    <Box display="flex" alignItems="center">
                      <CardMedia
                        component="img"
                        image={online_shopping}
                        alt="Imagen"
                        sx={{ width: 58, height: 58, objectFit: 'cover' }}
                      />
                      <CardContent>
                        <Typography variant="subtitle2" component="div" style={{textAlign:"left"}}>
                        No hay respuestas correctas ni equivocadas, trate de ser lo mas sincero posible
                        </Typography>          
                      </CardContent>
                    </Box>
              </Card>
</Box>




            <FormControlLabel
      control={<Checkbox checked={checked} onChange={handleChange} />}
      label="He leído y entendido cómo realizar la evaluación"
      style={{color:"black", marginTop:'100px'}}
    />
  </Box>
  </Fade> 
  </>
        ); 
     
} 
  
export default Instrucction;