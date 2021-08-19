import React from 'react';
import './style.scss';

const Button = (props) =>{
  const {className, children} = props;

    return(
        <div className={`acao ${className}`}>
          <button className="btn">{children}</button>
        </div>
    );
}
export default Button;