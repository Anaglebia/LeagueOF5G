import { Link } from "react-router-dom";


import * as S from "./Style";

const Navbar = () => {
  return (
    <S.Nav>
      <Link to='/'>
      <img src="/src/Components/Navbar/logo.svg" alt="" />
      </Link>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/#">Sobre</Link>
        </li>
        <li>
          <Link to="/#">Contato</Link>
        </li>
         <li>
          <Link to="/#"> Portal do Paciente</Link>
        </li> 
        {/* <li>
          <Link to="/contato"> Contato</Link>
        </li>
        <li>
          <Link to="/paciente"> Portal do Paciente</Link>
        </li> */}
      </ul>
    </S.Nav>
  );
};

export default Navbar;
