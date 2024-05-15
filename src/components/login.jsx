import React, {useState } from 'react';
import { Container, Grid, Typography, TextField, Button, Link } from '@mui/material';
import SelectLanguaje from './Select/index'

const Login = ({handleLogin,isLoggedIn}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();       
        handleLogin(username,password)
            
    }
    
        return (
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
                        <Typography variant="h1" component="h1" className="logo-name" style={{marginTop:'20px'}}>
                          <img src="https://ppi.epp3.ovh/bundles/epp3corekernel/images/logo.png" alt="Logo" />
                        </Typography>
                      </div>
                      <Typography variant="h5" component="h5"  style={{color:'#868686'}}>Evaluacenter</Typography>
                      <form  onSubmit={handleSubmit}>
                        <TextField
                          type="text"
                          label="Correo electrónico"
                          variant="outlined"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          fullWidth
                          required
                          style={{marginBottom:'10px'}}
                        />
                        <TextField
                          type="password"
                          label="Contraseña"
                          variant="outlined"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          fullWidth
                          required
                          style={{marginBottom:'10px'}}
                        />
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          fullWidth
                          style={{backgroundColor:'#51b198'}}
                        >
                          Iniciar sesión
                        </Button>
                        <div>
                          <Link href="/resetting/request"><small>¿Olvidaste tu contraseña?</small></Link>
                        </div>
                      </form>
                      <Typography variant="body2" style={{color:'#868686'}}><small>© People Performance International LLC</small></Typography>
                    </div>
                  </Grid>
                </Grid>
              </Container>
            </div>
          </div>   
        );
}

export default Login;
