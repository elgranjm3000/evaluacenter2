import axios from 'axios';
axios.defaults.baseURL = "https://backednodechile.onrender.com";
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
 axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
 

export const login = async (email, password) => {
    const response = await axios.post(`/api/login`, { email: email, password: password });     
    return response;
  };
  
  export const getMyEvaluation = async (userId,token) => {
      const response = await axios.get(`/api/my-evaluations`, 
      {
        params: {
        user_id: userId,
        account_id: '1'
      },
      headers: {
        Authorization: `${token}`
      }
    });     

    return response;
  };