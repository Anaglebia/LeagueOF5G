import styled from 'styled-components';

export const Nav = styled.nav`
  width: 20%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 15px;
  padding: 2rem;
  color: #fff;

  ul {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background: none;
  }

  ul > li {
    padding-left: 1rem;
    list-style: none;
    background: none;
  }

  a {
    text-decoration: none;
    color: #2e14a2;
    font-size: 1.2em;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .nav-logo {
    width: 80%;
    margin-top: 100%; 
    align-self: center; 
  }

  &:hover {
    color: #195aa0;
  }

  svg {
    color: #195aa0;
  }

  @media (max-width: 500px) {
    width: 100%;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    z-index: 1000;
    border-radius: 0;
  }

  li {
    list-style-type: none;
  }
`;

export const DivImg = styled.div`
  img {
    width: 100%;
  }
`;

export const MenuIcon = styled.div`
  display: none;
  position: fixed;
  top: 1rem;
  left: 1rem;
  background: #fff;
  padding: 1rem;
  border-radius: 50%;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
  cursor: pointer;
  z-index: 1001;

  @media (max-width: 500px) {
    display: block;
  }
`;

export const Overlay = styled.div`
  display: none;

  @media (max-width: 500px) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }
`;
