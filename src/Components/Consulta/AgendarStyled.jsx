import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 95vh; /* Ajuste a altura aqui */
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 15px;
  padding: 2rem;
  width: 60%;
  margin: auto;
`;

export const Title = styled.h1`
  color: #2e14a2;
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const Label = styled.label`
  color: #2e14a2;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.2);
  color: #140850;
  font-size: 1rem;
  ::placeholder {
    color: #ddd;
  }
`;

export const ErrorMessage = styled.span`
  color: #ff6b6b;
  margin-bottom: 1rem;
`;

export const Button = styled.button`
  --color: #fff;
  --background: #121246;
  --background-hover: #30b2f4;
  --background-left: #acacbd;
  --folder: #F3E9CB;
  --folder-inner: #BEB393;
  --paper: #FFFFFF;
  --paper-lines: #BBC1E1;
  --paper-behind: #E1E6F9;
  --pencil-cap: #fff;
  --pencil-top: #275EFE;
  --pencil-middle: #fff;
  --pencil-bottom: #5C86FF;
  align-items: center;
  --shadow: rgba(13, 15, 25, 0.2);
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  padding: 17px 29px 17px 69px;
  transition: background 0.3s;
  color: var(--color);
  background: var(--bg, var(--background));
  width: 50%;
  margin: auto;
  margin-top: 0,5rem;
   

  & > div {
    top: 0;
    left: 0;
    bottom: 0;
    width: 50px;
    position: absolute;
    overflow: hidden;
    border-radius: 5px 0 0 5px;
    background: var(--background-left);
  }

  & > div .folder {
    width: 23px;
    height: 27px;
    position: absolute;
    left: 15px;
    top: 13px;
  }

  & > div .folder .top {
    left: 0;
    top: 0;
    z-index: 2;
    position: absolute;
    transform: translateX(var(--fx, 0));
    transition: transform 0.4s ease var(--fd, 0.3s);
  }

  & > div .folder .top svg {
    width: 24px;
    height: 27px;
    display: block;
    fill: var(--folder);
    transform-origin: 0 50%;
    transition: transform 0.3s ease var(--fds, 0.45s);
    transform: perspective(120px) rotateY(var(--fr, 0deg));
  }

  & > div .folder:before, & > div .folder:after, & > div .folder .paper {
    content: "";
    position: absolute;
    left: var(--l, 0);
    top: var(--t, 0);
    width: var(--w, 100%);
    height: var(--h, 100%);
    border-radius: 1px;
    background: var(--b, var(--folder-inner));
  }

  & > div .folder:before {
    box-shadow: 0 1.5px 3px var(--shadow), 0 2.5px 5px var(--shadow), 0 3.5px 7px var(--shadow);
    transform: translateX(var(--fx, 0));
    transition: transform 0.4s ease var(--fd, 0.3s);
  }

  & > div .folder:after, & > div .folder .paper {
    --l: 1px;
    --t: 1px;
    --w: 21px;
    --h: 25px;
    --b: var(--paper-behind);
  }

  & > div .folder:after {
    transform: translate(var(--pbx, 0), var(--pby, 0));
    transition: transform 0.4s ease var(--pbd, 0s);
  }

  & > div .folder .paper {
    z-index: 1;
    --b: var(--paper);
  }

  & > div .folder .paper:before, & > div .folder .paper:after {
    content: "";
    width: var(--wp, 14px);
    height: 2px;
    border-radius: 1px;
    transform: scaleY(0.5);
    left: 3px;
    top: var(--tp, 3px);
    position: absolute;
    background: var(--paper-lines);
    box-shadow: 0 12px 0 0 var(--paper-lines), 0 24px 0 0 var(--paper-lines);
  }

  & > div .folder .paper:after {
    --tp: 6px;
    --wp: 10px;
  }

  & > div .pencil {
    height: 2px;
    width: 3px;
    border-radius: 1px 1px 0 0;
    top: 8px;
    left: 105%;
    position: absolute;
    z-index: 3;
    transform-origin: 50% 19px;
    background: var(--pencil-cap);
    transform: translateX(var(--pex, 0)) rotate(35deg);
    transition: transform 0.4s ease var(--pbd, 0s);
  }

  & > div .pencil:before, & > div .pencil:after {
    content: "";
    position: absolute;
    display: block;
    background: var(--b, linear-gradient(var(--pencil-top) 55%, var(--pencil-middle) 55.1%, var(--pencil-middle) 60%, var(--pencil-bottom) 60.1%));
    width: var(--w, 5px);
    height: var(--h, 20px);
    border-radius: var(--br, 2px 2px 0 0);
    top: var(--t, 2px);
    left: var(--l, -1px);
  }

  & > div .pencil:before {
    -webkit-clip-path: polygon(0 5%, 5px 5%, 5px 17px, 50% 20px, 0 17px);
    clip-path: polygon(0 5%, 5px 5%, 5px 17px, 50% 20px, 0 17px);
  }

  & > div .pencil:after {
    --b: none;
    --w: 3px;
    --h: 6px;
    --br: 0 2px 1px 0;
    --t: 3px;
    --l: 3px;
    border-top: 1px solid var(--pencil-top);
    border-right: 1px solid var(--pencil-top);
  }

  &:before, &:after {
    content: "";
    position: absolute;
    width: 10px;
    height: 2px;
    border-radius: 1px;
    background: var(--color);
    transform-origin: 9px 1px;
    transform: translateX(var(--cx, 0)) scale(0.5) rotate(var(--r, -45deg));
    top: 26px;
    right: 16px;
    transition: transform 0.3s;
  }

  &:after {
    --r: 45deg;
  }

  &:hover {
    --cx: 2px;
    --bg: var(--background-hover);
    --fx: -40px;
    --fr: -60deg;
    --fd: .15s;
    --fds: 0s;
    --pbx: 3px;
    --pby: -3px;
    --pbd: .15s;
    --pex: -24px;
  }
`;
