import React from 'react';
import Button from '../Button'
import Container from '../Container';
import './style.scss';

const Meio = () =>{
    return(
        <Container>
            <div className="organiza_meio">
                <div class="group-text">
                    <h1>Juntos para reinventar.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
                    <br/><br/>
                    mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                    <Button>Cadastre-se</Button>
                </div>

                <div class="group-img">
                    <img src="img-capa.png" alt="imagem de capa" />
                </div>
            </div>
        </Container>
    );
}
export default Meio;