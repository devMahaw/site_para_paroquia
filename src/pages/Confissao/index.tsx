import * as S from "../../styles";

const Crisma = () => {
  return (
    <div style={{ margin: "50px" }}>
      <S.ImageContainer>
        <S.Image src="assets/crisma/crismaa.jpg" alt="Crisma" />
      </S.ImageContainer>
      <S.Audio controls>
        <source src="assets/crisma/crisma.mp3" type="audio/mp3" />
        Seu navegador não suporta o elemento de áudio.
      </S.Audio>
      <S.Container>
        <S.TextContainer>
          <S.BigText>O que é o Sacramento do Crisma?</S.BigText>
          <S.DefaultText
            style={{
              borderBottom: "1px solid #D4D4D4",
              paddingBottom: "30px",
            }}
          >
            <span>
              Conheça o sacramento do Crisma, quem pode receber e ministrar,
              como ele é celebrado e quais os seus efeitos na vida dos que o
              recebem.
            </span>
          </S.DefaultText>
        </S.TextContainer>
      </S.Container>
    </div>
  );
};
