import React, { useCallback, useState, useEffect } from 'react';
import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom';
import './App.css'
import Login from './components/login'
import ListTask from './components/evaluation/ListTask';
import { login } from './api/api'
import { Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from './i18n'; // Importa la configuración de i18n
import NotFound from './components/NotFound';

const telegram = window.Telegram.WebApp;

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [profileData, setProfileData] = useState(null);
  const { i18n } = useTranslation();




  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  useEffect(() => {
    telegram.ready();
  })

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn');
    const storedProfileData = localStorage.getItem('profileData');
    if (loggedIn === 'true' && storedProfileData) {
      setIsLoggedIn(true);
      setProfileData(JSON.parse(storedProfileData));
    }
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setProfileData(null);
  };

  const handleLogin = async (email,password) => {
   
  login(email,password)
     .then((response) => {
      console.log(response);
          localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('profileData', JSON.stringify(response.data));
        const storedProfileDataLogin = localStorage.getItem('profileData');

        setProfileData(JSON.parse(storedProfileDataLogin));

          setIsLoggedIn(true);
    })
    .catch((error) => {
      if (error.response && error.response.status === 401) {
        setIsLoggedIn(false);
        console.error('Error 401: No autorizado');
      } else {
        console.error('Otro error:', error);
      }
    });
      
    
  };

  const onCheckout = () => {
    telegram.MainButton.text = 'Comenzar la evaluacion';
    telegram.MainButton.show();
  }


  const onSendData = useCallback(() =>{
    telegram.sendData(JSON.stringify(isLoggedIn))
  },[isLoggedIn])

  useEffect(() => {

    telegram.onEvent('mainButtonClicked',onSendData);
    
    return () => telegram.offEvent('mainButtonClicked',onSendData)
  },[onSendData])

  return (
    <>

    <Router>   
    
      <Routes>
          <Route exact path="/" element={isLoggedIn ? <Navigate to="/task" /> : <Login handleLogin={handleLogin} onCheckout={onCheckout} isLoggedIn={isLoggedIn} />} />
          <Route exact path="/task"
          element={isLoggedIn ? <ListTask profileData={profileData} onLogout={handleLogout} onCheckout={onCheckout} /> : <Navigate to="/" />}
        />
          <Route exact path='*' element={<NotFound/>}></Route>
      </Routes>
    


    </Router>


    </>
  )
}

export default App
