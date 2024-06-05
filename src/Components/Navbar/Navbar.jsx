import { Link } from "react-router-dom";

import * as S from "./Style";

const Navbar = () => {
  return (
    <S.Nav>
      <ul>
        <li>
          <Link to="/"> Sírio Libanês</Link>
        </li>
         <li>
          <Link to="/login"> Login</Link>
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
