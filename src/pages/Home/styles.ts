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

export const ImageDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('assets/frente_igreja.png') ;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    width: 100%;
    height: 1200px;

    span {
        font-weight: bold;
        color: ${colors.black};
    }
`;

export const FrenteDiv = styled.div`
    width: 650px;
    height: 950px;
    margin-left: 500px;
    background-color: ${colors.white};

    svg {
        width: 30px;
        fill: ${colors.brown};
    }
`;

export const WhatsappButton = styled.button`
    display: flex;
    align-items: center;
    padding: 15px 30px;
    margin-top: 40px;
    background-color: ${colors.lightGreen};
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    color: ${colors.white};
    fill: ${colors.white};
    border-radius: 99px 99px 99px 99px;
    border: none;
    transition: all 0.3s;

    &:hover,
    &:active {
        background-color: ${colors.darkGray};
        transform: translateY(-3%);
    };

    svg {
        width: 22px;
        height: 24px;
        fill: ${colors.white};
        margin-right: 10px;
    }
`;

export const RedeDiv = styled.div`
    width: 100px;

        svg {
            fill: ${colors.darkBlue};

            &:hover {
                fill:rgb(66, 138, 253);
            }

            transition: fill 0.3s ease, transform 0.3s ease;
        }
`;

export const HistoriaDiv = styled.div`
    span {
        font-weight: bold;
        color: ${colors.black};
    }
`;

export const BrownButton = styled.button`
    display: flex;
    align-items: center;
    padding: 15px 30px;
    margin-top: 40px;
    background-color: ${colors.yellow};
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    color: ${colors.black};
    border-radius: 99px 99px 99px 99px;
    border: none;
    transition: all 0.3s;

    &:hover,
    &:active {
        background-color: ${colors.brown};
        transform: translateY(-3%);
        color: ${colors.white};
    };

    svg {
        width: 22px;
        height: 24px;
        fill: ${colors.white};
        margin-right: 10px;
    }
`;