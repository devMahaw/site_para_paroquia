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
  line-height: 30px;

  span {
    color: ${colors.darkGray};
  }
`;

export const SmallText = styled.p`
  line-height: 30px;
  font-size: 18px;
  padding: 10px 0px;

  a {
    color: ${colors.darkBlue};
    font-weight: bold;
  }

  span {
    color: ${colors.darkGray};
  }
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
