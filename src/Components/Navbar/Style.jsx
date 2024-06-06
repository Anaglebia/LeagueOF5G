import styled from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100vh;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 0 16px 16px 0;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 1000;

  img {
    width: 90%;
    margin-top: auto;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;

    li {
     margin: 10% 0 0;
      margin-bottom: 15px;
      display: flex;
      align-items: center;

      a {
        text-decoration: none;
        color: #2E14A2;
        font-size: 1.2em;
        display: flex;
        align-items: center;

    svg {
          margin-right: 10px; /* Espaçamento entre o ícone e o texto */
        }

        &:hover {
          color: #195aa0;
        }
      }
    }
  }
  
`;
