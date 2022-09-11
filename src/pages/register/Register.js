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
                            style={{ marginBottom: "10px" }}
                        />
                        <input
                            type="text"
                            placeholder="Digite seu e-mail"
                            style={{ marginBottom: "10px" }}
                        />
                        <legend style={{ textAlign: "left" }}>Escolha sua função:</legend>

                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <input style={{ height: "30px" }} type="radio" id="kitchen" name="drone" value="kitchen" />
                                <label htmlFor="kitchen">Cozinha</label>
                            </div>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <input style={{ height: "30px" }} type="radio" id="hall" name="drone" value="hall" />
                                <label htmlFor="hall">Salão</label>
                            </div>
                        </div>
                        <div style={{ width: "100%", padding: "0 16px"}}>
                            <Button type="submit">Cadastrar</Button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    )
}