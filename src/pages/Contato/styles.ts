import styled from "styled-components";
import { breakpoints } from "../../styles";

export const Container = styled.div`
    margin-top: 120px;
`;

export const DefaultText = styled.p`
    font-size: 24px;
    line-height: 40px;
`;

export const SmallText = styled.p`
    font-size: 20px;
    line-height: 40px;
`;

export const ContatoImage = styled.img`
    height: 400px;
    margin-right: 60px;

    @media (max-width: ${breakpoints.phone}) {
        margin: 0 auto;
        width: 350px;
        height: 200px;
    }
`;

export const ContatoContainer = styled.div`
    display: flex;
    justify-content: center;

    @media (max-width: ${breakpoints.phone}) {
        flex-direction: column;
        text-align: center;
    }
`;

export const MapaContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px 0px;
`;