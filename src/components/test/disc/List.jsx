import React, { useState, useEffect } from 'react';
import { getMyEvaluationDisc } from '../../../api/api';
import './App.css';
import { Box, LinearProgress, Typography, useMediaQuery, useTheme } from '@mui/material';
import styles from './style';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import DndContext from './DndContext';
import DroppableList from './DroppableList';

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

const List = ({ profileData, steps, valueProgress }) => {
  const [items, setItems] = useState([]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = styles(isMobile);
  const { t, i18n } = useTranslation();
  const { instance } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      if (profileData && profileData.userInfo.user_id) {
        try {
          const savedLanguage = localStorage.getItem('language');
          const response = await getMyEvaluationDisc(profileData.jwt_token, instance, savedLanguage);
          const numericSteps = Number(steps);

          console.log(response.data.questions[numericSteps].answers);
          setItems(response.data.questions[numericSteps].answers);
        } catch (error) {
          // Manejo de errores
        }
      }
    };
    fetchData();
  }, [profileData, steps, i18n.language]);

  return (
    <DndContext>
      <div>
        <Typography variant="h6" gutterBottom style={classes.moreDescription}>
          {(steps + 1) * 4} de 24
        </Typography>
        <ProgressBar value={valueProgress} />
      </div>
      <Typography variant="h6" gutterBottom style={classes.moreDescription}>
        {t('more')}
      </Typography>
      <DroppableList items={items} setItems={setItems} />
      <Typography variant="h6" gutterBottom style={classes.moreDescription}>
        {t('minus')}
      </Typography>
    </DndContext>
  );
};

export default List;
