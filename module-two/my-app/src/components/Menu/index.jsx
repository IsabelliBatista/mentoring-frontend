import React from 'react';
import './style.scss';

const Menu = (props) =>{
  const { className } = props;
    return(
        <div className={`menu ${className}`}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
    );
}
export default Menu;