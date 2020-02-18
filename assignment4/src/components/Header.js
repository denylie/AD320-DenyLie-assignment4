import React from 'react';
import './Header.css';
import logo from '../assets/logo.jpg';

function Header () {
   return(
         <header className="Header">
            <img className="h-img" src={logo} alt="logo"/>
            <h1 className="h-h1">Have a Beer While You Browse</h1>
         </header>
   );
}
 
export default Header;