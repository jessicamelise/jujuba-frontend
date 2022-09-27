import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { registerNewUser } from "../../api/users/usersApi";
import { Button } from '../../components/button/Button.js';
import '../../styles/register.scss';

export function Register() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    // eslint-disable-next-line
    const [errorLogin, setErrorLogin] = useState("");
    const navigate = useNavigate();

    const handleInputEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleInputPassword = (e) => {
        setPassword(e.target.value);
    };

    const handleInputName = (e) => {
        setName(e.target.value);
    };
    const handleInputRole = (e) => {
        let value = "";
        if (e.target.value === "hall") {
            value = "salao";
        } else {
            value = "cozinha";
        };
        setRole(value);
    };

    const createUser = (userEmail, userPassword, userName, userRole) => {
        const newUser = {
            email: userEmail,
            password: userPassword,
            name: userName,
            role: userRole,
            active: true,
        };
        registerNewUser(newUser)
            .then((response) => {
                if (!response.detail) {
                    navigate('/login')
                }
            })
            .catch((err) => {
                setErrorLogin(err);
                console.log(err)
            });
    };

    const handleClick = (e) => {
        e.preventDefault();
        createUser(email, password, name, role);
    };

    return (
        <div id="register">
            <aside>
                <strong>Faça seu cadastro na Jujuba</strong>
                <p>Aplicação para serviços de restaurantes</p>
            </aside>
            <main>
                <div className="main-content">
                    <form onSubmit={handleClick}>
                        <input
                            type="text"
                            placeholder="Digite seu nome"
                            onChange={handleInputName}
                            value={name}
                        />
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
                        <legend>Escolha sua função:</legend>

                        <div>
                            <div>
                                <input 
                                    type="radio" 
                                    id="kitchen" 
                                    name="role"
                                    value="kitchen" 
                                    onChange={handleInputRole}
                                />
                                <label htmlFor="kitchen">Cozinha</label>
                            </div>
                            <div>
                                <input 
                                    type="radio" 
                                    id="hall" 
                                    name="role" 
                                    value="hall"
                                    onChange={handleInputRole}
                                />
                                <label htmlFor="hall">Salão</label>
                            </div>
                        </div>
                        <div style={{ width: "100%", padding: "0 16px"}}>
                            <Button 
                                type="submit" 
                                disabled={!password || !email || !name || !role}
                            >
                                Cadastrar
                            </Button>
                            <Link to="/login">
                                <Button type="button">Voltar</Button>
                            </Link>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    )
}