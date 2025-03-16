import * as S from "../../styles";
import { Container, ContatoContainer, ContatoImage, DefaultText, MapaContainer, SmallText } from "./styles";
import { WhatsappButton } from "../Home/styles";

const Contato = () => (
    <Container>
        <S.BigText style={{textAlign: "center"}}>Contato</S.BigText>
        <ContatoContainer>
                <ContatoImage src="assets/frente_igreja.png" alt="Nossa senhora do Perpétuo Socorro História" />
                <div>
                    <DefaultText style={{fontWeight: "bold"}}>HORÁRIO DE ATENDIMENTO: </DefaultText>
                    <SmallText>de segunda-feira a sexta-feira</SmallText>
                    <SmallText>das 08h30 às 18h00.</SmallText>
                    <SmallText>Sábado das 08h às 17h.</SmallText>
                    <DefaultText style={{fontWeight: "bold", margin: "30px 0px"}}>Telefone: (11) 3083-0033</DefaultText>
                    <WhatsappButton type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
                        WHATSAPP
                    </WhatsappButton>
                    <DefaultText style={{fontWeight: "bold", margin: "30px 0px"}}>E-mail: meuperpetuosocorro@gmail.com</DefaultText>
                    <DefaultText style={{fontWeight: "bold"}}>Endereço:</DefaultText>
                    <SmallText>R. Maria Adelaide L. Quelhas, 550</SmallText>
                    <SmallText>Centro, São Bernardo do Campo</SmallText>
                    <DefaultText style={{fontWeight: "bold"}}>CEP: 09725-610</DefaultText>
                </div>
        </ContatoContainer>
        <MapaContainer>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.263540613195!2d-46.56223522387961!3d-23.70228106678596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce43ce12e602af%3A0xa0ba4bfe5ff73939!2sPar%C3%B3quia%20Nossa%20Senhora%20do%20Perp%C3%A9tuo%20Socorro!5e0!3m2!1spt-BR!2sbr!4v1742089604213!5m2!1spt-BR!2sbr" width="1100" height="600" style={{border: "0"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </MapaContainer>
    </Container>
);

export default Contato;