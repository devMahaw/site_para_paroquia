import * as S from "../../styles";

const Eucaristia = () => {
  return (
    <div style={{ margin: "50px 100px" }}>
      <S.ImageContainer>
        <S.Image src="assets/eucaristia/santaCeia.png" alt="Eucaristia" />
      </S.ImageContainer>
      <audio controls style={{ transform: "scale(1.5)", marginLeft: "50px" }}>
        <source src="assets/eucaristia/eucaristia.mp3" type="audio/mp3" />
        Seu navegador não suporta o elemento de áudio.
      </audio>
      <div style={{ display: "flex" }}>
        <div style={{ width: "80%" }}>
          <S.BigText>O que é o Sacramento da Eucaristia?</S.BigText>
          <S.DefaultText
            style={{
              borderBottom: "1px solid #D4D4D4",
              paddingBottom: "30px",
            }}
          >
            <span>
              Conheça o sacramento da Eucaristia, como ele é celebrado, como
              aparece na Bíblia e quais frutos recebem aqueles que comungam.
            </span>
          </S.DefaultText>

          <S.SmallText>
            O Sacramento da Eucaristia é o memorial morte e ressurreição do
            Senhor, por isso nós a celebramos como Ele nos instruiu — até que
            volte. É o próprio Corpo e Sangue de Cristo dentro de nós. Assim
            como precisamos do alimento corporal, a nossa alma necessita desse
            alimento espiritual para viver.
          </S.SmallText>
          <S.SmallText>
            Além disso, muitas são as graças e os frutos que recebemos quando
            comungamos. Alguns santos, como São Felipe Néri, enfatizavam que a
            devoção ao Santíssimo Sacramento é a única maneira de manter a
            pureza. E, neste artigo, vamos compreender de forma mais profunda o
            que é o sacramento da Eucaristia, como ele é celebrado, e conhecer
            os seus frutos na vida de quem O recebe.
          </S.SmallText>
          <S.BigText id="oque-eucaristia">
            O que é o sacramento da Eucaristia?
          </S.BigText>
          <S.SmallText>
            A Eucaristia é o segundo Sacramento, onde é assim chamado quando o
            pão e vinho se transformam no corpo de Cristo. O sacerdote ao agir
            in persona Christi e consagrar a hóstia, toda a substância é mudada,
            transmutada, transubstanciada, a substância do pão é convertida no
            corpo de Cristo e o vinho convertida no sangue dele, ali já não é
            mais pão e nem vinho, seria ímpio afirmar tal coisa, ali é apenas e
            somente o corpo de Cristo, embora na figura e aparência de pão, não
            é pão, mas o Santíssimo Cristo em Corpo, Sangue, Alma e Divindade,
            como vemos em (
            <a
              href="https://www.bibliaonline.com.br/nvi/mt/26/26-28"
              target="blank"
            >
              Mt 26,26-28
            </a>
            ) e (
            <a
              href="https://www.bibliaonline.com.br/acf/1co/10/16"
              target="blank"
            >
              1Cor 10,16
            </a>
            ). A Eucaristia é adorada, pois é o corpo físico de Cristo e deve
            receber toda honra e glória possível.
          </S.SmallText>
          <S.SmallText>
            O sacramento da Eucaristia completa a iniciação cristã, isto é,
            aqueles que receberam o Batismo e a Confirmação e, portanto, são
            membros da Igreja e se deixam configurar a Cristo pelo Seu Espírito,
            podem por meio da Eucaristia ter participação no próprio
            <strong>sacrifício do Senhor</strong>, juntamente com a comunidade
            dos fiéis.
          </S.SmallText>
          <S.SmallText>
            Instituído por Jesus na Última Ceia, a Eucaristia é “o sacrifício
            eucarístico do seu corpo e sangue”
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html"
                target="blank"
              >
                1
              </a>
            </sup>
            , o<strong>memorial contínuo de Sua morte e ressurreição</strong>
            confiado à Igreja, Sua esposa, até que Ele volte.
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html"
                target="blank"
              >
                2
              </a>
            </sup>
            A Eucaristia é, ao mesmo tempo, a fonte e o cume de toda a vida
            cristã. Os outros sacramentos estão em função deste, pois “na
            santíssima Eucaristia está contido todo
            <strong>
              o tesouro espiritual da Igreja, isto é, o próprio Cristo
            </strong>
            , nossa Páscoa.”
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html"
                target="blank"
              >
                3
              </a>
            </sup>
            A Eucaristia é o ápice da ação pela qual Deus santifica o mundo e da
            adoração oferecida a Cristo e ao Pai.
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
            Tamanha é a riqueza deste mistério que muitos nomes podem fazer
            referência à Eucaristia. Entre eles, Ceia do Senhor, Fração do Pão,
            Comunhão, Santo Sacrifício, e outros, cada um revelando uma dimensão
            única do mistério deste sacramento.
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html"
                target="blank"
              >
                5
              </a>
            </sup>
            Além disso, a maneira como Cristo está presente nas espécies
            eucarísticas é única e isso eleva a Eucaristia
            <strong>acima de todos os outros sacramentos</strong> e a torna o
            ápice da vida espiritual e o objetivo para o qual todos os
            sacramentos apontam.
          </S.SmallText>
          <S.SmallText>
            “No santíssimo sacramento da Eucaristia estão «contidos, verdadeira,
            real e substancialmente, o corpo e o sangue, conjuntamente com a
            alma e a divindade de nosso Senhor Jesus Cristo e, por conseguinte,
            Cristo completo”
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html"
                target="blank"
              >
                6
              </a>
            </sup>
            Por isso, essa presença é chamada de “real” — não porque as outras
            presenças não sejam reais, mas porque é a presença substancial de
            Cristo, Deus e homem, de maneira única e completa.
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html"
                target="blank"
              >
                7
              </a>
            </sup>
          </S.SmallText>
          <S.BigText id="eucaristia-biblia">
            Sacramento da Eucaristia na Bíblia
          </S.BigText>
          <S.SmallText>
            No Antigo Testamento, a busca por um sacerdote imaculado e uma
            vítima perfeita era impossível, pois os sacerdotes eram pecadores e
            as vítimas imperfeitas. As exortações dos profetas ressaltavam o
            desejo de Deus: um coração humano que O amasse sinceramente e O
            adorasse de todo o coração. E essa essa aspiração só se realiza com
            a Eucaristia, onde Cristo se tornou humano para que um coração
            humano pudesse amar a Deus e oferecer um sacrifício perfeito.
          </S.SmallText>
          <S.SmallText>
            Além disso, várias prefigurações bíblicas lançam luz sobre o
            significado da Eucaristia. Desde o ato de
            <strong>
              Melquisedeque, o rei e sacerdote, que ofereceu pão e vinho
            </strong>
            <sup>
              <a
                href="https://www.bibliaonline.com.br/acf/gn/14/18"
                target="blank"
              >
                8
              </a>
            </sup>
            , até <strong>os milagres da multiplicação dos pães</strong>
            <sup>
              <a
                href="https://www.bibliaonline.com.br/acf/jo/6/5-13"
                target="blank"
              >
                9
              </a>
            </sup>
            e da
            <strong>transformação da água em vinho em Caná</strong>.
            <sup>
              <a
                href="https://www.bibliaonline.com.br/acf/jo/2/1-11"
                target="blank"
              >
                10
              </a>
            </sup>
            Tais eventos apontam para a abundância e a glória presentes na
            Eucaristia
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html"
                target="blank"
              >
                11
              </a>
            </sup>
            , na qual os elementos do pão e do vinho ganham um novo sentido — a
            redenção realizada por Cristo no seu sacrifício.
          </S.SmallText>
          <S.DefaultText style={{ fontWeight: "bold", marginTop: "20px" }}>
            A Nova Aliança
          </S.DefaultText>
          <S.SmallText>
            A escolha de Jesus em estabelecer a Eucaristia durante a celebração
            da Páscoa judaica
            <sup>
              <a
                href="https://www.bibliaonline.com.br/acf/lc/22/7-20"
                target="blank"
              >
                12
              </a>
            </sup>
            também confere profundidade e plenitude ao sacramento.
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html"
                target="blank"
              >
                13
              </a>
            </sup>
            Nesse contexto, Ele tomou o pão e o cálice do vinho, abençoou-os e
            declarou que eles eram Seu corpo e sangue, inaugurando assim a Nova
            Aliança.
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html"
                target="blank"
              >
                14
              </a>
            </sup>
            Ao ordenar que esses gestos e palavras fossem perpetuados — “Fazei
            isto em memória de Mim”
            <sup>
              <a
                href="https://www.bibliaonline.com.br/acf/lc/22/19"
                target="blank"
              >
                15
              </a>
            </sup>
            —, Jesus visava à celebração litúrgica da Eucaristia, um memorial
            vivo de Sua vida, morte, ressurreição e intercessão diante do Pai.
            <sup>
              <a
                href="https://www.bibliaonline.com.br/acf/1co/11/23-26"
                target="blank"
              >
                16
              </a>
            </sup>
            .
          </S.SmallText>
          <S.SmallText>
            Portanto, Santo Tomás, em suas catequeses, deixa claro que é um erro
            dizer que o corpo de Cristo não está presente de verdade no
            sacramento, mas apenas de forma simbólica. Pois é Cristo quem afirma
            “A minha carne é verdadeiramente comida, e o meu sangue é
            verdadeiramente bebida”
            <sup>
              <a
                href="https://www.bibliaonline.com.br/acf/jo/6/56"
                target="blank"
              >
                17
              </a>
            </sup>
            .
          </S.SmallText>
          <S.SmallText>
            Sendo assim, desde os primeiros tempos da Igreja, a prática de
            celebrar a Eucaristia tem sido mantida
            <sup>
              <a
                href="https://www.bibliaonline.com.br/nvi/atos/20/7"
                target="blank"
              >
                18
              </a>
            </sup>
            , principalmente no domingo, o dia da ressurreição de Jesus.
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html"
                target="blank"
              >
                19
              </a>
            </sup>
            Essa celebração, de geração em geração, proclama o mistério pascal
            de Jesus e orienta o seu povo em sua jornada rumo ao banquete
            celestial do Reino. Assim, a Eucaristia se mantém como o centro da
            vida da Igreja, afinal Cristo mesmo nos disse: “Quem come a minha
            carne e bebe o meu sangue permanece em Mim e Eu nele.”
            <sup>
              <a
                href="https://www.bibliaonline.com.br/acf/jo/6/56"
                target="blank"
              >
                20
              </a>
            </sup>
          </S.SmallText>
          <S.BigText id="celebracao-eucaristia">
            Celebração do sacramento da Eucaristia
          </S.BigText>
          <S.SmallText>
            Na celebração eucarística, os fiéis se reúnem como uma assembleia em
            torno de Cristo, o Sumo Sacerdote da Nova Aliança, que preside
            através do bispo ou do presbítero — o qual age “na pessoa de
            Cristo-Cabeça.”
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html"
                target="blank"
              >
                21
              </a>
            </sup>
            Somente os sacerdotes validamente ordenados podem presidir à
            Eucaristia e consagrar o pão e o vinho, para que se tornem o corpo e
            o sangue do Senhor.
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html"
                target="blank"
              >
                22
              </a>
            </sup>
          </S.SmallText>
          <S.SmallText>
            Todos desempenham um papel ativo, desde os leitores até os
            ofertantes, na liturgia da Palavra, que inclui a proclamação das
            Escrituras, seguida de preces pela humanidade.
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html"
                target="blank"
              >
                23
              </a>
            </sup>
            Na apresentação das oferendas, os fiéis trazem pão e vinho. Santo
            Tomás enfatiza que o pão deve ser de trigo e o vinho da videira, de
            modo que o sacramento não pode ser feito com outro tipo de pão ou de
            vinho. Este último é misturado com um pouco de água, que se
            transforma em vinho, “pois a água representa o povo que se incorpora
            a Cristo.”
          </S.SmallText>
          <S.SmallText>
            Estas oferendas — pão e vinho — representam nossas vidas e esforços,
            que serão consagrados durante a Oração Eucarística.
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html"
                target="blank"
              >
                24
              </a>
            </sup>
            Essa oração é o ápice da Missa, onde o sacerdote invoca o Espírito
            Santo sobre o pão e o vinho, como na Última Ceia.
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html"
                target="blank"
              >
                25
              </a>
            </sup>
          </S.SmallText>
          <S.DefaultText style={{ fontWeight: "bold", marginTop: "20px" }}>
            A transubstanciação
          </S.DefaultText>
          <S.SmallText>
            Em seguida, o sacerdote — falando na pessoa de Cristo, realiza o
            sacramento — pronuncia as palavras da Consagração, a forma do
            sacramento: “Isto é o meu Corpo”, para a consagração do pão; “Este é
            o cálice do meu sangue, do sangue da nova e eterna aliança, mistério
            da Fé, que será derramado para vós e para muitos para o perdão dos
            pecados”, para a consagração do vinho. Neste momento, o pão se torna
            o Corpo de Cristo e o vinho se torna o Seu Sangue.
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html"
                target="blank"
              >
                26
              </a>
            </sup>
            Essa transformação recebe o nome de
            <strong>transubstanciação</strong>.
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html"
                target="blank"
              >
                27
              </a>
            </sup>
          </S.SmallText>
          <S.SmallText>
            Na comunhão, após a Oração do Senhor e a fracção do pão, os fiéis
            recebem “o pão do céu” e “o cálice da salvação” — o corpo e o sangue
            de Cristo, que Se entregou para a vida do mundo.
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html"
                target="blank"
              >
                28
              </a>
            </sup>
            “A presença eucarística de Cristo começa no momento da consagração e
            dura enquanto as espécies eucarísticas subsistirem. Cristo está
            presente todo em cada uma das espécies e todo em cada uma das suas
            partes, de maneira que a fracção do pão não divide Cristo”
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html"
                target="blank"
              >
                29
              </a>
            </sup>
          </S.SmallText>
          <S.BigText id="eucaristia-diaria">
            Sacramento da Eucaristia na nossa vida diária: os frutos da comunhão
          </S.BigText>
          <S.SmallText>
            A Eucaristia é uma antecipação da glória celeste, uma vez que é o
            memorial da morte e ressurreição de Jesus. Por meio dela somos
            cumulados da plenitude das bênçãos e graças do Céu. No entanto, para
            receber algo tão grandioso, o verdadeiro tesouro da Igreja — a
            Eucaristia — precisamos estar em estado de graça. “Se alguém tiver
            consciência de ter pecado mortalmente, não deve aproximar-se da
            Eucaristia sem primeiro ter recebido a absolvição no sacramento da
            Penitência.”
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html"
                target="blank"
              >
                30
              </a>
            </sup>
          </S.SmallText>
          <S.SmallText>
            Muitos são os frutos da Comunhão, na nossa alma e na nossa vida. “O
            que o alimento material produz na nossa vida corporal, realiza-o a
            Comunhão, de modo admirável, na nossa vida espiritual.”
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html"
                target="blank"
              >
                31
              </a>
            </sup>
            Afinal, a graça que nos é dada na Eucaristia é a presença do próprio
            Jesus Cristo na nossa alma, com seu Corpo, Sangue, Alma e Divindade.
          </S.SmallText>
          <S.SmallText>
            A Comunhão
            <strong>
              aumenta a união do fiel com o Senhor, perdoa-lhe os pecados
              veniais e o preserva dos pecados mortais futuros
            </strong>
            . Dessa forma, reforça a unidade do Corpo de Cristo, que é a Igreja,
            e a compromete com os mais necessitados. Além disso, a Eucaristia
            também é celebrada para reparar os pecados dos vivos e dos defuntos
            e para obter de Deus benefícios espirituais e temporais.
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html"
                target="blank"
              >
                32
              </a>
            </sup>
          </S.SmallText>
          <S.SmallText>
            Que a Virgem Maria, Aquela que primeiro carregou Jesus, interceda
            por nós e nos ajude a ter mais fé na Eucaristia. Pois “quanto mais
            viva for a fé eucarística no povo de Deus, tanto mais profunda será
            a sua participação na vida eclesial por meio duma adesão convicta à
            missão que Cristo confiou aos seus discípulos.”
            <sup>
              <a
                href="https://www.vatican.va/content/benedict-xvi/pt/apost_exhortations/documents/hf_ben-xvi_exh_20070222_sacramentum-caritatis.html"
                target="blank"
              >
                33
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
            <span>1, 2. CIC, 1323</span>
            <span>3. CIC, 1324</span>
            <span>4. CIC, 1325</span>
            <span>5. CIC, 1328-1331</span>
            <span>6, 7. CIC, 1374</span>
            <span>8. Gn 14, 18</span>
            <span>9. Jo 6, 5-13</span>
            <span>10. Jo 2, 1-11</span>
            <span>11. CIC, 1334-1335</span>
            <span>12. Lc 22, 7-20</span>
            <span>13. CIC, 1338</span>
            <span>14. CIC 1340</span>
            <span>15. Lc 22, 19</span>
            <span>16. 1 Cor 11, 23-26</span>
            <span>17, 20. Jo 6,56</span>
            <span>18. Jo 6,56</span>
            <span>19. CIC, 1343</span>
            <span>21. CIC, 1348</span>
            <span>22. CIC, 1411</span>
            <span>23. CIC, 1349</span>
            <span>24. CIC, 1350</span>
            <span>25. CIC 1352</span>
            <span>26, 27. CIC, 1353-1355</span>
            <span>28. CIC, 1355</span>
            <span>29. CIC, 1377</span>
            <span>30. CIC, 1415</span>
            <span>31. CIC, 1392</span>
            <span>32. CIC, 1414</span>
            <span>
              33. Bento XVI, Sacramentum Caritatis, Exortação Apostólica
            </span>
          </S.SmallText>
        </div>
        <S.LinksContainer>
          <h3>O que você vai encontrar neste artigo?</h3>
          <a href="#oque-eucaristia">O que é o sacramento da Eucaristia?</a>
          <a href="#eucaristia-biblia">Sacramento da Eucaristia na Bíblia</a>
          <a href="#celebracao-eucaristia">
            Celebração do sacramento da Eucaristia
          </a>
          <a href="#eucaristia-diaria">
            Sacramento da Eucaristia na nossa vida diária: os frutos da comunhão
          </a>
        </S.LinksContainer>
      </div>
    </div>
  );
};

export default Eucaristia;
