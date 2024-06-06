import { Link } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import imgError from "./error.jpg"

import * as S from "./Style";

const ErrorPage = () => {
  return (
    <div>
      <Navbar />
      <S.MainErrorPage>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred. </p>
        <img src={imgError} alt="" />
        <S.LinkBackHome>
          <Link to="/">Back to Home</Link>
        </S.LinkBackHome>
      </S.MainErrorPage>
      <Footer />
    </div>
  );
};

export default ErrorPage;
