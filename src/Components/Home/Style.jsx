import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(90deg, rgba(23,18,70,1) 16%, rgba(83,106,173,1) 40%, rgba(118,198,214,1) 65%);
  font-family: Arial, sans-serif;
  position: relative;
  padding: 0;
  margin: 0;

  h1 {
    font-size: 2em;
    color: white;
    text-align: center;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.1);
    z-index: -1;
  }
`;

export const GlassContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 80%;
  padding: 20px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  img {
    width: 100%;
    max-width: 50vw;
    border-radius: 10px;
  }
`;
