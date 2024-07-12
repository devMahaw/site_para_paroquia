import * as S from "../../styles";

const Batismo = () => {
  return (
    <div style={{ margin: "50px 100px" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          style={{
            borderRadius: "20px",
            width: "1200px",
            height: "600px",
            margin: "120px 0px",
            objectFit: "cover",
          }}
          src="assets/batismo/batismo_bb.jpg"
          alt="Batismo"
        />
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ width: "80%" }}>
          <S.BigText>O que é o Sacramento do Batismo?</S.BigText>
          <S.DefaultText
            style={{
              borderBottom: "1px solid #D4D4D4",
              paddingBottom: "30px",
            }}
          >
            <span>
              Saiba o que é o sacramento do Batismo, como ele é celebrado, como
              aparece na Bíblia e conheça seus efeitos na vida dos batizados.
            </span>
          </S.DefaultText>
          <S.SmallText>
            “O próprio Senhor afirma que o Sacramento do Batismo é necessário
            para a salvação. Por isso, ordenou aos seus discípulos que
            anunciassem o Evangelho e batizassem todas as nações.”&nbsp;
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html"
                target="blank"
              >
                1
              </a>
            </sup>
            &nbsp; O Batismo, embora invisível aos olhos humanos, imprime em nós
            um selo eterno do Altíssimo. Após o Batismo, nada pode apagar nossa
            identidade como filhos de Deus — nem o pecado, embora ele prejudique
            os frutos do sacramento.
          </S.SmallText>
          <S.SmallText>
            Neste artigo, vamos abordar o que é o Sacramento do Batismo e tudo o
            que o envolve. Desde como ele é celebrado, passando pela sua
            prefiguração na Antiga Aliança, sua origem no ministério de Cristo,
            até a sua prática na nossa vida diária. Assim, compreenderemos a sua
            importância em nossa vida.
          </S.SmallText>
          <S.BigText>O que é um sacramento?</S.BigText>
          <S.SmallText>
            Os sacramentos são sinais eficazes da graça divina, Jesus Cristo os
            estabeleceu e os confiou à Igreja para transmitirem a Sua
            graça.&nbsp;
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s1cap1_1076-1134_po.html#:~:text=1131.,é%20dispensada%20a%20vida%20divina."
                target="blank"
              >
                2
              </a>
            </sup>
            &nbsp; Cada sacramento possui sua própria forma, matéria e graça
            específicas, por isso através de ritos sensíveis, eles “significam e
            realizam as graças próprias de cada sacramento.”&nbsp;
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s1cap1_1076-1134_po.html#:~:text=1131.,é%20dispensada%20a%20vida%20divina."
                target="blank"
              >
                3
              </a>
            </sup>
          </S.SmallText>
          <S.SmallText>
            Dessa forma, os sacramentos são compostos por uma dimensão sensível,
            expressa pela matéria e pela forma, isto é, pelas palavras e ações
            executadas durante a cerimônia, bem como por um aspecto invisível
            que confere eficácia ao sacramento: a graça.
          </S.SmallText>
          <S.SmallText>
            A origem dos sacramentos encontra-se na vida e nos ensinamentos de
            Jesus Cristo. Por meio deles, a Igreja continua a dispensar as
            graças divinas, a fim de nos salvar e santificar. Portanto, eles são
            fundamentais para a nossa salvação, uma vez que nos unem a Cristo e
            à Sua obra redentora.
          </S.SmallText>
        </div>
      </div>
    </div>
  );
};

export default Batismo;
