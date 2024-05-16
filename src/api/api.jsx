import axios from 'axios';
const apiUrl = process.env.REACT_APP_API_URL;


export const login = async (email, password) => {
    const response = await axios.post(`${apiUrl}/api/login`, { email: email, password: password });     
    return response;
  };
  
  export const getMyEvaluation = async (userId,token) => {
      const response = await axios.get(`${apiUrl}/api/my-evaluations`, 
      {
        params: {
        user_id: userId,
        account_id: '1'
      },
      headers: {
        Authorization: `${token}` // Reemplaza 'token' con tu token de autorización
      }
    });     

    return response;
  };