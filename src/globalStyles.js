/* eslint-disable no-unused-vars */
import { SIZE } from "./constants";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    div {
        box-sizing: border-box;
    }
    body{
        font-family: "Poppins-Regular";
        background-color: "#e7e7e7";
    }
`;

export default GlobalStyle;
