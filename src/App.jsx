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

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
