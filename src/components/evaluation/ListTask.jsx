import React, { useState, useEffect } from 'react';
import { getMyEvaluation } from '../../api/api';
import Menu from '../Menu/index'
import List from './List';
import {Container } from '@mui/material';

const ListTask = ({ profileData, onLogout, onCheckout }) => {
  const [listTask, setListTask] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const onCheckoutList = () => {
    onCheckout();
  }

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
    <Container maxWidth="sm">     
        <div>
            <Menu handleLogout={handleLogout} titleFist="Evaluacion" />
            <List listTask={listTask} onCheckoutList={onCheckoutList} />
        </div>
      </Container>
  );
};

export default ListTask;