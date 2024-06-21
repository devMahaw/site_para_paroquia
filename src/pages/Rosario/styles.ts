import styled from "styled-components";
import { colors } from "../../styles";

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const MisteriosList = styled.li`
  list-style: disc;
  margin-left: 40px;
`;

export const BigText = styled.h2`
  font-weight: bold;
  font-size: 40px;
  margin: 40px 0px;
`;

export const DefaultText = styled.p`
  font-size: 24px;
  width: 50%;
  line-height: 30px;

  span {
    color: ${colors.darkGray};
  }
`;

export const SmallText = styled.p`
  line-height: 30px;
  font-size: 18px;
  width: 50%;
  padding: 10px 0px;

  a {
    color: #3a83f7;
    font-weight: bold;
  }

  span {
    color: ${colors.darkGray};
  }
`;
