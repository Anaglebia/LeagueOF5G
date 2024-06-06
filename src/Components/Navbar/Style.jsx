import styled from "styled-components";

export const Nav = styled.nav`
  /* border: solid red; */
  width: 100%;
  height: 10vh;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  img {
    width: 15rem;
  }

  ul {
    /* border: solid green; */
    width: 45%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  li {
    list-style-type: none;
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
  }
`;
