import React, { useState } from 'react';
import './style.scss';

const Modal = (props) =>{
    const {onClose} = props;

    const [fechar, setFechar] = useState(false);


    const handleFechar = () => {
        if(fechar == false){
            setFechar(true)
        }
    }
    

    return(
        <>
        <div className="modal"> 
            <div className="card">
                <div className="fechar" onClick={onClose}>
                    <div className="x1"></div>
                    <div className="x2"></div>
                </div>
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