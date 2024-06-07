import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  max-width: 800px;
  margin: 5% auto;
  padding: 2rem;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  margin-bottom: 2rem;
  color: #2e14a2;
  background: none; 
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Fieldset = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  background: none; 

  & > label {
    width: 48%;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color:#2e14a2;
  font-weight: 700;
  background: none; 
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 0.5rem;
  border: none;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.2);
  color: #000; /* Cor do texto digitado */
  font-size: 1rem;
  outline: none;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
`;

export const Button = styled.button`
  padding: 0.75rem 1.25rem;
  margin-top: 1rem;
  border-radius: 8rem;
  border: none;
  background-color: #121246;
  color: #fff;
  font-size: 1rem;
  letter-spacing: 0.15rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color:#30b2f4;
  }
`;

export const ErrorMessage = styled.p`
  color: #ff6b6b;
  font-size: 0.875rem;
  margin-top: -0.5rem;
  margin-bottom: 1rem;
`;
