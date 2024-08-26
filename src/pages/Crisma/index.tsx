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
          <S.SmallText>
            Dentro de cada um de nós habita o Espírito de Deus. Ele nos conduz
            para realizarmos o chamado de Deus: a santidade. Somente pelo
            Espírito Santo, que nos capacita, podemos corresponder a Cristo e
            fazer o que Ele pede. E é no Sacramento da Confirmação que recebemos
            uma força do Espírito semelhante à que foi derramada em Pentecostes.
          </S.SmallText>
          <S.SmallText>
            Se permitirmos que a força do Espírito aja em nós como deseja,
            seremos como os primeiros cristãos: ávidos por conversão e ansiosos
            pela volta de Cristo. Assim, para compreender a ação do Espírito em
            nós, neste artigo, vamos abordar o que é o sacramento da
            Confirmação, como ele era prefigurado no Antigo Testamento, bem como
            sua presença no Novo, além de quais são os seus efeitos na nossa
            vida.
          </S.SmallText>
          <S.BigText id="oque-crisma">
            O que é o sacramento do Crisma?
          </S.BigText>
          <S.SmallText>
            A Crisma é o último Sacramento da iniciação na vida cristã,
            confirmando o batismo. Durante o rito, o fiel é ungido com óleo
            enquanto o sacerdote invoca o Espírito Santo, conforme descrito em (
            <a
              href="https://www.bibliaonline.com.br/acf/atos/8/14-17"
              target="blank"
            >
              Atos 8:14-17
            </a>
            ). Na Crisma, a graça recebida no batismo é fortalecida e selada
            dentro do fiel, como mencionado em (
            <a
              href="https://www.bibliaonline.com.br/nvi/2co/1/21,22"
              target="blank"
            >
              2Cor 1:21-22
            </a>
            ). Este sacramento proporciona a enraização da graça divina, une-nos
            mais a Cristo e aumenta em nós os dons do Espírito Santo. Além
            disso, nosso laço com a Santa Igreja se intensifica e se fortalece,
            conforme (
            <a
              href="https://www.bibliaonline.com.br/acf/rm/8/15,16"
              target="blank"
            >
              Rm 8:15-16
            </a>
            ).
          </S.SmallText>
          <S.SmallText>
            O sacramento da Confirmação é um dos sete sacramentos da Igreja
            Católica que, juntamente com o Batismo e a Eucaristia, constitui o
            conjunto dos sacramentos da iniciação cristã. É uma etapa
            fundamental na vida cristã, uma vez que por meio dele os batizados
            “são mais perfeitamente vinculados à Igreja, enriquecidos com uma
            força especial do Espírito Santo e deste modo ficam mais
            estritamente obrigados a difundir e a defender a fé por palavras e
            obras, como verdadeiras testemunhas de Cristo.”
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html"
                target="blank"
              >
                1
              </a>
            </sup>
          </S.SmallText>
          <S.SmallText>
            “Confirmação porque confirma o Batismo e reforça a sua graça; assim
            também “Crisma” porque recebemos o Espírito mediante a unção com o
            “crisma” – óleo consagrado pelo Bispo – termo que remete a “Cristo”,
            o Ungido pelo Espírito.”
            <sup>
              <a
                href="https://www.vaticannews.va/pt/papa/news/2018-05/papa-francisco-audiencia-geral-crisma.html"
                target="blank"
              >
                2
              </a>
            </sup>
            Sendo assim, a Confirmação é uma continuação da graça iniciada no
            Batismo.
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html"
                target="blank"
              >
                3
              </a>
            </sup>
            .
          </S.SmallText>
          <S.SmallText>
            De acordo com Santo Tomás de Aquino, “o efeito do sacramento é dar o
            Espírito Santo como fonte de fortaleza, como foi dado aos apóstolos
            no dia de Pentecostes, para que o cristão confesse corajosamente o
            nome de Cristo.”
          </S.SmallText>
          <S.DefaultText style={{ fontWeight: "bold", marginTop: "20px" }}>
            Quem pode receber o sacramento da confirmação?
          </S.DefaultText>
          <S.SmallText>
            Todo aquele que foi batizado, mas ainda não recebeu a Confirmação,
            pode e deve recebê-la, pois o Batismo, a Confirmação e a Eucaristia
            formam uma unidade fundamental na iniciação cristã.
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html"
                target="blank"
              >
                4
              </a>
            </sup>
          </S.SmallText>
          <S.SmallText>
            Vale ressaltar a importância dos sacramentos para a nossa salvação,
            especialmente quando a Igreja permite que eles sejam administrados
            “antes do tempo” em casos de perigo de morte. No costume latino, a
            “idade da discrição” — período em que uma criança alcança a
            capacidade de discernir entre o certo e o errado, por exemplo — é
            considerada como referência para receber a Confirmação. No entanto,
            em situações de perigo de morte, as crianças podem receber este
            sacramento, mesmo que não tenham atingido tal idade.
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html"
                target="blank"
              >
                5
              </a>
            </sup>
          </S.SmallText>
          <S.SmallText>
            A preparação para a Confirmação visa aprofundar a união do fiel com
            Cristo e conduzir a uma maior familiaridade com o Espírito Santo, a
            fim de que possa assumir verdadeira e conscientemente as
            responsabilidades cristãs. Sendo assim, a catequese deve despertar o
            senso de pertencimento à Igreja de Cristo, como um todo, bem como à
            comunidade paroquial.
          </S.SmallText>
          <S.SmallText>
            Além disso, para receber a Confirmação, é importante estar em estado
            de graça, portanto, recomenda-se buscar o sacramento da Penitência
            para se purificar em preparação para receber o Espírito Santo.
            Ademais, a oração desempenha um papel fundamental na disposição e
            docilidade para receber a força e as graças do Espírito Santo.
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html"
                target="blank"
              >
                6
              </a>
            </sup>
          </S.SmallText>
          <S.SmallText>
            Por fim, assim como para o Batismo, é aconselhável que os candidatos
            tenham um padrinho ou madrinha como apoio espiritual. Idealmente, o
            mesmo padrinho ou madrinha do Batismo deve ser escolhido para a
            Confirmação, enfatizando a unidade entre os dois sacramentos.
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html"
                target="blank"
              >
                7
              </a>
            </sup>
            .
          </S.SmallText>
          <S.DefaultText style={{ fontWeight: "bold", marginTop: "20px" }}>
            Quem pode administrar o sacramento do Crisma?
          </S.DefaultText>
          <S.SmallText>
            “O ministro originário da Confirmação é o bispo.”
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html"
                target="blank"
              >
                8
              </a>
            </sup>
            O sacramento do Crisma é administrado pelo bispo na Igreja Latina.
            No entanto, em algumas circunstâncias excepcionais e com a devida
            autorização do bispo diocesano, um presbítero (sacerdote) também
            pode administrar a Crisma.
          </S.SmallText>
          <S.SmallText>
            Já no Oriente, é frequentemente um sacerdote que administra a Crisma
            imediatamente após o Batismo, como parte dos sacramentos de
            iniciação cristã. Contudo, o santo crisma utilizado é consagrado
            pelo bispo, o que indica a unidade apostólica da Igreja.
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html"
                target="blank"
              >
                9
              </a>
            </sup>
          </S.SmallText>
          <S.SmallText>
            Mais uma vez, vale evidenciar a vontade da Igreja de que nenhum de
            seus filhos se perca, por isso “se um cristão estiver em perigo de
            morte, qualquer sacerdote pode conferir-lhe a Confirmação”
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html"
                target="blank"
              >
                10
              </a>
            </sup>
            , a fim de que nenhum fiel “parta deste mundo sem ter sido levado à
            perfeição pelo Espírito Santo com o dom da plenitude de Cristo.”
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html"
                target="blank"
              >
                11
              </a>
            </sup>
          </S.SmallText>
          <S.BigText id="crisma-biblia">
            Sacramento do Crisma na Bíblia
          </S.BigText>
          <S.SmallText>
            No Antigo Testamento, os profetas anunciavam que o Espírito do
            Senhor repousaria sobre o Messias, sinalizando sua missão redentora.
            Quando o Espírito Santo desceu sobre Jesus durante seu batismo por
            João, tornou-se ainda mais evidente que Ele era o Messias, o Filho
            de Deus. Na verdade, toda a vida e missão de Jesus foram permeadas
            por uma comunhão total com o Espírito Santo, que lhe foi dado pelo
            Pai sem medidas.
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html"
                target="blank"
              >
                12
              </a>
            </sup>
          </S.SmallText>
          <S.SmallText>
            Essa plenitude do Espírito, porém, não estava restrita apenas a
            Jesus, mas era destinada a ser compartilhada com todo o povo
            messiânico. Cristo prometeu esta efusão do Espírito, a qual ocorreu
            primeiro no dia da Ressurreição e de maneira mais notável no dia de
            Pentecostes. Os Apóstolos, cheios do Espírito Santo, começaram a
            proclamar as maravilhas de Deus, marcando o início dos tempos
            messiânicos. Aqueles que acreditaram na pregação apostólica e foram
            batizados receberam o dom do Espírito Santo.
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html"
                target="blank"
              >
                13
              </a>
            </sup>
            .
          </S.SmallText>
          <S.SmallText>
            Em seguida, os Apóstolos, a fim de cumprir a vontade de Deus,
            transmitiram aos neófitos — os recém-convertidos, que tinham sido
            batizados há pouco tempo, mas já atuavam na comunidade cristã — o
            dom do Espírito por meio da imposição das mãos. Essa prática,
            mencionada na Epístola aos Hebreus
            <sup>
              <a
                href="https://www.bibliaonline.com.br/acf/hb/6/2"
                target="blank"
              >
                14
              </a>
            </sup>
            , entre os elementos da primeira instrução cristã, é reconhecida
            pela Tradição católica como a origem do sacramento da Confirmação.
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html"
                target="blank"
              >
                15
              </a>
            </sup>
          </S.SmallText>
          <S.SmallText>
            E, logo, a unção com óleo perfumado, o crisma, foi acrescentada à
            imposição das mãos para simbolizar o dom do Espírito Santo. Essa
            unção reflete o nome “cristão”, que significa “ungido”, derivado do
            próprio nome de Cristo, que foi ungido com o Espírito Santo. O rito
            da unção permanece até hoje, tanto no Oriente, com o nome de
            crismação (unção do crisma); quanto no Ocidente, chamado aqui de
            Confirmação, uma vez que confirma e consolida a graça do Batismo.
          </S.SmallText>
          <S.BigText id="sinais-crisma">
            Sinais e rito do sacramento do Crisma
          </S.BigText>
          <S.SmallText>
            O sinal da unção com óleo é central neste sacramento, uma vez que o
            óleo sagrado chamado Santo Crisma é a matéria do sacramento da
            Confirmação. Tal unção é rica de significados, o óleo é símbolo de
            abundância, alegria, purificação, agilidade, cura e beleza. Além
            disso, na vida sacramental, essa unção tem diferentes propósitos:
            antes do Batismo, com o óleo dos catecúmenos, simboliza purificação
            e fortalecimento; na unção dos enfermos exprime cura e conforto. Já
            a unção com o santo crisma, que ocorre na Confirmação, é sinal de
            consagração.
          </S.SmallText>
          <S.SmallText>
            Nessa celebração, o confirmando recebe “a marca” ou o selo do
            Espírito Santo, que simboliza a pertença total a Cristo e a
            dedicação contínua ao Seu serviço. Assim como um selo autentica um
            documento ou objeto, esse selo espiritual autentica a relação do
            cristão com Deus e promete a proteção divina na grande provação
            escatológica, no fim dos tempos.
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html"
                target="blank"
              >
                16
              </a>
            </sup>
          </S.SmallText>
          <S.SmallText>
            A celebração da Confirmação é precedida por um momento importante, a
            consagração do santo crisma, que ocorre durante a missa crismal,
            normalmente na Quinta-Feira Santa. Nesse rito, o bispo consagra o
            santo crisma para toda a diocese. A liturgia neste momento expressa
            a invocação do Espírito Santo sobre o óleo, que se tornará um meio
            especial de graça e santificação para todos aqueles que serão
            ungidos e marcados por ele.
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html"
                target="blank"
              >
                17
              </a>
            </sup>
          </S.SmallText>
          <S.DefaultText style={{ fontWeight: "bold", marginTop: "20px" }}>
            Rito do sacramento
          </S.DefaultText>
          <S.SmallText>
            Na tradição latina, a celebração da Confirmação, é separada do
            Batismo e geralmente ocorre quando se atinge a idade da razão. Isso
            simboliza a continuidade e o aprofundamento do compromisso cristão.
            O rito começa com a renovação das promessas do Batismo e a profissão
            de fé dos confirmandos
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html"
                target="blank"
              >
                18
              </a>
            </sup>
            , destacando que a Confirmação é uma etapa subsequente ao Batismo.
            Em seguida, o bispo estende as mãos sobre eles, invocando a efusão
            do Espírito Santo por meio de uma oração solene, pedindo Seus dons
            sobre o grupo de confirmandos.
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html"
                target="blank"
              >
                19
              </a>
            </sup>
            .
          </S.SmallText>
          <S.SmallText>
            O rito essencial do sacramento, na tradição latina, ocorre através
            da unção do santo crisma na testa do confirmando, com a imposição
            das mãos do bispo, “gesto que, desde o tempo dos Apóstolos, é sinal
            do dom do Espírito.”
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html"
                target="blank"
              >
                20
              </a>
            </sup>
            As palavras proferidas nesse momento — ou seja, a forma do
            sacramento — ressoam a doação do Espírito Santo: “Recebe por este
            sinal o Espírito Santo, o Dom de Deus.”
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html"
                target="blank"
              >
                21
              </a>
            </sup>
            . Nas Igrejas orientais de rito bizantino, a unção é realizada sobre
            a fronte, os olhos, o nariz, os ouvidos, os lábios, o peito, as
            costas, as mãos e os pés, seguida da fórmula: “Selo do dom que é o
            Espírito Santo”
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html"
                target="blank"
              >
                22
              </a>
            </sup>
            .
          </S.SmallText>
          <S.SmallText>
            Santo Tomás de Aquino afirma que “o confirmado é ungido na testa
            sede da vergonha, para que ele não tenha vergonha de confessar o
            nome de Cristo, e especialmente a sua cruz, que é escândalo para
            judeus e loucura para gentios. Por isso também são marcados com o
            sinal da cruz.”
          </S.SmallText>
          <S.BigText id="efeito-crisma">
            Os efeitos do sacramento do Crisma na nossa vida
          </S.BigText>
          <S.SmallText>
            Assim como o Batismo, a Confirmação também é conferida apenas uma
            vez. Esse sacramento imprime em nossa alma um selo que não pode ser
            apagado, o “caráter”, que indica que somos marcados por Cristo e
            revestidos de Sua força para sermos Suas testemunhas.
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html"
                target="blank"
              >
                23
              </a>
            </sup>
          </S.SmallText>
          <S.SmallText>
            O “caráter” aperfeiçoa o sacerdócio comum dos fiéis, recebido no
            Batismo, e nos capacita a confessar a fé de Cristo publicamente,
            quase como um encargo oficial, fortalecendo-nos para enfrentar os
            desafios da vida cristã com coragem e valentia.
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html"
                target="blank"
              >
                24
              </a>
            </sup>
            .
          </S.SmallText>
          <S.SmallText>
            Além disso, por meio deste sacramento, experimentamos uma efusão
            especial do Espírito Santo, semelhante àquela concedida aos
            Apóstolos no dia de Pentecostes. Por isso, a Confirmação nos une de
            forma mais sólida a Cristo, aumenta os dons do Espírito Santo em nós
            e aperfeiçoa o nosso vínculo com a Igreja. Ademais, este sacramento
            nos concede uma força especial do Espírito Santo a qual nos capacita
            a propagar e defender a fé, bem como a testemunhar corajosamente
            Cristo e a confessar o nome de Cristo sem hesitação, mesmo diante da
            cruz.
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html"
                target="blank"
              >
                25
              </a>
            </sup>
          </S.SmallText>
          <S.SmallText>
            “Sem a força do Espírito Santo não podemos fazer nada. Assim como
            toda a vida de Jesus foi animada pelo Espírito, assim também a vida
            da Igreja e de cada membro seu está sob a guia do mesmo Espírito.”
            <sup>
              <a
                href="https://www.vaticannews.va/pt/papa/news/2018-05/papa-francisco-audiencia-geral-crisma.html"
                target="blank"
              >
                26
              </a>
            </sup>
          </S.SmallText>
          <S.DefaultText style={{ fontWeight: "bold", margin: "30px 0px" }}>
            Referências
          </S.DefaultText>
          <S.SmallText
            style={{
              paddingBottom: "30px",
              borderBottom: "1px solid #D4D4D4",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>1. CIC, 1285</span>
            <span>
              2. VATICAN NEWS, Papa: com o Sacramento do Crisma ser sal e luz do
              mundo
            </span>
            <span>3. CIC 1298</span>
            <span>4. CIC, 1306</span>
            <span>5. CIC, 1307</span>
            <span>6. CIC, 1310</span>
            <span>7. CIC, 1311</span>
            <span>8, 9. CIC, 1312</span>
            <span>10, 11. CIC, 1314</span>
            <span>12. CIC, 1286</span>
            <span>13. CIC, 1287</span>
            <span>14. Hb 6, 2</span>
            <span>15. CIC, 1288</span>
            <span>16. CIC, 1295</span>
            <span>17. CIC, 1297</span>
            <span>18. CIC, 1298</span>
            <span>19, 20. CIC, 1299</span>
            <span>21, 22. CIC, 1300</span>
            <span>23. CIC, 1304</span>
            <span>24. CIC, 1305</span>
            <span>25. CIC,1303</span>
            <span>
              26. VATICAN NEWS, Papa: com o Sacramento do Crisma ser sal e luz
              do mundo
            </span>
          </S.SmallText>
        </S.TextContainer>
        <S.LinksContainer>
          <h3>O que você vai encontrar neste artigo?</h3>
          <a href="#oque-crisma">O que é o sacramento do Crisma?</a>
          <a href="#crisma-biblia">Sacramento do Crisma na Bíblia</a>
          <a href="#sinais-crisma">Sinais e rito do sacramento do Crisma</a>
          <a href="#efeito-crisma">
            Os efeitos do sacramento do Crisma na nossa vida
          </a>
        </S.LinksContainer>
      </S.Container>
    </div>
  );
};

export default Crisma;
