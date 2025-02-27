import React, { useCallback, useState, useEffect } from 'react';
import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom';
import './App.css'
import Login from './components/login'
import ListTask from './components/evaluation/ListTask';
import { login } from './api/api'
import { Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Alert, AlertTitle } from '@mui/material';
import i18n from './i18n'; 
import NotFound from './components/NotFound';
import Register from './components/users/Register';
import Test from './components/test/disc/Test';
import DIscObjetivo from './components/test/discObjetivo/DiscObjetivo';
import Radar from './components/test/radar/Index'
import Observadores from './components/test/observadores/Index'
import Radarcompetencia from './components/test/competencia/Index'
import Monitores from './components/test/monitores/Index'
import Motivational from './components/test/motivacionales/Motivational';
import Welfare from './components/test/bienestar/Index'

const telegram = window.Telegram.WebApp;

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [profileData, setProfileData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(''); // Estado para el mensaje de error
  const [showError, setShowError] = useState(false); // Estado para mostrar u ocultar la alerta
  const { i18n } = useTranslation();

  const [themeParams, setThemeParams] = useState({
    bg_color: "#ffffff",
    text_color: "#000000",
    button_color: "#0088cc",
    button_text_color: "#ffffff",
  });



  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  useEffect(() => {


    const theme = telegram.themeParams;

    // Actualizar los parámetros de tema en el estado
   

    telegram.ready();
    telegram.expand();
  })

useEffect(() => {  
    const loggedIn = localStorage.getItem('isLoggedIn');
    console.log(loggedIn);
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
        setShowError(false); // Ocultar el mensaje de error si el login es exitoso

    })
    .catch((error) => {
      if (error.response && error.response.status === 401) {
        console.error('Error 401: No autorizado');
        setIsLoggedIn(false);
        setErrorMessage('Usuario o contraseña incorrectos.'); 
        setShowError(true); 

      } else {
        console.error('Otro error:', error);
        setIsLoggedIn(false);
        setErrorMessage('Ocurrió un error inesperado. Por favor, inténtalo de nuevo.'); 
        setShowError(true); 
      }
    });
      
    
  };






  
  return (
    <>
    
    <Router>   
    
      <Routes>
          <Route exact path="/" element={isLoggedIn ? <Navigate to="/task" /> : <Login handleLogin={handleLogin} isLoggedIn={isLoggedIn} showError={showError} errorMessage={errorMessage}   />} />
          <Route exact path="/task"
          element={isLoggedIn ? <ListTask profileData={profileData} onLogout={handleLogout} telegram={telegram}  /> : <Navigate to="/" />}
        />
          <Route exact path="/register" element={<Register/>}></Route>
          <Route exact path="/disc/:instance" element={isLoggedIn === null ? null : isLoggedIn ? <Test profileData={profileData} onLogout={handleLogout}  />: <Navigate to="/" /> }></Route>
          <Route exact path="/disc-objetivo/:instance" element={isLoggedIn === null ? null : isLoggedIn ? <DIscObjetivo profileData={profileData} onLogout={handleLogout} />: <Navigate to="/" /> }></Route>
          <Route exact path="/radar/:instance" element={isLoggedIn === null ? null : isLoggedIn ? <Radar profileData={profileData} onLogout={handleLogout}  /> : <Navigate to="/" /> }></Route>
          <Route exact path="/radarcompetencia/:instance" element={ isLoggedIn === null ? null : isLoggedIn ? <Radarcompetencia profileData={profileData} onLogout={handleLogout}  /> : <Navigate to="/" /> }></Route>
          <Route exact path="/radar-observadores/:instance" element={ isLoggedIn === null ? null : isLoggedIn ? <Observadores profileData={profileData} onLogout={handleLogout}/> : <Navigate to="/" /> }></Route>
          <Route exact path="/motivational/:instance" element={ isLoggedIn === null ? null : isLoggedIn ? <Motivational profileData={profileData} onLogout={handleLogout} /> : <Navigate to="/" /> }></Route>
          <Route exact path="/welfare/:instance/:type" element={ isLoggedIn === null ? null : isLoggedIn ? <Welfare profileData={profileData} onLogout={handleLogout}  /> : <Navigate to="/" /> }></Route>
          <Route exact path="/monitores/:instance" element={ isLoggedIn === null ? null : isLoggedIn ? <Monitores profileData={profileData} onLogout={handleLogout} /> : <Navigate to="/" /> }></Route>
          
          <Route exact path='*' element={<NotFound/>}></Route>
      </Routes>
    


    </Router>


    </>
  )
}

export default App
