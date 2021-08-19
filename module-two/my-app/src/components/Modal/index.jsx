import React from 'react';
import './style.scss';

const Modal = () =>{
    return(
        <>
        <div className="modal">
            <div className="card">
                <div className="fechar"></div>
                <h3>Bem vindo</h3>
                <div className="forms">
                <input type="email" name="email" id="email" placeholder="Digite seu email"/>
                <input type="password" name="senha" id="senha" placeholder="Digite sua senha"/>
                <button>Entrar</button>
                </div>
                <div className="redes">
                    <h5>Fazer login com redes sociais</h5>
                    <div className="icons-modal">
                        <ul>
                            <li><img src="Facebook.png" alt="Facebook-icon" /></li>
                            <li><img src="LinkedIn.png" alt="LinkedIn-con" /></li>
                            <li><img src="Twitter.png" alt="Twitter-icon" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>

    );
}

export default Modal;