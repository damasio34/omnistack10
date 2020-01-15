import React from 'react';

import './global.css';
import './app.css';
import './sidebar.css';
import './main.css';

function App() {

    

    return (
        <div id="app">
            <aside>
                <strong>Cadastrar</strong>
                <form>
                    <div className="input-block">
                        <label htmlFor="github_username">Usuário do github</label>
                        <input name="github_username" id="github_username" required />
                    </div>

                    <div className="input-block">
                        <label htmlFor="techs">Tecnologias</label>
                        <input name="techs" id="techs" required />
                    </div>

                    <div className="input-group">
                        <div className="input-block">
                            <label htmlFor="latitude">Latitude</label>
                            <input name="latitude" id="latitude" required />
                        </div>
                        <div className="input-block">
                            <label htmlFor="longitude">Longitude</label>
                            <input name="longitude" id="longitude" required />
                        </div>
                    </div>
                    <button type="submit">Salvar</button>
                </form>
            </aside>
            <main>
                <ul>
                    <li className="dev-item">
                        <header>
                            <img src="" />
                            <div className="user-info">
                                <strong></strong>
                                <span></span>
                            </div>
                        </header>
                        <p></p>
                        <a href=""></a>
                    </li>
                </ul>
            </main>
        </div>
    );
}

export default App;