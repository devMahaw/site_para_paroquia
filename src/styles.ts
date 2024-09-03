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
  lightBlue: "#e2edff",
  purple: "#551a8b",
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

export const Container = styled.div`
  display: flex;

  @media (max-width: ${breakpoints.phone}) {
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: ${breakpoints.phone}) and (max-width: ${breakpoints.desktop}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const TextContainer = styled.div`
  width: 80%;

  @media (max-width: ${breakpoints.phone}) {
    width: 90vw;
  }

  @media (min-width: ${breakpoints.phone}) and (max-width: ${breakpoints.desktop}) {
    width: 90vw;
  }
`;

export const LinksContainer = styled.div`
  text-align: center;
  height: 100%;
  background: ${colors.lightBlue};
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

    &:hover,
    &:active {
      color: ${colors.purple};
    }
  }

  @media (max-width: ${breakpoints.phone}) {
    width: 90vw;
    order: -1;
    position: relative;
    top: 0px;
    margin: 10px 0px;
  }

  @media (min-width: ${breakpoints.phone}) and (max-width: ${breakpoints.desktop}) {
    width: 90vw;
    order: -1;
    position: relative;
    top: 0px;
    margin: 10px 0px;
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

  cite {
    display: block;
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

export const DotList = styled.li`
  list-style: disc;
  margin-left: 40px;
`;

export const Image = styled.img`
  max-width: 800px;
  max-height: 600px;
  object-fit: cover;
  border-radius: 20px;
  margin: 55px 0px;

  @media (max-width: ${breakpoints.phone}) {
    max-width: 350px;
    max-height: 350px;
  }

  @media (min-width: ${breakpoints.phone}) and (max-width: ${breakpoints.desktop}) {
    max-width: 600px;
    max-height: 600px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Audio = styled.audio`
  transform: scale(1.5);
  margin-left: 50px;

  @media (max-width: ${breakpoints.phone}) {
    display: flex;
    transform: scale(1.2);
    margin-left: 0px;
  }

  @media (min-width: ${breakpoints.phone}) and (max-width: ${breakpoints.desktop}) {
    display: flex;
    transform: scale(1.2);
    margin-left: 0px;
  }
`;

export const CatequeseContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 150px;

  h2 {
    text-align: center;

    a {
      line-height: 26px;
      margin-bottom: 15px;
      color: ${colors.darkBlue};

      &:hover,
      &:active {
        color: ${colors.purple};
      }
    }
  }

  @media (max-width: ${breakpoints.phone}) {
    grid-template-columns: 1fr;
  }
`;

export const CatequeseImage = styled.img`
  max-width: 600px;
  max-height: 600px;
  display: block;
  margin: 0 auto;
  object-fit: cover;
  border-radius: 20px;

  @media (max-width: ${breakpoints.phone}) {
    max-width: 350px;
    max-height: 350px;
  }

  @media (min-width: ${breakpoints.phone}) and (max-width: ${breakpoints.desktop}) {
    max-width: 350px;
    max-height: 350px;
  }
`;
