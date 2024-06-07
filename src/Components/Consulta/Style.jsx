import styled from "styled-components";

export const MainTodasConsultas = styled.main`
  width: 70%;
  height: 80vh;
  margin-top: 5%;
  margin-right: 5%;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 20px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;

  max-height: 80%;
  overflow-x: auto;
  overflow-y: auto;

  h2 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 2rem;
    color: #2e14a2;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border-radius: 10px;
    overflow: hidden;

    width: 100%;
    border-collapse: collapse;
  }

  th,
  td {
    padding: 15px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    text-align: left;
    color: #2e14a2;
  }

  th {
    background: rgba(255, 255, 255, 0.3);
  }

  td {
    background: rgba(255, 255, 255, 0.1);
  }

  tbody tr:last-child td {
    border-bottom: none;
  }
  
`;

