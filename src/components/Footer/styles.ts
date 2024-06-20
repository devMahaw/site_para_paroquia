import styled from "styled-components";
import { colors } from "../../styles";

export const FooterContainer = styled.div`
  background-color: ${colors.blue};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;

  > ul {
    margin-right: 120px;
  }

  ul {
    li {
      margin-top: 16px;
    }
  }
`;
