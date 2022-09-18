import { Link } from 'react-router-dom';
import { Button } from '../../components/button/Button.js';
import '../../styles/login.scss';

export function Login() {
    return (
        <div id="login">
            <aside>
                <strong>Bem vindo(a) à Jujuba</strong>
                <p>Aplicação para serviços de restaurantes</p>
            </aside>
            <main>
                <div className="main-content">
                    <form>
                        <input
                            type="text"
                            placeholder="Digite seu e-mail"
                        />
                        <input
                            type="text"
                            placeholder="Digite sua senha"
                        />
                        <div>
                            <Button type="submit">Entrar</Button>
                        </div>
                        <legend><Link to={'/register'}>Cadastre-se</Link></legend>
                    </form>
                </div>
            </main>
        </div>
    )
}