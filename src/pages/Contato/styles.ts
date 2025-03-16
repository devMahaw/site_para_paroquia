import styled from "styled-components";
import { colors } from "../../styles";

export const Container = styled.div`
    margin-top: 120px;
`;

export const DefaultText = styled.p`
    font-size: 24px;
    line-height: 40px;

    span {
        color: ${colors.black};
    }
    
`;

export const ContatoContainer = styled.div`
    display: flex;
    justify-content: center;
`;