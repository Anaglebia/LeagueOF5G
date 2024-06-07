import { Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import Imagem from "../Navbar/logo.svg";

import * as S from "./Style";
import {
  FaHome,
  FaUserPlus,
  FaInfo,
  FaPhone,
  FaStethoscope,
  FaCalendarCheck,
} from "react-icons/fa"; // Exemplo de importação de ícones

const Navbar = () => {
  return (
    <S.Nav>
      <ul>
        <li>
          <UserButton />
        </li>
        <li>
          <Link to="/">
            <FaHome /> Home
          </Link>
        </li>


        <SignedIn>
          <li>
            <Link to="/cadastro">
              <FaStethoscope />
              Perfil
            </Link>
          </li>

          <li>
            <Link to="consultas">
              <FaCalendarCheck /> Consultas
              <ul>
                <li><Link to="/Agendar">Agendar</Link></li>
                <li><Link to="/Remarcar">Remarcar</Link></li>
                <li><Link to="/Cancelar">Cancelar</Link></li>
                <li><Link to="/Relatório">Relatório</Link></li>
              </ul>
            </Link>
          </li>
        </SignedIn>
        <li>
          <Link to="/#">
            <FaInfo /> Sobre
          </Link>
        </li>

        <li>
          <Link to="/#">
            <FaPhone /> Contato
          </Link>
        </li>

        <li>
          <SignedOut>
            <li>
              <SignInButton />
            </li>
          </SignedOut>
        </li>
      </ul>

      <S.DivImg>
        <img src={Imagem} alt="logo" />
      </S.DivImg>
    </S.Nav>
  );
};

export default Navbar;
