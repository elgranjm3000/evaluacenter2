import React, { Component, useState, useEffect } from 'react';

import { Typography, useMediaQuery, useTheme } from '@mui/material';
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
import styles from './style';


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
    <Box style={classes.pandingBox}>
      <Box borderBottom={1} borderColor="divider">
        <Card>
          <Box display="flex" alignItems="center">
            <CardMedia
              component="img"
              image={people_rushing}
              alt="Imagen"
              sx={classes.img}
            />
            <CardContent>
              <Typography variant="subtitle2" component="div" style={classes.contentLetter}>
                {t('discp.steps1')}
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </Box>
      <Box borderBottom={1} borderColor="divider" style={classes.boxMargin}>
        <Card>
          <Box display="flex" alignItems="center">
            <CardMedia
              component="img"
              image={done}
              alt="Imagen"
              sx={classes.img}
            />
            <CardContent>
              <Typography variant="subtitle2" component="div" style={classes.contentLetter}>
                {t('discp.steps2')}
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </Box>

      <Box borderBottom={1} borderColor="divider" style={classes.boxMargin}>
        <Card>
          <Box display="flex" alignItems="center">
            <CardMedia
              component="img"
              image={asking_question}
              alt="Imagen"
              sx={classes.img}
            />
            <CardContent>
              <Typography variant="subtitle2" component="div" style={classes.contentLetter}>
                {t('discp.steps3')}
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </Box>
      <Box borderBottom={1} borderColor="divider" style={classes.boxMargin}>

        <Card>
          <Box display="flex" alignItems="center">
            <CardMedia
              component="img"
              image={online_shopping}
              alt="Imagen"
              sx={classes.img}
            />
            <CardContent>
              <Typography variant="subtitle2" component="div" style={classes.contentLetter}>
                {t('discp.steps4')}
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </Box>

      <FormControlLabel
        control={<Checkbox checked={checked} onChange={handleChange} />}
        label={t('discp.read')}
        style={classes.acceptCheck}
      />
    </Box>
  );

}

export default Instrucction;