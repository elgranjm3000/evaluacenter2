import axios from 'axios';
//const backendUrl = process.env.REACT_APP_BACKEND_URL;


export const login = async (email, password) => {
    const response = await axios.post("http://epp3.ovh:5000/api/login", { email: email, password: password });     
    return response;
  };
  
  export const getMyEvaluation = async (userId,token) => {
      const response = await axios.get("http://epp3.ovh:5000/api/my-evaluations", 
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