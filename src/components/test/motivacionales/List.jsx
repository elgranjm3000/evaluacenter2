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
          //const response = await getMyEvaluationDisc(profileData.jwt_token, instance, savedLanguage);
         
          const response = {
            data: {
              questions: [
              {
              answers : [
                  { id: 'evaluationdisc_answer_7_1', text: 'Opcion 1' },
                  { id: 'evaluationdisc_answer_7_2', text: 'Opcion 2' },
                  { id: 'evaluationdisc_answer_7_3', text: 'Opcion 3' },
                  { id: 'evaluationdisc_answer_7_4', text: 'Opcion 4' }
              ]},{
              answers : [
                { id: 'evaluationdisc_answer_7_1', text: 'Opcion 5' },
                { id: 'evaluationdisc_answer_7_2', text: 'Opcion 6' },
                { id: 'evaluationdisc_answer_7_3', text: 'Opcion 7' },
                { id: 'evaluationdisc_answer_7_4', text: 'Opcion 8' }
              ]},{
              answers : [
                { id: 'evaluationdisc_answer_7_1', text: 'Opcion 9' },
                { id: 'evaluationdisc_answer_7_2', text: 'Opcion 10' },
                { id: 'evaluationdisc_answer_7_3', text: 'Opcion 11' },
                { id: 'evaluationdisc_answer_7_4', text: 'Opcion 12' }
              ]},{
              answers : [
                { id: 'evaluationdisc_answer_7_1', text: 'Opcion 13' },
                { id: 'evaluationdisc_answer_7_2', text: 'Opcion 14' },
                { id: 'evaluationdisc_answer_7_3', text: 'Opcion 15' },
                { id: 'evaluationdisc_answer_7_4', text: 'Opcion 16' }
              ]},{
              answers : [
                { id: 'evaluationdisc_answer_7_1', text: 'Opcion 17' },
                { id: 'evaluationdisc_answer_7_2', text: 'Opcion 18' },
                { id: 'evaluationdisc_answer_7_3', text: 'Opcion 19' },
                { id: 'evaluationdisc_answer_7_4', text: 'Opcion 20' }
              ]},{
              answers : [
                { id: 'evaluationdisc_answer_7_1', text: 'Opcion 21' },
                { id: 'evaluationdisc_answer_7_2', text: 'Opcion 22' },
                { id: 'evaluationdisc_answer_7_3', text: 'Opcion 23' },
                { id: 'evaluationdisc_answer_7_4', text: 'Opcion 24' }
              ]}
            ]
              
            }
          };

          
          console.log("data",response.data.questions[0]);

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
