import { Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import Imagem from '../Navbar/logo.svg';

import * as S from "./Style";
import { FaHome, FaUserPlus, FaInfo, FaPhone, FaStethoscope, FaCalendarCheck } from 'react-icons/fa'; // Exemplo de importação de ícones

const Navbar = () => {
  return (
    <S.Nav>
      <ul>
        <SignedOut>
          <li>
            <SignInButton />
          </li>
        </SignedOut>
        <li>
            <UserButton />
          </li>
        <li>
          <Link to="/"><FaHome /> Home</Link>
        </li>
        
        <SignedIn>
          <li>
            <Link to="/cadastro"><FaStethoscope /> Portal do Paciente</Link>
          </li>

          <li>
            <Link to="consultas"><FaCalendarCheck /> Consultas</Link>
          </li>
         
          <li>
            <Link to="/#"><FaInfo /> Sobre</Link>
          </li>
          
          <li>
            <Link to="/#"><FaPhone /> Contato</Link>
          </li>
          
         
        </SignedIn>
      </ul>

      <img src={Imagem} alt="logo" className="nav-logo" />
    </S.Nav>
  );
};

export default Navbar;
