import axios from 'axios';
axios.defaults.baseURL = "https://cors-anywhere.herokuapp.com/http://epp3.ovh:5000";
//axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
 //axios.defaults.headers.common['Content-Type'] = 'application/json';
 


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


  export const getMyEvaluationDisc = async (token) => {
    const response = await axios.get(`/api/disc-evaluation`, 
    {
      params: {
        evaluation_instance_id: '129095',
        locale: 'es'
    },
    headers: {
      Authorization: `${token}`
    }
  });     

  return response;
};




