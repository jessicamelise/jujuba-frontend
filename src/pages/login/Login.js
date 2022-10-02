import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { login } from "../../api/login/loginApi";
import { Link } from 'react-router-dom';
import { Button } from '../../components/button/Button.js';
import { useLogin } from '../../hooks/useLogin';
import '../../styles/login.scss';

export function Login() {
    const { setUser } = useLogin();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorLogin, setErrorLogin] = useState("");
    const navigate = useNavigate();

    const handleInputEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleInputPassword = (e) => {
        setPassword(e.target.value);
    };

    const userLogin = (userEmail, userPassword) => {
        login(userEmail, userPassword)
            .then((authorizedUser) => {
                if (!authorizedUser.detail) {
                    setUser(authorizedUser);
                    navigate('/logged-area');
                } else {
                    setErrorLogin("Usuário não autorizado. Verifique seu email e senha.");
                };
            })
            .catch((err) => {
                console.log(err)
                setErrorLogin("Ocorreu um erro, tente novamente.");
            });
    };

    const handleClick = (e) => {
        e.preventDefault();
        userLogin(email, password);
    };

    return (
        <div id="login">
            <aside>
                <strong>Bem vindo(a) à Jujuba</strong>
                <p>Aplicação para serviços de restaurantes</p>
            </aside>
            <main>
                <div className="main-content">
                    <form onSubmit={handleClick}>
                        <input
                            type="text"
                            placeholder="Digite seu e-mail"
                            onChange={handleInputEmail}
                            value={email}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Digite sua senha"
                            onChange={handleInputPassword}
                            value={password}
                            required
                        />
                        <div>
                            <Button type="submit" disabled={!password || !email}>Entrar</Button>
                        </div>
                        <legend><Link to={'/register'}>Cadastre-se</Link></legend>
                        {errorLogin &&
                            <div className="error">
                                <p>{errorLogin}</p>
                            </div>
                        }
                    </form>
                </div>
            </main>
        </div>
    )
}