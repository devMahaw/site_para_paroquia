import * as S from "../../styles";

const Ordem = () => {
  return (
    <div style={{ margin: "50px" }}>
      <S.ImageContainer>
        <S.Image src="assets/ordem/ordeem.jpg" alt="Ordem" />
      </S.ImageContainer>
      <S.Container>
        <S.TextContainer>
          <S.BigText>O que é o Sacramento da Ordem?</S.BigText>
          <S.DefaultText
            style={{
              borderBottom: "1px solid #D4D4D4",
              paddingBottom: "30px",
            }}
          >
            <span>
              Saiba o que é o sacramento da ordem, a sua origem na Palavra e na
              vida de Jesus e descubra quem pode recebê-lo e como está a serviço
              da Igreja.
            </span>
          </S.DefaultText>
          <S.SmallText>
            Saiba o que é o sacramento da ordem, a sua origem na Palavra e na
            vida de Jesus e descubra quem pode recebê-lo e como está a serviço
            da Igreja.
          </S.SmallText>
          <S.SmallText>
            A administração dos sacramentos foi confiada à Igreja. O Batismo, a
            Confirmação e a Eucaristia são os três fundamentos da iniciação
            cristã e, por isso, necessários à nossa salvação. Juntamente com a
            Penitência e a Unção dos enfermos podemos alcançar a perfeição
            cristã. No entanto, ainda que sua eficácia dependa de Cristo, uma
            vez que tais sacramentos devem ser conferidos por ministros
            designados, “foi necessário o sacramento da Ordem, por cujo
            ministério se dispensam esses sacramentos.”
          </S.SmallText>
          <S.SmallText>
            Assim, este sacramento é estabelecido para o benefício da Igreja,
            pois nele a graça divina é generosamente concedida ao ministro,
            capacitando-o a agir em nome de Cristo para servir os fiéis.
            Consequentemente, o sacramento da ordem reforça ainda mais a missão
            do ministro como um representante de Cristo. Neste artigo, vamos
            abordar o que este sacramento significa para a Igreja, sua
            fundamentação na Bíblia, bem como suas funções e efeitos.
          </S.SmallText>
          <S.BigText>O que é o sacramento da Ordem?</S.BigText>
          <S.SmallText>
            O Sacramento da Ordem confere a autoridade para exercer funções e
            ministérios eclesiásticos relacionados ao culto de Deus e à salvação
            das almas. Este sacramento possui três graus: o episcopado, o
            presbiterado e o diaconato. No episcopado, os bispos, sucessores dos
            apóstolos, são encarregados dos ofícios de ensinar, santificar e
            reger, como citado em (
            <a
              href="https://www.bibliaonline.com.br/nvi/atos/20/28"
              target="blank"
            >
              Atos 20, 28
            </a>
            ). O presbiterado, exercido pelos padres, permite-lhes agir em nome
            de Cristo cabeça e ministrar o culto divino, conforme mencionado em
            (
            <a
              href="https://www.bibliaonline.com.br/nvi/1tm/5/17"
              target="blank"
            >
              1 Timóteo 5, 17
            </a>
            ). O diaconato destina-se ao serviço na Igreja, englobando o culto
            divino, a pregação, a orientação e, sobretudo, a caridade, como
            indicado em (
            <a
              href="https://www.bibliaonline.com.br/nvi/1tm/3/8-13"
              target="blank"
            >
              1 Timóteo 3, 8-13
            </a>
            ).
          </S.SmallText>
          <S.SmallText>
            O Sacramento da Ordem desempenha um papel vital na estrutura e na
            missão da Igreja, sendo
            <strong>
              um meio pelo qual a graça divina é transmitida aos fiéis
            </strong>
            através da ordenação de homens para o ministério sacerdotal. Sendo
            assim, “a Ordem é o sacramento graças ao qual a missão confiada por
            Cristo aos Apóstolos continua a ser exercida na Igreja, até ao fim
            dos tempos: é, portanto, o sacramento do ministério apostólico.”
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap3_1533-1666_po.html"
                target="blank"
              >
                1
              </a>
            </sup>
          </S.SmallText>
        </S.TextContainer>
      </S.Container>
    </div>
  );
};

export default Ordem;
