import React from 'react';
import Container from '../Container';
import Logo from '../Logo';
import Button from '../Button';
import Menu from '../Menu';
import './style.scss';

const Rodape = () =>{
    return(
        <div className="rodape">
            <Container>
                <div className="rodape-parte1 rodape-divs">
                    <h5>@2021 Frontend Mentoring</h5>
                    <Logo/>
                    <Button className="disable">Entrar</Button>
                </div>
                <div className="rodape-parte2 rodape-divs">
                    <Menu/>
                    <div className="rodape-icons">
                        <ul>
                            <li><img src="Facebook.png" alt="Facebook-icon" /></li>
                            <li><img src="LinkedIn.png" alt="LinkedIn-con" /></li>
                            <li><img src="Twitter.png" alt="Twitter-icon" /></li>
                            <li><img src="Youtube.png" alt="Youtube-icon" /></li>
                            <li><img src="Instagram.png" alt="Instagram-icon" /></li>
                        </ul>
                    </div>
                </div>
            </Container>
        </div>

    );
}

export default Rodape;