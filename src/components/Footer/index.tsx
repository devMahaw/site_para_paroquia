import { NavbarSubItemsText } from "../Navbar/styles";
import { FooterContainer } from "./styles";
import useNavigation from "../../utils/navigation";

const Footer = () => {
  const { goTo } = useNavigation();

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
          <NavbarSubItemsText href="">Pároco</NavbarSubItemsText>
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
          <NavbarSubItemsText onClick={() => goTo("/trindade")}>
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
          <NavbarSubItemsText onClick={() => goTo("/rosario")}>
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
