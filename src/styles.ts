import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const colors = {
  brown: "#B77409",
  black: "#000000",
  gray: "#F1F1F2 ",
  darkGray: "#868686",
  white: "#FFFFFF",
  yellow: "#FFC42E ",
  blue: "#3998C7",
  darkBlue: "#3a83f7",
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

  html {
    scroll-padding-top: 120px;
  }

  body {
    background-color: ${colors.gray};
    color: ${colors.black};
  }

  button {
    cursor: pointer;
  }
`;

export const BigText = styled.h2`
  font-weight: bold;
  font-size: 40px;
  margin: 40px 0px;
`;

export const DefaultText = styled.p`
  font-size: 24px;
  line-height: 30px;

  span {
    color: ${colors.darkGray};
  }
`;

export const SmallText = styled.p`
  line-height: 30px;
  font-size: 18px;
  padding: 10px 0px;

  strong {
    margin: 5px;
  }

  a {
    color: ${colors.darkBlue};
    font-weight: bold;
    margin: 5px;
  }

  span {
    color: ${colors.darkGray};
  }
`;

export const LinksContainer = styled.div`
  height: 100%;
  background: #e2edff;
  display: flex;
  flex-direction: column;
  padding: 25px;
  width: 20%;
  border-radius: 10px;
  margin-left: 100px;
  position: sticky;
  top: 120px;

  h3 {
    font-weight: bold;
    font-size: 20px;
    line-height: 120%;
    margin-bottom: 25px;
  }

  a {
    font-size: 18px;
    line-height: 26px;
    margin-bottom: 15px;
    color: ${colors.darkBlue};

    &:hover {
      color: #551a8b;
    }
  }
`;

export const DotList = styled.li`
  list-style: disc;
  margin-left: 40px;
`;

export const StartImage = styled.img`
  border-radius: 20px;
  margin: 120px 0px;
`;
