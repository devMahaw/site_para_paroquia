import { createGlobalStyle } from "styled-components";

export const colors = {
  brown: "#B77409",
  black: "#000000",
  gray: "#F1F1F2 ",
  darkGray: "#868686",
  white: "#FFFFFF",
  yellow: "#FFC42E ",
  blue: "#3998C7",
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
    scrollbar-color: ${colors.yellow} transparent;
    text-decoration: none;
  }

  body {
    background-color: ${colors.gray};
    color: ${colors.black};
  }

  button {
    cursor: pointer;
  }
`;
