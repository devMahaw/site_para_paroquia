import styled from "styled-components";
import { breakpoints } from "../../styles";

export const ParocoYellow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 400px;
  height: 200px;
  background-color: rgba(211, 181, 116, 0.25);
  margin-bottom: 30px;
  border-radius: 20px;

  @media (max-width: ${breakpoints.phone}) {
    width: 350px;
  }
`;

export const ParocoContainer = styled.div`
  img {
    margin: 120px;
  }

  @media (max-width: ${breakpoints.phone}) {
    h2 {
      margin: 20px;
    }
  }
`;
