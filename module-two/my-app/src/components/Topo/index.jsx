import React, { useState } from 'react';
import Button from '../Button';
import Container from '../Container';
import Logo from '../Logo';
import Modal from '../Modal'
import Menu from '../Menu';
import './style.scss';

const Topo = () =>{

    const[count, setCount] = useState(false);
    const[abrir, setAbrir] = useState(false);

    const handleState = () => {
        if(count == true){
            setCount(false);
        } else{
            setCount(true);
        }
    }
    
    return(
        <>
            <Container>
                <div className="organiza_menu">
                    <Menu className="disable"/>
                    <Logo />
                    <Button className="disable" onClick={()=> setAbrir(true)}>Entrar</Button>
                    {abrir ? <Modal onClose={()=> setAbrir(false)} /> : null}
                    
                    <div className="menuzinho" onClick={handleState}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </Container>
            <div className={`menu-mobile ${ count == true ? 'visible' : '' }`}>
                <div className="menu">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
            
      </>
    );
}
export default Topo;