import React, { useState, useEffect } from 'react';
import ItemMenu from './ItemMenu/ItemMenu';
import IconeMenu from './MobileIcon';
import './Menu.css';
import logo from '../../assets/imagens/logo.svg';

const Menu = ({ onNavigate }) => {
  // const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 800px)').matches);
  // const [menuOpen, setMenuOpen] = useState(false);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.matchMedia('(max-width: 800px)').matches);
  //   };

  //   window.addEventListener('resize', handleResize);
    
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  // const toggleMenu = () => {
  //   setMenuOpen(!menuOpen);
  // };

  // {isMobile ? (
  //   <nav className={`menu ${menuOpen ? 'active' : ''}`}>
  //     <div>
  //       <img src={logo} alt="Logo" />
  //     </div>
  //     <IconeMenu onClick={toggleMenu} />
  //     {menuOpen && (
  //       <div className="menu-content show-menu">
  //         <ItemMenu
  //           className="menu-item"
  //           link="Home"
  //           href="/"
  //           useRouter={true}
  //         />
  //         <ItemMenu
  //           className="menu-item"
  //           link="Cadastro"
  //           href="/cadastro"
  //           useRouter={true}
  //         />
  //         <ItemMenu
  //           className="menu-item"
  //           link="Buscar"
  //           href="/buscar"
  //           useRouter={true}
  //         />
  //       </div>
  //     )}
  //   </nav>
  // ) : (
  //   <nav className="menu">
  //     <div>
  //       <img src={logo} alt="Logo" />
  //     </div>
  //     <ul>
  //       <ItemMenu
  //         className="menu-item"
  //         link="Home"
  //         href="/"
  //         useRouter={true}
  //       />
  //       <ItemMenu
  //         className="menu-item"
  //         link="Cadastro"
  //         href="/cadastro"
  //         useRouter={true}
  //       />
  //       <ItemMenu
  //         className="menu-item"
  //         link="Buscar"
  //         href="/buscar"
  //         useRouter={true}
  //       />
  //     </ul>
  //   </nav>
  // )}

  return (
    <>
      <nav className="menu">
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <IconeMenu />
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
    </>
  );
};

export default Menu;
