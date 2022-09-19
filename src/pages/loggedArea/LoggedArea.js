import React from "react";
import { Link } from 'react-router-dom';
import { Button } from '../../components/button/Button.js';

export function LoggedArea() {
    return (
        <div>
            <p>Usuário Com Log in Autorizado</p>
            <Link to={'/login'}><Button type="button">Sair</Button></Link>
        </div>
    )
}