
import { Outlet } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";

import GlobalStyles from "../GlobalStyles";


function App() {
  return (
    <>
      <GlobalStyles />
      <div>

      <Navbar />
      <Outlet />
      </div>
      
    </>
  );
}

export default App;
