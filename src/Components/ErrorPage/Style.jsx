import styled from "styled-components";

export const MainErrorPage = styled.div`
  /* border: solid purple; */
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* border: solid red; */

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 25%;
  }
`;

export const LinkBackHome = styled.button`
  background-color: #159eec;
  padding: 0.8rem 1rem;
  border-radius: 6px;
  border: none;

  a {
    text-decoration: none;
    color: #fcfefe;

    font-size: 1rem;
  }
`;
