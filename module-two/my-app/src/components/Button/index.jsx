import React from 'react';
import './style.scss';

const Button = (props) =>{
  const {className, children, onClick} = props;

    return(
        <div className={`acao ${className}`} onClick={onClick}>
          <button className="btn">{children}</button>
        </div>
    );
}
export default Button;