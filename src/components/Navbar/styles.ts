import styled from "styled-components";
import { colors } from "../../styles";

export const ArrowImg = styled.img`
  width: 8px;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 100px;
  background-color: ${colors.white};
`;

export const NavbarText = styled.span`
  font-size: 16px;
  letter-spacing: 1px;
  margin-right: 6px;
`;

export const NavbarItemsList = styled.ul`
  display: flex;
  gap: 40px;
  marginright: 100px;

  div {
    &:hover,
    &:active {
      color: ${colors.brown};
    }

    height: 0px;
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
