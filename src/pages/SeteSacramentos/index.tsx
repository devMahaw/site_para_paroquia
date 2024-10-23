import * as S from "../../styles";

const SeteSacramentos = () => {
  return (
    <S.CatequeseContainer>
      <div>
        <a href="/batismo" target="_blank">
          <S.CatequeseImage src="assets/batismo/batismo_bb.jpg" alt="Batismo" />
        </a>
        <S.BigText>
          <a href="/batismo" target="_blank">
            Batismo
          </a>
        </S.BigText>
      </div>
      <div>
        <a href="/eucaristia" target="_blank">
          <S.CatequeseImage
            src="assets/eucaristia/santaCeia.png"
            alt="Eucaristia"
          />
        </a>
        <S.BigText>
          <a href="/eucaristia" target="_blank">
            Eucaristia
          </a>
        </S.BigText>
      </div>
      <div>
        <a href="/crisma" target="_blank">
          <S.CatequeseImage src="assets/crisma/crismaa.jpg" alt="Crisma" />
        </a>
        <S.BigText>
          <a href="/crisma" target="_blank">
            Crisma
          </a>
        </S.BigText>
      </div>
      <div>
        <a href="/confissao" target="_blank">
          <S.CatequeseImage
            src="assets/confissao/confissaoo.jpg"
            alt="Confissão"
          />
        </a>
        <S.BigText>
          <a href="/confissao" target="_blank">
            Confissão
          </a>
        </S.BigText>
      </div>
      <div>
        <a href="">
          <S.CatequeseImage
            src="assets/construcao.png"
            alt="Unção dos Enfermos"
          />
        </a>
        <S.BigText>
          <a href="">Unção dos Enfermos</a>
        </S.BigText>
      </div>
      <div>
        <a href="">
          <S.CatequeseImage src="assets/construcao.png" alt="Ordem" />
        </a>
        <S.BigText>
          <a href="">Ordem</a>
        </S.BigText>
      </div>
      <div>
        <a href="">
          <S.CatequeseImage src="assets/construcao.png" alt="Matrimônio" />
        </a>
        <S.BigText>
          <a href="">Matrimônio</a>
        </S.BigText>
      </div>
    </S.CatequeseContainer>
  );
};

export default SeteSacramentos;
