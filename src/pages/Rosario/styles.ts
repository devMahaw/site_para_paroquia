import styled from "styled-components";
import { colors } from "../../styles";

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const RosarioContainer = styled.div`
  margin-left: 100px;
`;

export const BigText = styled.h2`
  font-weight: bold;
  font-size: 40px;
  margin: 30px 0px;
`;

export const DefaultText = styled.p`
  font-size: 20px;
  width: 60%;
  line-height: 30px;

  span {
    color: #868686;
  }
`;

export const SmallText = styled.p`
  line-height: 30px;
  font-size: 18px;
  width: 50%;
  padding: 10px 0px;
`;
