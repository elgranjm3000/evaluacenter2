import React, { useState, useEffect } from 'react';
import { getMyEvaluation } from '../api/api';

const ListTask = ({ profileData, onLogout }) => {
  const [listTask, setListTask] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      alert("no detecto profile");
      

      if (profileData && profileData.userInfo.user_id) {
        alert("profile");
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

  return (
    <div>
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
    </div>
  );
};

export default ListTask;