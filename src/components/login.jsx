import React, { useState } from 'react';
import { Grid, Paper, Typography, TextField, Button, Link, CssBaseline,Alert } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';


const Login = ({handleLogin,isLoggedIn}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();       
        handleLogin(username,password)
            
    }


    
        return (
            
<ThemeProvider theme={theme}>
            <Grid container justifyContent="center" alignItems="center" >
            <Grid item xs={12} sm={8} md={6} lg={4}>
           
                <Paper style={{ padding: 20, textAlign: 'center' }}>
                    <img src="https://evaluacenter.com/bundles/epp3corekernel/images/logo.png" alt="Logo" style={{ marginBottom: 20, maxWidth: '100%' }} />
                    <Typography variant="h2" component="h2">
                            Evaluacenter
                    </Typography>
                    {isLoggedIn !== null && !isLoggedIn && (
  <Alert severity="error">
    Credenciales no válidas.

  </Alert>
)}
                    <form onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            label="Email"
                            variant="outlined"
                            placeholder="Email"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}                            
                            className="form-control"
                        />
                        <TextField
                            fullWidth
                            label="Contraseña"
                            variant="outlined"
                            placeholder="Contraseña"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{ marginBottom: 10 }}
                        />
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            type="submit"
                            style={{ marginBottom: 10 }}
                        >
                            Entrar
                        </Button>
                        <Typography variant="body2">
                            <Link href="/resetting/request">¿Olvidaste tu contraseña?</Link>
                        </Typography>
                    </form>
                </Paper>
            </Grid>
        </Grid>

        </ThemeProvider>

        );
}

export default Login;
