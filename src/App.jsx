import { Outlet } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";

import GlobalStyles from "../GlobalStyles";

import '../src/main.css'

function App() {
  return (
    <>
      <GlobalStyles />
      <main className="principal">
        <Navbar />
        <Outlet />
      </main>
    </>
  );
}

export default App;
