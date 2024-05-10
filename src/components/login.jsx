import React, {useState, useEffect } from 'react';
import '../assets/style.css';
import '../assets/customEpp3.css';
import '../assets/plugins/iCheck/custom.css';
//import theme from './theme/theme';





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
                <div className="row">
                     <div className="col-md-12 text-center">
                             <div className="lang-selector">
                                selecctor
                                </div>
                     
                     </div>
                </div>
            </div>
            <div className="middle-box text-center loginscreen animated fadeInDown">
            <div>
                <div>
                    <h1 className="logo-name">
                        <img src="https://ppi.epp3.ovh/bundles/epp3corekernel/images/logo.png" alt="Logo" />
                    </h1>
                </div>
                <h2>Evaluacenter</h2>

                <form className="m-t-lg" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Correo electrónico"
                            className="form-control"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Contraseña"
                            className="form-control"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <input
                        type="submit"
                        className="btn btn-primary block full-width m-b"
                        value="Iniciar sesión"
                    />

                    <div className="form-group">
                        <a href="/resetting/request"><small>¿Olvidaste tu contraseña?</small></a>
                    </div>
                </form>

                <p className="m-t"><small>© People Performance International LLC</small></p>
            </div>
        </div>
</div>            

            

        );
}

export default Login;
