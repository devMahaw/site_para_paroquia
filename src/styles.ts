import { createGlobalStyle } from "styled-components";

export const colors = {
  brown: "#B77409",
  black: "#000000",
  gray: "#F1F1F2 ",
  white: "#FFFFFF",
  yellow: "#FFC42E ",
};

export const breakpoints = {
  desktop: "1366px",
  phone: "768px",
};

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
    scrollbar-color: ${colors.gray} transparent;
    scrollbar-width: thin;
    text-decoration: none;
  }

  body {
    background-color: ${colors.gray};
    color: ${colors.black};

    &::-webkit-scrollbar {
      width: 12px; 
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${colors.gray}; 
      border-radius: 6px;
    }

    &::-webkit-scrollbar-track {
      background-color: ${colors.gray};
    }
  }

  button {
    cursor: pointer;
  }
`;
