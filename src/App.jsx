
import { Outlet } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import GlobalStyles from "../GlobalStyles";


function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
