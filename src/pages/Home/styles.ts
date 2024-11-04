import styled from "styled-components";
import { colors, breakpoints } from "../../styles";

export const AtividadeDiv = styled.div`
    display: flex;
    margin-right: 25px;
    width: 370px;
    height: 270px;
    background-color: ${colors.white};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    >h2 {
        &:hover {
                color:rgb(63, 63, 63);
        }

        transition: color 0.3s ease;
    }

    svg {
        width: 60px;
        height: 50px;
        margin-bottom: 15px;
        fill: ${colors.brown};
        cursor: pointer;

        &:hover {
            fill:rgb(202, 131, 17);
        }

        transition: fill 0.3s ease, transform 0.3s ease;
    }
`;

export const FrenteDiv = styled.div``;