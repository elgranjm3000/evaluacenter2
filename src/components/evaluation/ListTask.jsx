import React, { useCallback,useState, useEffect } from 'react';
import { getMyEvaluation } from '../../api/api';
import Menu from '../Menu/index'
import List from './List';
import {Container,Grid, useMediaQuery, useTheme } from '@mui/material';

const ListTask = ({ profileData, onLogout, onCheckout }) => {
  const [listTask, setListTask] = useState([]);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const telegram = window.Telegram.WebApp;


  useEffect(() => {
    const fetchData = async () => {
      

      if (profileData && profileData.userInfo.user_id) {
        try {
          const response = await getMyEvaluation(profileData.userInfo.user_id, profileData.jwt_token);                    
          console.log(response.data.data);
          setListTask(response.data.data);
        } catch (error) {
          console.log(error);
        }finally {
            setLoading(false); // Marcar que la carga ha finalizado, independientemente del resultado
        }
      }
    };
    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('profileData');
    onLogout();
  };

  const onCheckout3 = () => {
    console.log("aqui");
    telegram.MainButton.text = 'Comenzar la evaluacion';
    telegram.MainButton.show();
  }

  const data = {
    name: 'John Doe',
    age: 30,
};  
  const onSendData = useCallback(() =>{      
      telegram.sendData(JSON.stringify(data));
  },[data])

  useEffect(() => {
    telegram.onEvent('mainButtonClicked',onSendData);
    
    return () => telegram.offEvent('mainButtonClicked',onSendData);
  },[onSendData])

  return (
   /* <div>
      <h1>Listado de tareas</h1>
      <button onClick={handleLogout}>Logout</button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {listTask.map((task) => (
            <div key={task.id}>{task.cache_evaluation_type_main}</div>
          ))}
        </div>
      )}
    </div>*/
    <Container maxWidth={isMobile ? 'xs' : 'sm'} style={{ marginTop: '1rem' }}>     
          <Grid item xs={12}>
            <Menu handleLogout={handleLogout} titleFist="Evaluacion" position="static"/>
            <List listTask={listTask} />
            <button data={data} onClick={onCheckout3}>Logout</button>
        </Grid>
      </Container>
  );
};

export default ListTask;