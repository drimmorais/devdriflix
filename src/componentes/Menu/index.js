import React from 'react';
import logo from '../../assets/logo.png';
import './Menu.css'
import Button from '../../componentss/Button';
//import ButtonLink from '../../components/ButtonLink';


function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
            <img class="logo" src={logo} />
            </a>

            <Button as="a" href="/" className="ButtonLink">
                Novo Video
            </Button>
        </nav>
    );
}

export default Menu;