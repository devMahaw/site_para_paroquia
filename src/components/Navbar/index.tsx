import * as S from "./styles";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const goToRosario = () => {
    navigate("/rosario");
  };

  return (
    <S.NavbarContainer>
      <a href="">
        <h1>
          <img
            src="/assets/nsps_logo.png"
            alt="Logo Nossa Senhora do Perpétuo Socorro"
            style={{ width: "350px" }}
          />
        </h1>
      </a>
      <div>
        <S.NavbarItemsList>
          <li>
            <div>
              <S.NavbarText>Institucional</S.NavbarText>
              <span>
                <svg
                  fill="currentColor"
                  aria-label="Suspenso"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357
    24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373
    9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
                  ></path>
                </svg>
              </span>
            </div>
            <S.NavbarSubMenu>
              <li>
                <S.NavbarSubItemsText href="">NSPS</S.NavbarSubItemsText>
              </li>
              <li>
                <S.NavbarSubItemsText href="">História</S.NavbarSubItemsText>
              </li>
              <li>
                <S.NavbarSubItemsText href="">Pároco</S.NavbarSubItemsText>
              </li>
              <li>
                <S.NavbarSubItemsText href="">Secretaria</S.NavbarSubItemsText>
              </li>
            </S.NavbarSubMenu>
          </li>
          <li>
            <div>
              <S.NavbarText>Nossas atividades</S.NavbarText>

              <span>
                <svg
                  fill="currentColor"
                  aria-label="Suspenso"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357
    24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373
    9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
                  ></path>
                </svg>
              </span>
            </div>
            <S.NavbarSubMenu>
              <li>
                <S.NavbarSubItemsText href="">
                  Evangelho diário
                </S.NavbarSubItemsText>
              </li>
              <li>
                <S.NavbarSubItemsText href="">
                  Santo do dia
                </S.NavbarSubItemsText>
              </li>
              <li>
                <S.NavbarSubItemsText href="">
                  Horários das missas
                </S.NavbarSubItemsText>
              </li>
              <li>
                <S.NavbarSubItemsText href="">Catequese</S.NavbarSubItemsText>
              </li>
              <li>
                <S.NavbarSubItemsText href="">Pastorais</S.NavbarSubItemsText>
              </li>
              <li>
                <S.NavbarSubItemsText href="">
                  Terço dos homens
                </S.NavbarSubItemsText>
              </li>
              <li>
                <S.NavbarSubItemsText onClick={goToRosario}>
                  Rosário
                </S.NavbarSubItemsText>
              </li>
            </S.NavbarSubMenu>
          </li>
          <li>
            <div>
              <S.NavbarText>Notícias</S.NavbarText>

              <span>
                <svg
                  fill="currentColor"
                  aria-label="Suspenso"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357
    24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373
    9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
                  ></path>
                </svg>
              </span>
            </div>
            <S.NavbarSubMenu>
              <li>
                <S.NavbarSubItemsText href="">Avisos</S.NavbarSubItemsText>
              </li>
              <li>
                <S.NavbarSubItemsText href="">
                  Notícias da paróquia
                </S.NavbarSubItemsText>
              </li>
              <li>
                <S.NavbarSubItemsText href="">
                  Redes sociais
                </S.NavbarSubItemsText>
              </li>
            </S.NavbarSubMenu>
          </li>
          <li>
            <div>
              <S.NavbarText>Ajude-nos</S.NavbarText>
              <span>
                <svg
                  fill="currentColor"
                  aria-label="Suspenso"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357
    24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373
    9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
                  ></path>
                </svg>
              </span>
            </div>
            <S.NavbarSubMenu>
              <li>
                <S.NavbarSubItemsText href="">Dízimo</S.NavbarSubItemsText>
              </li>
            </S.NavbarSubMenu>
          </li>
          <li>
            <a href="" style={{ letterSpacing: "1px" }}>
              Contato
            </a>
          </li>
        </S.NavbarItemsList>
      </div>
    </S.NavbarContainer>
  );
};

export default Navbar;
