import styled from "styled-components";
import { breakpoints, colors } from "../../styles";

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

  @media (max-width: ${breakpoints.desktop}) {
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

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 350px;
    max-height: 350px;
  }
`;
