import { Link } from 'react-router-dom';
import { Button } from '../../components/button/Button.js';
import '../../styles/register.scss';

export function Register() {
    return (
        <div id="register">
            <aside>
                <strong>Faça seu cadastro na Jujuba</strong>
                <p>Aplicação para serviços de restaurantes</p>
            </aside>
            <main>
                <div className="main-content">
                    <form>
                        <input
                            type="text"
                            placeholder="Digite seu nome"
                        />
                        <input
                            type="text"
                            placeholder="Digite seu e-mail"
                        />
                        <input
                            type="text"
                            placeholder="Digite sua senha"
                        />
                        <legend>Escolha sua função:</legend>

                        <div>
                            <div>
                                <input type="radio" id="kitchen" name="drone" value="kitchen" />
                                <label htmlFor="kitchen">Cozinha</label>
                            </div>
                            <div>
                                <input type="radio" id="hall" name="drone" value="hall" />
                                <label htmlFor="hall">Salão</label>
                            </div>
                        </div>
                        <div style={{ width: "100%", padding: "0 16px"}}>
                            <Button type="submit">Cadastrar</Button>
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