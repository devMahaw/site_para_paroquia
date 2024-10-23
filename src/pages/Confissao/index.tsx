import * as S from "../../styles";

const Confissao = () => {
  return (
    <div style={{ margin: "50px" }}>
      <S.ImageContainer>
        <S.Image src="assets/confissao/confissaoo.jpg" alt="Confissão" />
      </S.ImageContainer>
      <S.Container>
        <S.TextContainer>
          <S.BigText>O que é o Sacramento da Confissão?</S.BigText>
          <S.DefaultText
            style={{
              borderBottom: "1px solid #D4D4D4",
              paddingBottom: "30px",
            }}
          >
            <span>
              Entenda o sacramento da confissão, a sua importância em nossa vida
              de fé, como devemos confessar e quais seus efeitos na vida do
              cristão.
            </span>
          </S.DefaultText>
          <S.SmallText>
            Cristo instituiu o sacramento da Confissão — também conhecido como
            Reconciliação ou Penitência — para restaurar a graça da justificação
            aos membros pecadores da Igreja. Ele oferece a oportunidade de
            conversão e reconciliação, especialmente para aqueles que caíram em
            pecado grave após o Batismo. Os Padres da Igreja consideram esse
            sacramento como a “segunda tábua de salvação” para aqueles que
            perderam a graça.
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1420-1532_po.html"
                target="blank"
              >
                1
              </a>
            </sup>
            Assim, a confissão e a busca pelo perdão são fundamentais tanto no
            Antigo quanto no Novo Testamento e culminam na instituição do
            Sacramento da Confissão.
          </S.SmallText>
          <S.SmallText>
            Neste artigo, exploraremos a prática do sacramento da confissão, as
            condições necessárias para que seja válida, bem como seus efeitos na
            nossa vida. Além disso, examinaremos suas raízes bíblicas e o rito
            que o envolve.
          </S.SmallText>
        </S.TextContainer>
      </S.Container>
    </div>
  );
};

export default Confissao;
