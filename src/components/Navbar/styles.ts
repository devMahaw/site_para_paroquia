import styled from "styled-components";
import { colors, breakpoints } from "../../styles";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 100px;
  background-color: ${colors.white};
  width: 100%;
  height: 100px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  img {
    width: 350px;
  }

  @media (max-width: ${breakpoints.phone}) {
    padding: 20px;
    justify-content: space-between;

    img {
      width: 250px;
    }
  }
`;

export const NavbarItemsList = styled.ul`
  display: flex;
  gap: 40px;

  > li {
    position: relative;
  }

  div {
    &:hover,
    &:active {
      color: ${colors.brown};
    }
  }

  svg {
    width: 8px;
    cursor: pointer;
  }

  a {
    color: inherit;

    &:hover,
    &:active {
      color: ${colors.brown};
    }
  }

  @media (max-width: ${breakpoints.phone}) {
    display: none;
    flex-direction: column;
    gap: 0;
    position: static;

    &.open {
      display: flex;
      background-color: ${colors.white};
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;

      > li {
        padding: 10px 20px;
      }
    }
  }
`;

export const NavbarSubMenu = styled.ul`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: ${colors.white};
  padding: 0;
  margin: 0;
  z-index: 1;

  > li {
    padding: 10px 20px;
  }

  @media (max-width: ${breakpoints.phone}) {
    position: static;
  }
`;

export const CatequeseList = styled.li`
  position: relative;

  ul {
    display: none;
    top: 100%;
    left: 0;
    margin: 0;
    padding: 0;
  }
`;

export const NavbarSubSubMenu = styled.ul`
  display: none;
  position: absolute;
  top: 0;
  left: 100%;
  background-color: ${colors.white};
  padding: 0;
  margin: 0;
  z-index: 1;
  max-height: 300px;
  overflow-y: auto;

  > li {
    padding: 10px 20px;
  }

  @media (max-width: ${breakpoints.phone}) {
    position: static;
  }
`;

export const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: ${breakpoints.phone}) {
    display: block;

    img {
      width: 20px;
      height: auto;
    }
  }
`;

export const NavbarSubItemsText = styled.a`
  cursor: pointer;
  font-size: 16px;
  letter-spacing: 1px;
  white-space: nowrap;
  padding: 2px;
  color: ${colors.white};
`;

export const NavbarText = styled.span`
  font-size: 16px;
  letter-spacing: 1px;
  margin-right: 6px;
  cursor: default;

  &:hover,
  &:active {
    color: ${colors.brown};
  }
`;
