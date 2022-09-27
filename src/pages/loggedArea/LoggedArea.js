import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/button/Button.js';
import { useLogin } from '../../hooks/useLogin';
import '../../styles/loggedArea.scss';
import { Employees } from "./Employees.js";
import { Menu } from "./Menu.js";

export function LoggedArea() {
    const navigate = useNavigate();
    const { user, setUser } = useLogin();
    const [ navItem, setNavItem ] = useState(1);

    const logout = () => {
        setUser({});
        navigate('/');
    };

    const handleChangeNavItem = (num) => {
        setNavItem(num);
    };

    return (
        <div>
            <nav id="nav">
                <div className="nav-items">
                    <div className="nav-item-app-name">
                        <p>Jujuba</p>
                    </div>
                    <div>
                        <p>Bem vindo(a) {user.name}</p>
                    </div>
                    <div>
                        <Button type="button" onClick={logout}>Sair</Button>
                    </div>
                </div>
                <div className="nav-menus">
                    <p 
                        onClick={() => handleChangeNavItem(1)} 
                        className={navItem === 1? 'current-nav-item' : ''}
                    >
                        Colaboradores
                    </p>
                    <p 
                        onClick={() => handleChangeNavItem(2)} 
                        className={navItem === 2? 'current-nav-item' : ''}
                    >
                        Menu
                    </p>
                </div>
            </nav>
            <main>
                {navItem === 1 && 
                    <Employees />
                }
                {navItem ===  2 &&
                    <Menu />
                }
            </main>
        </div>
    )
}