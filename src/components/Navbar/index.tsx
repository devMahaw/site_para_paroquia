import { useState } from "react";
import * as S from "./styles";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<number | null>(null);
  const [activeSubSubMenu, setActiveSubSubMenu] = useState<number | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubMenu = (index: number) => {
    setActiveSubMenu(activeSubMenu === index ? null : index);
    setActiveSubSubMenu(null);
  };

  const toggleSubSubMenu = (index: number) => {
    setActiveSubSubMenu(activeSubSubMenu === index ? null : index);
  };

  return (
    <S.NavbarContainer>
      <a href="">
        <h1>
          <img
            src="/assets/nsps_logo.png"
            alt="Logo Nossa Senhora do Perpétuo Socorro"
          />
        </h1>
      </a>
      <S.HamburgerIcon onClick={toggleMenu}>
        <img src="/assets/hamburger.png" alt="Menu" />
      </S.HamburgerIcon>
      <div>
        <S.NavbarItemsList className={isMenuOpen ? "open" : ""}>
          <li onClick={() => toggleSubMenu(1)}>
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
            <S.NavbarSubMenu className={activeSubMenu === 1 ? "open" : ""}>
              <li>
                <S.NavbarSubItemsText href="">NSPS</S.NavbarSubItemsText>
              </li>
              <li>
                <S.NavbarSubItemsText href="">História</S.NavbarSubItemsText>
              </li>
              <li>
                <S.NavbarSubItemsText href="/paroco" target="_blank">
                  Pároco
                </S.NavbarSubItemsText>
              </li>
              <li>
                <S.NavbarSubItemsText href="">Secretaria</S.NavbarSubItemsText>
              </li>
            </S.NavbarSubMenu>
          </li>
          <li onClick={() => toggleSubMenu(2)}>
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
            <S.NavbarSubMenu className={activeSubMenu === 2 ? "open" : ""}>
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
              <S.CatequeseList onClick={() => toggleSubSubMenu(1)}>
                <S.NavbarText>Catequese</S.NavbarText>
                <S.NavbarSubSubMenu
                  className={activeSubSubMenu === 1 ? "open" : ""}
                >
                  <li>
                    <S.NavbarSubItemsText href="/trindade" target="_blank">
                      Santíssima Trindade
                    </S.NavbarSubItemsText>
                  </li>
                  <li>
                    <S.NavbarSubItemsText
                      href="/dogmascatolicos"
                      target="_blank"
                    >
                      Dogmas da Igreja Católica
                    </S.NavbarSubItemsText>
                  </li>
                  <S.CatequeseList onClick={() => toggleSubSubMenu(2)}>
                    <S.NavbarText>Os 10 mandamentos</S.NavbarText>
                    <S.NavbarSubSubMenu
                      className={activeSubSubMenu === 2 ? "open" : ""}
                    >
                      <li>
                        <S.NavbarSubItemsText href="">
                          Amar a Deus sobre todas as coisas
                        </S.NavbarSubItemsText>
                      </li>
                      <li>
                        <S.NavbarSubItemsText href="">
                          Não tomar seu santo nome em vão
                        </S.NavbarSubItemsText>
                      </li>
                      <li>
                        <S.NavbarSubItemsText href="">
                          Guardar domingos e festas
                        </S.NavbarSubItemsText>
                      </li>
                      <li>
                        <S.NavbarSubItemsText href="">
                          Honrar pai e mãe
                        </S.NavbarSubItemsText>
                      </li>
                      <li>
                        <S.NavbarSubItemsText href="">
                          Não matarás
                        </S.NavbarSubItemsText>
                      </li>
                      <li>
                        <S.NavbarSubItemsText href="">
                          Não pecar contra a castidade
                        </S.NavbarSubItemsText>
                      </li>
                      <li>
                        <S.NavbarSubItemsText href="">
                          Não furtar
                        </S.NavbarSubItemsText>
                      </li>
                      <li>
                        <S.NavbarSubItemsText href="">
                          Não levantar falso testemunho
                        </S.NavbarSubItemsText>
                      </li>
                      <li>
                        <S.NavbarSubItemsText href="">
                          Não desejar a mulher do próximo
                        </S.NavbarSubItemsText>
                      </li>
                      <li>
                        <S.NavbarSubItemsText href="">
                          Não cobiçar as coisas alheias
                        </S.NavbarSubItemsText>
                      </li>
                      <li>
                        <S.NavbarSubItemsText href="">
                          Os 5 mandamentos da igreja
                        </S.NavbarSubItemsText>
                      </li>
                    </S.NavbarSubSubMenu>
                  </S.CatequeseList>
                  <S.CatequeseList onClick={() => toggleSubSubMenu(3)}>
                    <S.NavbarText>Os 7 sacramentos</S.NavbarText>
                    <S.NavbarSubSubMenu
                      className={activeSubSubMenu === 3 ? "open" : ""}
                    >
                      <li>
                        <S.NavbarSubItemsText href="/batismo" target="_blank">
                          Batismo
                        </S.NavbarSubItemsText>
                      </li>
                      <li>
                        <S.NavbarSubItemsText
                          href="/eucaristia"
                          target="_blank"
                        >
                          Eucaristia
                        </S.NavbarSubItemsText>
                      </li>
                      <li>
                        <S.NavbarSubItemsText href="/crisma" target="_blank">
                          Crisma
                        </S.NavbarSubItemsText>
                      </li>
                      <li>
                        <S.NavbarSubItemsText href="">
                          Confissão
                        </S.NavbarSubItemsText>
                      </li>
                      <li>
                        <S.NavbarSubItemsText href="">
                          Unção dos enfermos
                        </S.NavbarSubItemsText>
                      </li>
                      <li>
                        <S.NavbarSubItemsText href="">
                          Ordem
                        </S.NavbarSubItemsText>
                      </li>
                      <li>
                        <S.NavbarSubItemsText href="">
                          Matrimônio
                        </S.NavbarSubItemsText>
                      </li>
                    </S.NavbarSubSubMenu>
                  </S.CatequeseList>
                  <li>
                    <S.NavbarSubItemsText href="">
                      Os dons do Espírito Santo
                    </S.NavbarSubItemsText>
                  </li>
                  <li>
                    <S.NavbarSubItemsText href="/liturgia" target="_blank">
                      Liturgia
                    </S.NavbarSubItemsText>
                  </li>
                  <S.CatequeseList onClick={() => toggleSubSubMenu(4)}>
                    <S.NavbarText>Virtudes</S.NavbarText>
                    <S.NavbarSubSubMenu
                      className={activeSubSubMenu === 4 ? "open" : ""}
                    >
                      <li>
                        <S.NavbarSubItemsText href="">
                          Cardeais
                        </S.NavbarSubItemsText>
                      </li>
                      <li>
                        <S.NavbarSubItemsText href="">
                          Teologais
                        </S.NavbarSubItemsText>
                      </li>
                    </S.NavbarSubSubMenu>
                  </S.CatequeseList>
                  <li>
                    <S.NavbarSubItemsText
                      href="/obrasmisericordia"
                      target="_blank"
                    >
                      As obras de misericórdia
                    </S.NavbarSubItemsText>
                  </li>
                  <li>
                    <S.NavbarSubItemsText href="/oracoes" target="_blank">
                      Orações
                    </S.NavbarSubItemsText>
                  </li>
                  <S.CatequeseList onClick={() => toggleSubSubMenu(5)}>
                    <S.NavbarText>Os 4 dogmas marianos</S.NavbarText>
                    <S.NavbarSubSubMenu
                      className={activeSubSubMenu === 5 ? "open" : ""}
                    >
                      <li>
                        <S.NavbarSubItemsText>
                          Maternidade Divina
                        </S.NavbarSubItemsText>
                      </li>
                      <li>
                        <S.NavbarSubItemsText href="">
                          Virgindade perpétua
                        </S.NavbarSubItemsText>
                      </li>
                      <li>
                        <S.NavbarSubItemsText href="">
                          Imaculada conceição
                        </S.NavbarSubItemsText>
                      </li>
                      <li>
                        <S.NavbarSubItemsText href="">
                          Assunção
                        </S.NavbarSubItemsText>
                      </li>
                    </S.NavbarSubSubMenu>
                  </S.CatequeseList>
                  <li>
                    <S.NavbarSubItemsText href="">
                      Graus de adoração
                    </S.NavbarSubItemsText>
                  </li>
                  <li>
                    <S.NavbarSubItemsText href="">Pecados</S.NavbarSubItemsText>
                  </li>
                  <li>
                    <S.NavbarSubItemsText href="">
                      Pós morte
                    </S.NavbarSubItemsText>
                  </li>
                </S.NavbarSubSubMenu>
              </S.CatequeseList>
              <li>
                <S.NavbarSubItemsText href="">Pastorais</S.NavbarSubItemsText>
              </li>
              <li>
                <S.NavbarSubItemsText href="">
                  Terço dos homens
                </S.NavbarSubItemsText>
              </li>
              <li>
                <S.NavbarSubItemsText href="/rosario" target="_blank">
                  Rosário
                </S.NavbarSubItemsText>
              </li>
            </S.NavbarSubMenu>
          </li>
          <li onClick={() => toggleSubMenu(3)}>
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
            <S.NavbarSubMenu className={activeSubMenu === 3 ? "open" : ""}>
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
          <li onClick={() => toggleSubMenu(4)}>
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
            <S.NavbarSubMenu className={activeSubMenu === 4 ? "open" : ""}>
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
