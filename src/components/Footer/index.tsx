import { NavbarSubItemsText } from "../Navbar/styles";
import { FooterContainer } from "./styles";

const Footer = () => {
  return (
    <FooterContainer>
      <ul>
        <li>
          <NavbarSubItemsText href="">NSPS</NavbarSubItemsText>
        </li>
        <li>
          <NavbarSubItemsText href="">História</NavbarSubItemsText>
        </li>
        <li>
          <NavbarSubItemsText href="/paroco" target="_blank">
            Pároco
          </NavbarSubItemsText>
        </li>
        <li>
          <NavbarSubItemsText href="">Secretaria</NavbarSubItemsText>
        </li>
        <li>
          <NavbarSubItemsText href="">Evangelho diário</NavbarSubItemsText>
        </li>
      </ul>
      <ul>
        <li>
          <NavbarSubItemsText href="">Santo do dia</NavbarSubItemsText>
        </li>
        <li>
          <NavbarSubItemsText href="">Horários das missas</NavbarSubItemsText>
        </li>
        <li>
          <NavbarSubItemsText href="/catequese" target="_blank">
            Catequese
          </NavbarSubItemsText>
        </li>
        <li>
          <NavbarSubItemsText href="">Pastorais</NavbarSubItemsText>
        </li>
        <li>
          <NavbarSubItemsText href="">Terço dos homens</NavbarSubItemsText>
        </li>
      </ul>
      <ul>
        <li>
          <NavbarSubItemsText href="/rosario" target="_blank">
            Rosário
          </NavbarSubItemsText>
        </li>
        <li>
          <NavbarSubItemsText href="">Avisos</NavbarSubItemsText>
        </li>
        <li>
          <NavbarSubItemsText href="">Notícias da paróquia</NavbarSubItemsText>
        </li>
        <li>
          <NavbarSubItemsText href="">Redes Sociais</NavbarSubItemsText>
        </li>
        <li>
          <NavbarSubItemsText href="">Dízimo</NavbarSubItemsText>
        </li>
      </ul>
    </FooterContainer>
  );
};

export default Footer;
