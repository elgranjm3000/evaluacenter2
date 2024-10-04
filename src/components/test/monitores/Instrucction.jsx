import React, { Component,useState,useEffect } from 'react'; 

import {  Typography,Fade,useTheme,useMediaQuery } from '@mui/material';
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
import styles from '../../styles';



const Instrucction = () => { 
  
    const { t } = useTranslation();
    const [checked, setChecked] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const classes = styles(isMobile);


    const handleChange = (event) => {
        setChecked(event.target.checked);
    };


return (
  <>
  <Box sx={{ position: 'relative', height: '200px', transition: 'all 0.3s ease' }}>
  <Fade in={true} timeout={1000}>
  <Slide direction="up" in={true} timeout={1000} mountOnEnter unmountOnExit>
            <Box style={classes.pandingBox}>
  
            <Box borderBottom={1} borderColor="divider">
                            <Card style={classes.noBboxShadow}>
                                <Box display="flex" alignItems="center">                                 
                                  <CardContent>
                                    <Typography variant="subtitle2" component="div" style={classes.contentLetter}>
                                    {t('monitores.steps1')}
                                    </Typography>          
                                  </CardContent>
                                </Box>
                          </Card>
            </Box>




            <FormControlLabel
      control={<Checkbox checked={checked} onChange={handleChange} />}
      label={t('monitores.read')}
      style={classes.acceptCheck}
    />
  </Box>
  </Slide>
  </Fade> 
  </Box>
  </>
        ); 
     
} 
  
export default Instrucction;