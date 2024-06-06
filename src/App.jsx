<<<<<<< HEAD
import { createGlobalStyle } from "styled-components";
import { Outlet } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer"

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  };
`;
=======
import Cadastro from "./Components/Cadastro/Cadastro";
// import Dashboard from "./Components/Dashboard/Dashboard";

>>>>>>> 251916a6b860caab4f8c905977896efa92538fc3

function App() {
  return (
    <>
<<<<<<< HEAD
      <GlobalStyle />
      <Navbar />
      <Outlet />
      <Footer />
=======
    <div>
    <h1>Agendamento</h1>
    <Cadastro/>
    {/* <Dashboard/> */}

    </div>
>>>>>>> 251916a6b860caab4f8c905977896efa92538fc3
    </>
  );
}

export default App;


