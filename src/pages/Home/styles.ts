import styled from "styled-components";
import { breakpoints, colors } from "../../styles";

export const HomeImage = styled.img`
    border-radius: 20px;
    object-fit: cover;
    display: block;
    margin: 120px auto;
    width: 1000px;

    @media (max-width: ${breakpoints.phone}) {
        width: 350px;
    }

    @media (min-width: ${breakpoints.phone}) and (max-width: ${breakpoints.desktop}) {
        width: 750px;
    }
`;

export const GeneralContainer = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: -40px;
`;

export const BigText = styled.h2`
    font-weight: bold;
    font-size: 50px;
    margin: 20px 0px 40px 0px;

    @media (max-width: ${breakpoints.phone}) {
        font-size: 28px;
    }
`;

export const DefaultText = styled.p`
    font-size: 28px;
    line-height: 30px;
`;

export const AtividadeDivContainer = styled.div`
    display: flex;
    margin-bottom: 100px;
    textAlign: center;

    @media (max-width: ${breakpoints.phone}) {
        flex-direction: column;
    }

    @media (min-width: ${breakpoints.phone}) and (max-width: ${breakpoints.desktop}) {
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center;
        align-items: center;
    }
`;

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
    
    @media (max-width: ${breakpoints.phone}) {
        margin-right: 0px;
        margin-top: 25px;
        width: 300px;
        height: 270px;
    }

    @media (min-width: ${breakpoints.phone}) and (max-width: ${breakpoints.desktop}) {
        width: 300px;
        height: 270px;
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
    height: 1250px;

    span {
        font-weight: bold;
        color: ${colors.black};
    }

    @media (max-width: ${breakpoints.phone}) {
        height: 1400px;
    }
`;

export const FrenteDivContainer = styled.div`
    width: 650px;
    height: 1150px;
    margin-left: 500px;
    background-color: ${colors.white};

    svg {
        width: 30px;
        fill: ${colors.brown};
    }

    @media (max-width: ${breakpoints.phone}) {
        width: 300px;
        height: 1300px;
        margin-left: 0px;
    }

    @media (min-width: ${breakpoints.phone}) and (max-width: ${breakpoints.desktop}) {
        width: 500px;
        height: 1150px;
        margin-left: 160px;
    }
`;

export const FrenteDiv = styled.div`
    width: 80%;
    margin: 0 auto;
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

export const HistoriaContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;

    @media (max-width: ${breakpoints.phone}) {
        flex-direction: column;
        align-items: center;
    }
`;

export const HistoriaImage = styled.img`
    width: 490px;
    height: 734px;
    margin: 100px;

    @media (max-width: ${breakpoints.phone}) {
        width: 300px;
        height: 400px;
        margin: 0px;
        margin-top: 80px;
    }

    @media (min-width: ${breakpoints.phone}) and (max-width: ${breakpoints.desktop}) {
        height: 600px;
    }
`;

export const HistoriaDiv = styled.div`
    span {
        font-weight: bold;
        color: ${colors.black};
    }

    >h2,
    p {
        width: 450px;
    }

    @media (max-width: ${breakpoints.phone}) {
        max-width: 450px;
        width: 80%;

        >h2,
        p {
            text-align: center;
            width: 100%;
        }
    }
`;

export const BrownButton = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 15px 30px;
    margin: 40px 0px;
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
`;