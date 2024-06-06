import styled from "styled-components";

export const Div = styled.div`
width: 80%;
height: 80vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #f6f6f6;
border-radius:10px;
position: relative;
padding: 8px;
margin-left: 10%;
padding: 12rem;
`


export const Form = styled.form`
width: 100%;
display: flex;
flex-direction:column;
padding: 12rem;
justify-content: center;
align-items: center;

`
export const Button= styled.button`
display: inline-block;
margin-top:12px;
align-items: center;
padding: .75rem 1.25rem;
width:250px;
height:40px;
border-radius: 8rem;
color: #fff;
text-transform: uppercase;
font-size: 1rem;
letter-spacing: .15rem;
transition: all .3s;
position: relative;
overflow: hidden;
z-index: 1;
  cursor:pointer;
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #121246;
    border-radius: 8rem;
    z-index: -2;
  }
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: #76c6d6;
    transition: all .3s;
    border-radius: 8rem;
    z-index: -1;
  }
  &:hover {
    color: #fff;
    &:before {
      width: 100%;
    }
  }

`

export const Input= styled.input`
width:500px;
outline-color: #121246;
@media (max-width: 480px) {
  Input {
    width:200px;
  }
}
`

export const Label = styled.label`
color: #121246;
font-weight:700;
`