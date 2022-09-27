import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { login } from "../../api/users/usersApi";
import { Link } from 'react-router-dom';
import { Button } from '../../components/button/Button.js';
import '../../styles/login.scss';

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // eslint-disable-next-line
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
                console.log(authorizedUser)
                if (!authorizedUser.detail) {
                    navigate('/logged-area')
                }
            })
            .catch((err) => {
                setErrorLogin(err);
                console.log(err)
            });
    };

    const handleClick = (e) => {
        e.preventDefault();
        userLogin(email, password)
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
                        />
                        <input
                            type="text"
                            placeholder="Digite sua senha"
                            onChange={handleInputPassword}
                            value={password}
                        />
                        <div>
                            <Button type="submit" disabled={!password || !email}>Entrar</Button>
                        </div>
                        <legend><Link to={'/register'}>Cadastre-se</Link></legend>
                    </form>
                </div>
            </main>
        </div>
    )
}