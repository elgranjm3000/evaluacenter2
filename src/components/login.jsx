import React, {useState,useEffect } from 'react';
import { Container, Grid, Typography, TextField, Button, Link, Fade } from '@mui/material';
import SelectLanguaje from './Select/index'
import { useTranslation } from 'react-i18next';
import WelcomeScreen from './Welcome/WelcomeScreen';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Login = ({handleLogin,onCheckout,isLoggedIn}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showWelcome, setShowWelcome] = useState(true);
    const [visible, setVisible] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
        //onCheckout() 
    }
    
        return (
         
          <div>
          {showWelcome ? (
            <WelcomeScreen />
          ) : (
              <Container  maxWidth={isMobile ? 'xs' : 'sm'} style={{ marginTop: '2rem' }}>     
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
                                  Evaluacenter
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
                                      style: { color: '#ffffff' }, // Color del placeholder
                                    }}
                                    InputProps={{
                                      style: { color: '#ffffff', background: 'none' }, // Color del texto
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
                                      style: { color: '#ffffff' }, // Color del placeholder
                                    }}
                                    InputProps={{
                                      style: { color: '#ffffff', background: 'none' }, // Color del texto
                                    }}
                                  />
                                  <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    style={{ backgroundColor: '#51b198' }}
                                  >
                                    {t('login')}
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

export default Login;
