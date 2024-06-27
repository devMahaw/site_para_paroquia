import styled from "styled-components";
import { colors } from "../../styles";

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
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

export const CatequeseList = styled.li`
  position: relative;

  &:hover > ul {
    display: block;
  }

  &:active > ul {
    display: block;
  }
`;

export const NavbarSubSubMenu = styled.ul`
  display: none;
  position: absolute;
  top: 0;
  left: 100%;
  background-color: ${colors.white};
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  padding: 0;
  margin: 0;
  z-index: 1;

  > li {
    padding: 10px 20px;
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

export const NavbarItemsList = styled.ul`
  display: flex;
  gap: 40px;

  > li {
    position: relative;

    &:hover > ul {
      display: block;
    }

    &:active > ul {
      display: block;
    }
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
`;

export const NavbarSubMenu = styled.ul`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: ${colors.white};
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  padding: 0;
  margin: 0;
  z-index: 1;

  > li {
    padding: 10px 20px;
  }
`;
