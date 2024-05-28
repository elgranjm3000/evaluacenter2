import React, {useState,useEffect } from 'react';
import { Container, Grid, Typography, TextField, Button, Link, Fade } from '@mui/material';
import SelectLanguaje from '../Select/index'
import { useTranslation } from 'react-i18next';
import WelcomeScreen from '../Welcome/WelcomeScreen';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


const Register = ({handleLogin,onCheckout,isLoggedIn}) => {
    const [username, setUsername] = useState('');
    const [emailRepeat, setEmailRepeat] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);


    const [showWelcome, setShowWelcome] = useState(true);
    const [visible, setVisible] = useState(false);
    const [error, setError] = useState(false);


    const { t } = useTranslation();

    const handleClickShowPassword = () => {
      setShowPassword(!showPassword);
    };

    const handleClickShowPasswordRepeat = () => {
      setShowPasswordRepeat(!showPasswordRepeat);
    };
    
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    }; 
    
    const handleMouseDownPasswordRepeat = (event) => {
      event.preventDefault();
    }; 

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowWelcome(false);
        setVisible(true);

      }, 5000);
  
      return () => clearTimeout(timer);
    }, []);

    const handleEmailChange = (e) => {
      setUsername(e.target.value);
      validateEmails(e.target.value, emailRepeat);
    };
  
    const handleEmailRepeatChange = (e) => {
      setEmailRepeat(e.target.value);
      validateEmails(username, e.target.value);
    };
  
    const validateEmails = (email1, email2) => {
      if (email1 !== email2) {
        setError(true);
      } else {
        setError(false);
      }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();       
        handleLogin(username,password)
        //onCheckout() 
    }
    
        return (
         
          <div>
          {showWelcome ? (
            <WelcomeScreen />
          ) : (
              <Container maxWidth="sm">     
                  <Fade in={visible} timeout={5000}>
                    <div>
                      <div className="gray-bg">
                        <Container>
                          <Grid container justifyContent="center" alignItems="center" spacing={2}>
                            <Grid item xs={12} md={6}>
                              <SelectLanguaje /> {/* Asegúrate de pasar las props necesarias */}
                            </Grid>
                          </Grid>
                        </Container>
                      </div>
                      <div className="middle-box text-center loginscreen animated fadeInDown">
                        <Container>
                          <Grid container justifyContent="center" alignItems="center" spacing={2}>
                            <Grid item xs={12} md={12}>
                              <div>
                                <div>
                                  <Typography variant="h1" component="h1" className="logo-name" style={{ marginTop: '20px' }}>
                                    <img src="https://ppi.epp3.ovh/bundles/epp3corekernel/images/logo.png" alt="Logo" />
                                  </Typography>
                                </div>
                                <Typography variant="h5" component="h5" style={{ color: '#ffffff' }}>
                                      {t('register.welcomeEvaluaCenter')}
                                </Typography>
                                <Typography variant="h2" component="h2" style={{ fontSize: '12px' }}>
                                      {t('register.notePassword')}
                                </Typography>
                                <form onSubmit={handleSubmit}>
                                  <label htmlFor="username" style={{ color: '#ffffff', marginTop: '20px', display: 'block', textAlign:"left" }}>
                                        {t('register.emailUser')}
                                  </label>
                                  <TextField
                                    type="text"
                                    placeholder={t('register.placeHolderEmail')}
                                    variant="outlined"
                                    value={username}
                                    onChange={handleEmailChange}
                                    fullWidth
                                    required
                                    style={{ marginBottom: '10px' }}
                                    InputLabelProps={{
                                      style: { color: '#ffffff' }, // Color del placeholder
                                      shrink: !!username,
                                    }}
                                    InputProps={{
                                      style: { color: '#ffffff', background: 'none' }, // Color del texto
                                    }}
                                    error={error}
                                  />
                                  <label htmlFor="username" style={{ color: '#ffffff', marginTop: '20px', display: 'block', textAlign:"left" }}>
                                      {t('register.emailUser')}
                                  </label>
                                  <TextField
                                    type="text"
                                    placeholder={t('register.confirmUser')}
                                    variant="outlined"
                                    value={emailRepeat}
                                    onChange={handleEmailRepeatChange}
                                    fullWidth
                                    required
                                    style={{ marginBottom: '10px' }}
                                    InputLabelProps={{
                                      style: { color: '#ffffff' }, // Color del placeholder
                                    }}
                                    InputProps={{
                                      style: { color: '#ffffff', background: 'none' }, // Color del texto
                                    }}
                                    error={error}
                                    helperText={error ? t('register.emailsDoNotMatch') : ''}
                                  />

                                  <label style={{ color: '#ffffff', marginTop: '20px', display: 'block', textAlign:"left" }}>
                                      {t('register.passwordNew')}
                                  </label>
                                  <TextField
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder={t('register.keyPasswordNew')}
                                    variant="outlined"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    fullWidth
                                    required
                                    style={{ marginBottom: '10px' }}
                                    InputLabelProps={{
                                      style: { color: '#ffffff' }, // Color del placeholder
                                    }}
                                    InputProps={{
                                      style: { color: '#ffffff', background: 'none' }, // Color del texto
                                      endAdornment: (
                                        <InputAdornment position="end">
                                          <IconButton
                                            aria-label={t('register.togglePasswordVisibility')}
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                          >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                          </IconButton>
                                        </InputAdornment>
                                      ),
                                    }}
                                  />

                                  <label style={{ color: '#ffffff', marginTop: '20px', display: 'block', textAlign:"left" }}>
                                      {t('register.passwordNewRepeat')}
                                  </label>
                                  <TextField
                                    type={showPasswordRepeat ? 'text' : 'password'}
                                    placeholder={t('register.keyPasswordNewRepeat')}
                                    variant="outlined"
                                    value={passwordRepeat}
                                    onChange={(e) => setPasswordRepeat(e.target.value)}
                                    fullWidth
                                    required
                                    style={{ marginBottom: '10px' }}
                                    InputLabelProps={{
                                      style: { color: '#ffffff' }, // Color del placeholder
                                    }}
                                    InputProps={{
                                      style: { color: '#ffffff', background: 'none' }, // Color del texto
                                      endAdornment: (
                                        <InputAdornment position="end">
                                          <IconButton
                                            aria-label={t('register.togglePasswordVisibility')}
                                            onClick={handleClickShowPasswordRepeat}
                                            onMouseDown={handleMouseDownPasswordRepeat}
                                            edge="end"
                                          >
                                            {showPasswordRepeat ? <VisibilityOff /> : <Visibility />}
                                          </IconButton>
                                        </InputAdornment>
                                      ),
                                    }}
                                  />

                                  <label style={{ color: '#ffffff', marginBottom: '20px', display: 'block', textAlign:"left", fontSize:"12.8px" }}>
                                      {t('register.norm')}
                                  </label>

                                  <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    style={{ backgroundColor: '#51b198' }}
                                  >
                                    {t('register.active')}
                                  </Button>
                                  <div>
                                    <Link href="/resetting/request"><small>{t('remenberPassword')}</small></Link>
                                  </div>
                                </form>
                                <Typography variant="body2" style={{ color: '#ffffff' }}>
                                  <small>© People Performance International LLC</small>
                                </Typography>
                              </div>
                            </Grid>
                          </Grid>
                        </Container>
                      </div>
                    </div>
                  </Fade>
              </Container>
          )}
        </div>
        );
}

export default Register;
