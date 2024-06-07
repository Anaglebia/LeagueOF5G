import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import Imagem from '../Navbar/Lo.png';
import { FaHome, FaInfo, FaPhone, FaStethoscope, FaCalendarCheck, FaBars } from 'react-icons/fa';
import * as S from './Style';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <S.MenuIcon onClick={toggleMenu}>
        <FaBars />
      </S.MenuIcon>
      <S.Overlay isOpen={isOpen} onClick={closeMenu} />
      <S.Nav isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
        <ul>
          <SignedOut>
            <li>
              <SignInButton />
            </li>
          </SignedOut>
          <SignedIn>
            <li>
              <UserButton />
            </li>
            <li>
              <Link to="/" onClick={closeMenu}><FaHome /> Home</Link>
            </li>
            <li>
              <Link to="/cadastro" onClick={closeMenu}><FaStethoscope /> Perfil do Paciente</Link>
            </li>
            <li>
              <Link to="consultas" onClick={closeMenu}><FaCalendarCheck /> Consultas</Link>
            </li>
            <li>
              <Link to="/#" onClick={closeMenu}><FaInfo /> Sobre</Link>
            </li>
            <li>
              <Link to="/#" onClick={closeMenu}><FaPhone /> Contato</Link>
            </li>
          </SignedIn>
        </ul>
        <img src={Imagem} alt="logo" className="nav-logo" />
      </S.Nav>
    </>
  );
};

export default Navbar;
