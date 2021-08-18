import React, { useState } from 'react';
import Button from '../Button';
import Container from '../Container';
import Logo from '../Logo';
import Menu from '../Menu';
import './style.scss';

const Topo = () =>{

    const[count, setCount] = useState(false);

    const handleState = () =>{
        if(count == true){
            setCount(false);
        } else{
            setCount(true);
        }
    }
    
    return(
        <div>
            <Container>
                <div className="organiza_menu">
                    <Menu className="disable"/>
                    <Logo />
                    <Button className="disable"/>
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
      </div>
    );
}
export default Topo;