import React from 'react';
import './style.scss';

const Button = (props) =>{
  const {className} = props;

    return(
        <div className={`acao ${className}`}>
          <button className="btn">Entrar</button>
        </div>
    );
}
export default Button;