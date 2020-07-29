import React from  'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/img/kreflix_logo.png';
import './Menu.css'
import Button from '../Button'
//import ButtonLink from '../ButtonLink';

// não precisa do as={Link} pq o component Button está como Link já

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo}  alt="KressinFlix Logo" />
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>
    ); 
}

export default Menu;