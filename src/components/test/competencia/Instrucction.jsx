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
import Slide from '@mui/material/Slide';

const Instrucction = () => { 
  
    const { t } = useTranslation();
    const [checked, setChecked] = useState(false);
    const handleChange = (event) => {
        setChecked(event.target.checked);
      };
return (
  <>
  <Box sx={{ position: 'relative', height: '200px', transition: 'all 0.3s ease' }}>
  <Fade in={true} timeout={1000}>
  <Slide direction="up" in={true} timeout={1000} mountOnEnter unmountOnExit>
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
  </Slide>
  </Fade> 
  </Box>
  </>
        ); 
     
} 
  
export default Instrucction;