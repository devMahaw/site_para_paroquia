import styled from "styled-components";
import { colors } from "../../styles";

export const MisteriosList = styled.li`
  list-style: disc;
  margin-left: 40px;
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

  h4 {
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
