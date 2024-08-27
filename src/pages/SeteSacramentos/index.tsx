import * as S from "../../styles";

const SeteSacramentos = () => {
  return (
    <S.CatequeseContainer>
      <div>
        <a href="">
          <S.CatequeseImage src="assets/batismo/batismo_bb.jpg" alt="Batismo" />
        </a>
        <S.BigText>
          <a href="">Batismo</a>
        </S.BigText>
      </div>
      <div>
        <a href="">
          <S.CatequeseImage
            src="assets/dogmas_catolicos/dogmas_catolicos.jpg"
            alt="Dogmas Católicos"
          />
        </a>
        <S.BigText>
          <a href="">Dogmas da Igreja Católica</a>
        </S.BigText>
      </div>
      <div>
        <a href="">
          <S.CatequeseImage
            src="assets/construcao.png"
            alt="Os 10 Mandamentos"
          />
        </a>
        <S.BigText>
          <a href="">Os 10 Mandamentos</a>
        </S.BigText>
      </div>
      <div>
        <a href="">
          <S.CatequeseImage
            src="assets/rosario/eucaristia_anjos.jpg"
            alt="Os 7 Sacramentos"
          />
        </a>
        <S.BigText>
          <a href="">Os 7 Sacramentos</a>
        </S.BigText>
      </div>
      <div>
        <a href="">
          <S.CatequeseImage
            src="assets/construcao.png"
            alt="Os dons do Espírito Santo"
          />
        </a>
        <S.BigText>
          <a href="">Os Dons do Espírito Santo</a>
        </S.BigText>
      </div>
    </S.CatequeseContainer>
  );
};

export default SeteSacramentos;
