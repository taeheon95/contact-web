import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import "reset-css";
import App from "./App";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    min-width: 600px;
    overflow: hidden;
    overflow-x: auto;
  }
  * {
    box-sizing: border-box;
  }
  button {
    cursor: pointer;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </GlobalStyle>
  </React.StrictMode>,
  document.getElementById("root")
);
