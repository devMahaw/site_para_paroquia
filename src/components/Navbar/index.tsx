import { NavbarContainer, NavbarItemsList, NavbarText } from "./styles";

const Navbar = () => {
  return (
    <NavbarContainer>
      <a href="">
        <img
          src="/assets/nsps_logo.png"
          alt="Logo Nossa Senhora do Perpétuo Socorro"
          style={{ width: "350px" }}
        />
      </a>
      <div>
        <NavbarItemsList>
          <li>
            <div>
              <a href="">
                <NavbarText>Institucional</NavbarText>
              </a>
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
            <ul>
              <li></li>
              <li></li>
            </ul>
          </li>
          <li>
            <div>
              <a href="">
                <NavbarText>Nossas atividades</NavbarText>
              </a>
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
            <ul>
              <li></li>
              <li></li>
            </ul>
          </li>
          <li>
            <div>
              <a href="">
                <NavbarText>Notícias</NavbarText>
              </a>
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
            <ul>
              <li></li>
              <li></li>
            </ul>
          </li>
          <li>
            <div>
              <a href="">
                <NavbarText>Ajude-nos</NavbarText>
              </a>
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
            <ul>
              <li></li>
              <li></li>
            </ul>
          </li>
          <li>
            <a href="" style={{ letterSpacing: "1px" }}>
              Contato
            </a>
          </li>
        </NavbarItemsList>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
