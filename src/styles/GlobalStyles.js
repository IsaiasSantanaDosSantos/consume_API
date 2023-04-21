import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    outline: none;
    box-sizing: border-box;
  }
  body {
    font-family: sans-serif;
    background: ${colors.primaryDarkColor};
    color: ${colors.primaryDarkColor};
  }
  html,body, #root {
    height: 100%;
  }
  button {
    display: block;
    width: auto;
    margin: auto auto 0 0;
    cursor: pointer;
    background: ${colors.primaryColor};
    border: none;
    color: #fff;
    padding: 7px 30px;
    border-radius: 4px;
    font-weight: 700;
    transition: all 500ms ease 0s;

    :hover {
    transform: scale(1.03);
    }
    :active {
    filter: brightness(75%);
    }
  }


  a {
    text-decoration: none;
    color: ${colors.primaryColor};
  }
  ul {
    list-style: none;
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--success {
    background: ${colors.successColor};
  }
  body .Toastify .Toastify__toast-container .Toastify__toast--error {
    background: ${colors.errorColor};
  }
  @media (max-width:576px){
    button {
    margin: auto;
    }
  }

`;

export const Container = styled.section`
  max-width: 785px;
  width: 90%;
  background: #fff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;
