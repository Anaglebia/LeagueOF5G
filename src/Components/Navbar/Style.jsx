import styled from "styled-components";

export const Nav = styled.nav`
  width: 20%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ul {
    margin-top: 2rem;
    height: 35%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  ul > li {
    padding-left: 1rem;
  }

  a {
    text-decoration: none;
    color: #2e14a2;
    font-size: 1.2em;
    display: flex;
    align-items: center;
  }

  li {
    list-style-type: none;
  }
`;

export const DivImg = styled.div`
  img {
    width: 60%;
  }
`;
