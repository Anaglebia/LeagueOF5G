import styled from 'styled-components';

export const GlassContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;
  margin: auto;
  height: 90vh;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 20px;
  text-align: center;
  

  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    background: none; 
    color:#2e14a2; 
    padding: 0; 
    margin: 0; 
    font-family: "Poppins", sans-serif;
    padding-top:20px;
    font-weight: 700;
  }

  img {
    width: 72%;
    border-radius: 10px;
    mix-blend-mode: screen;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

`;
