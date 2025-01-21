import React, { useState, useEffect } from 'react';
import ItemMenu from './ItemMenu/ItemMenu';
import IconeMenu from './MobileIcon';
import './Menu.css';
import logo from '../../assets/imagens/logo.svg';

const Menu = ({ onNavigate }) => {
  const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 878px)').matches);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia('(max-width: 800px)').matches);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  const handleClick = (href) => {
    onNavigate(href);
    if (isMobile) {
      setMenuOpen(false);
    }
  };

  return (
    <nav className={`menu ${isMobile && menuOpen ? 'active' : ''}`}>
      <div className='logo'>
        <img src={logo} alt="Logo" />
      </div>
      {isMobile && <IconeMenu onClick={toggleMenu} />}
      {isMobile && menuOpen ? (
        <div className="menu-content show-menu">
          <ItemMenu
            className="menu-item"
            link="Home"
            href="/"
            onClick={() => handleClick('/')}
            useRouter={true}
          />
          <ItemMenu
            className="menu-item"
            link="Cadastro"
            href="/cadastro"
            onClick={() => handleClick('/cadastro')}
            useRouter={true}
          />
          <ItemMenu
            className="menu-item"
            link="Buscar"
            href="/buscar"
            onClick={() => handleClick('/buscar')}
            useRouter={true}
          />
        </div>
      ) : !isMobile ? (
        <ul>
          <ItemMenu
            className="menu-item"
            link="Home"
            href="/"
            onClick={() => handleClick('/')}
            useRouter={true}
          />
          <ItemMenu
            className="menu-item"
            link="Cadastro"
            href="/cadastro"
            onClick={() => handleClick('/cadastro')}
            useRouter={true}
          />
          <ItemMenu
            className="menu-item"
            link="Buscar"
            href="/buscar"
            onClick={() => handleClick('/buscar')}
            useRouter={true}
          />
        </ul>
      ) : null}
    </nav>
  );
};

export default Menu;
