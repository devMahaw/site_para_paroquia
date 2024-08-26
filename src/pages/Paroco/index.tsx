import * as S from "../../styles";
import { ParocoYellow, ParocoContainer } from "./styles";

const Paroco = () => {
  return (
    <ParocoContainer>
      <S.ImageContainer>
        <S.Image
          src="assets/paroco.jpg"
          alt="Pároco"
          style={{ borderRadius: "50%", border: "6px solid #FFC42E" }}
        />
      </S.ImageContainer>
      <S.ImageContainer>
        <S.BigText style={{ marginTop: "-50px" }}>
          Pe. André Rodrigues da Silva
        </S.BigText>
      </S.ImageContainer>
      <S.ImageContainer>
        <ParocoYellow>
          <svg
            aria-hidden="true"
            viewBox="0 0 576 512"
            xmlns="http://www.w3.org/2000/svg"
            fill="#FFC42E"
            style={{ width: "50px" }}
          >
            <path d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
          </svg>
          <S.DefaultText style={{ fontWeight: "bold", marginTop: "20px" }}>
            Ordenação
          </S.DefaultText>
          <S.SmallText>18.11.2006</S.SmallText>
        </ParocoYellow>
      </S.ImageContainer>
    </ParocoContainer>
  );
};

export default Paroco;
