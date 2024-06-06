import { Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

import * as S from "./Style";

const Navbar = () => {
  return (
    <S.Nav>
      <Link to="/">
        <img src="/src/Components/Navbar/logo.svg" alt="" />
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {/* <li>
          <Link to="/login">Login</Link>
        </li> */}

        <SignedIn>
          <li>
            <Link to="/#">Sobre</Link>
          </li>
          <li>
            <Link to="/#">Contato</Link>
          </li>
          <li>
            <Link to="/#"> Portal do Paciente</Link>
          </li>

          <li>
            <Link to="consultas">Consultas</Link>
          </li>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
      </ul>
    </S.Nav>
  );
};

export default Navbar;
