import React from 'react';
import ItemMenu from './ItemMenu/ItemMenu';

import './Menu.css';
import logo from '../../assets/imagens/logo.svg';

const Menu = ({ onNavigate }) => {
  return (
    <nav className="menu">
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <ul>
      <ItemMenu
        className="menu-item"
        link="Home"
        href="/"
        useRouter={true}
      />
      <ItemMenu
        className="menu-item"
        link="Cadastro"
        href="/cadastro"
        useRouter={true}
      />
      <ItemMenu
        className="menu-item"
        link="Buscar"
        href="/buscar"
        useRouter={true}
      />
      </ul>
    </nav>
  );
};

export default Menu;
