// eslint-disable-next-line
import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
body {
  background: #fafafa;
  font: 14px Arial, helvetica, sans-serif;
  -webkit-font-smoothing: antialiased !important;
}

`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.colSize};
`;

export const ApplicationButton = styled.button`
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : "#00AE9F"};
  color: ${props => (props.fontColor ? props.backgroundColor : "white")};
  font-weight: bold;
  font-size: 15px;
  border: none;
  padding: 8px;
  border-radius: 6px;
  margin-right: 5px;
  margin-top: 5px;
  border: 2px solid ${props => props.backgroundColor};

  :hover {
    transition: background-color 0.2s ease;
    background-color: #ffffff;
    color: ${props =>
      props.backgroundColor ? props.backgroundColor : "#00AE9F"};
  }

  :disabled {
    background-color: #ad9ea1;
  }
`;

export const ApplicationInput = styled.input`
    padding:10px;
    margin-bottom:10px;
    margin-top:10px;
    width:600px;

    @media (max-width:600px){
        width:100%;
    }
`


export default GlobalStyle;


