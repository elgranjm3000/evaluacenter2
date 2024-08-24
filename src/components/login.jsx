import React, {useState,useEffect } from 'react';
import { Container, Grid, Typography, TextField, Button, Link, Fade } from '@mui/material';
import SelectLanguaje from './Select/index'
import { useTranslation } from 'react-i18next';
import WelcomeScreen from './Welcome/WelcomeScreen';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import styles from './styles'
import logo from '../assets/logo.png'
import { Alert, AlertTitle } from '@mui/material';



const Login = ({handleLogin,onCheckout,isLoggedIn,showError,errorMessage,onSendData}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showWelcome, setShowWelcome] = useState(true);
    const [visible, setVisible] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const classes = styles(isMobile);

    const { t } = useTranslation();

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowWelcome(false);
        setVisible(true);

      }, 5000);
  
      return () => clearTimeout(timer);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();       
        handleLogin(username,password)
        onSendData()
        //onCheckout() 
    }
    
        return (
         
          <div>
             
            {showWelcome ? (
            <WelcomeScreen />
          ) : (            
              <Container  maxWidth={isMobile ? 'xs' : 'sm'} >  
                  <Fade in={visible} timeout={5000}>
                    <div>
                      <div className="gray-bg">
                        <Container>
                          <Grid container justifyContent="center" alignItems="center" spacing={2}>
                            <Grid item xs={12} md={12} style={{textAlign:"right",marginRight: '-40%', marginTop: '-10%'}}>                      
                              <SelectLanguaje /> 
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
                                    <img src={logo} alt="Logo" />
                                  </Typography>
                                </div>
                                {showError && (
                                        <Alert severity="error">
                                          <AlertTitle>Error</AlertTitle>
                                          {errorMessage}
                                        </Alert>
                                )}
                      
                               
                                <Typography variant="h5" component="h5" style={ classes.titleLogin }>
                                  ¡Bienvenido de nuevo!
                                </Typography>
                                <Typography variant="h5" component="h5" style={classes.subTitleLogin}>
                                Ingreso a su cuenta
                                </Typography>
                                <form onSubmit={handleSubmit}>
                                  <TextField
                                    type="text"
                                    label={t('email')}
                                    variant="outlined"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    fullWidth
                                    required
                                    style={{ marginBottom: '10px' }}
                                    InputLabelProps={{
                                      style: { color: '#1A2021' }, // Color del placeholder
                                    }}
                                    InputProps={{
                                      style: { color: '#1A2021', background: 'none' }, // Color del texto
                                    }}
                                  />
                                  <TextField
                                    type="password"
                                    label={t('password')}
                                    variant="outlined"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    fullWidth
                                    required
                                    style={{ marginBottom: '10px' }}
                                    InputLabelProps={{
                                      style: { color: '#1A2021' }, // Color del placeholder
                                    }}
                                    InputProps={{
                                      style: { color: '#1A2021', background: 'none' }, // Color del texto
                                    }}
                                  />
                                  
                                  <div style={classes.urlDivPassword}>
                                    <Link href="/resetting/request" style={classes.passwordLoginRecover}><small>{t('remenberPassword')}</small></Link>
                                  </div>


                                  <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    style={classes.buttonLogin}
                                  >
                                    {t('login')}
                                  </Button>
                                 
                                </form>
                                <Typography variant="body2" style={classes.footer}>
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

export default Login;
