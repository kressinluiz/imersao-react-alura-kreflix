import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/kreflix_logo.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src={Logo} alt="Logo Kreflix" />
      </a>
      <p>
        Orgulhosamente criado por
        {' '}
        <a href="https://github.com/kressinluiz/">
          Luiz Kressin
        </a>
        {' '}
        durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
