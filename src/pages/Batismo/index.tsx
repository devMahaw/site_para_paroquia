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
      <audio controls style={{ transform: "scale(1.5)", marginLeft: "50px" }}>
        <source src="assets/batismo/batismo.mp3" type="audio/mp3" />
        Seu navegador não suporta o elemento de áudio.
      </audio>
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
          <S.BigText id="oque-sacramento">O que é um sacramento?</S.BigText>
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
          <S.BigText id="oque-batismo">
            O que é o sacramento do Batismo?
          </S.BigText>
          <S.SmallText>
            O batismo é o primeiro Sacramento, onde você é iniciado na vida
            cristã, você só pode receber os outros Sacramentos caso tenha o
            batismo. No batismo, a graça divina é derramada na sua alma, você é
            completamente regenerado, é retirado o pecado original, de santo
            Adão e santa Eva, é retirado todo pecado venial e mortal já cometido
            e até as penas desses pecados são completamente retirados, como
            podemos ver em (
            <a
              href="https://www.bibliaonline.com.br/nvi/atos/22/16"
              target="blank"
            >
              Atos 22, 16
            </a>
            ).
          </S.SmallText>
          <S.SmallText>
            O sacramento do Batismo é, em primeiro lugar,{" "}
            <b>o fundamento de toda a vida cristã</b> e a porta que dá acesso
            aos outros sacramentos.&nbsp;
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html#:~:text=1213.,dá%20acesso%20aos%20outros%20sacramentos."
                target="blank"
              >
                4
              </a>
            </sup>
            &nbsp;“Pelo Baptismo somos libertos do pecado e regenerados como
            filhos de Deus: tornamo-nos membros de Cristo e somos incorporados
            na Igreja e tornados participantes na sua missão.”&nbsp;
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html#:~:text=1213.,dá%20acesso%20aos%20outros%20sacramentos."
                target="blank"
              >
                5
              </a>
            </sup>
          </S.SmallText>
          <S.SmallText>
            O nome “Batismo” vem do rito central, que envolve a imersão na água.
            Isso simboliza a jornada de morte e ressurreição de Cristo. A
            imersão é como uma espécie de sepultura, na qual a nossa antiga vida
            marcada pelo pecado “morre” e emergimos como uma “nova
            criatura.”&nbsp;
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html#:~:text=1213.,dá%20acesso%20aos%20outros%20sacramentos."
                target="blank"
              >
                6
              </a>
            </sup>
            &nbsp; Além disso, o Batismo é chamado de “banho da regeneração e
            renovação no Espírito Santo”, pois representa{" "}
            <b>o novo nascimento pela água e pelo Espírito</b> — que é
            necessário para entrar no Reino de Deus.&nbsp;
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html#:~:text=1213.,dá%20acesso%20aos%20outros%20sacramentos."
                target="blank"
              >
                7
              </a>
            </sup>
          </S.SmallText>
          <S.SmallText>
            Sendo assim, os batizados — que se tornam filhos de Deus e membros
            da Igreja — têm a responsabilidade de declarar e viver a fé que
            receberam de Deus através da Igreja. Além disso, são chamados a se
            envolver na missão apostólica do povo de Deus e contribuir
            ativamente na difusão dos valores cristãos.&nbsp;
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html"
                target="blank"
              >
                8
              </a>
            </sup>
          </S.SmallText>
          <S.SmallText>
            O efeito do batismo, segundo Santo Tomás de Aquino, é a remissão do
            pecado original e atual. Por isso, não se impõem aos batizados,
            mesmo adultos, qualquer reparação pelos seus pecados passados. De
            tal modo que “se morressem logo após o Batismo, seriam introduzidos
            imediatamente na glória de Deus. Por isso o efeito do Batismo é a
            abertura das portas do Paraíso.”
          </S.SmallText>
          <S.DefaultText
            style={{
              padding: "30px 0px",
              fontWeight: "bold",
              fontSize: "30px",
            }}
          >
            Quem pode ser batizado?
          </S.DefaultText>
          <S.SmallText>
            Todo o ser humano ainda não batizado pode receber o Batismo&nbsp;
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html"
                target="blank"
              >
                9
              </a>
            </sup>
            , independentemente da idade. Seja um adulto que abraça o
            cristianismo, seja um recém-nascido, o Batismo oferece a graça
            salvífica de Deus necessária para a nossa salvação. No caso das
            crianças, os pais têm o dever de educá-las na fé católica, e os
            padrinhos também assumem a responsabilidade de orientá-las na
            compreensão dos princípios cristãos e da vida espiritual.
          </S.SmallText>
          <S.SmallText>
            Além disso, o Batismo — assim como a Confirmação — imprime na alma
            do Cristão um sinal espiritual indelével de pertença a Cristo&nbsp;
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html"
                target="blank"
              >
                10
              </a>
            </sup>
            , por isso{" "}
            <b>só se pode receber o sacramento do Batismo uma vez na vida</b>.
            Aliás, Santo Tomás em sua catequese sobre os sacramentos afirma que
            o erro dos donatistas era rebatizar aqueles já batizados pelos
            católicos “contra os quais se diz: Uma só fé, um só batismo (
            <a href="https://www.bibliaonline.com.br/acf/ef/4/5" target="blank">
              Ef 4,5
            </a>
            ).”
          </S.SmallText>
          <S.DefaultText
            style={{
              padding: "30px 0px",
              fontWeight: "bold",
              fontSize: "30px",
            }}
          >
            Quem pode batizar?
          </S.DefaultText>
          <S.SmallText>
            Em situações normais, o Batismo é administrado pelos ministros
            ordenados da Igreja, como padres e diáconos. No entanto, em
            circunstâncias de emergência, qualquer pessoa pode realizar o
            Batismo — até um pagão — desde que tenha a intenção correta e siga a
            fórmula trinitária. Isso ocorre porque o Batismo é considerado
            essencial para a salvação, e a igreja reconhece a vontade de Deus de
            que todos se salvem.&nbsp;
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html"
                target="blank"
              >
                11
              </a>
            </sup>
          </S.SmallText>
          <S.SmallText>
            Nesse sentido, uma vez que o Batismo é necessário para a nossa
            salvação, a Igreja confia à misericórdia de Deus as crianças que
            morrem sem receber este sacramento.&nbsp;
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html"
                target="blank"
              >
                12
              </a>
            </sup>
            &nbsp;“De facto, a grande misericórdia de Deus […] e a ternura de
            Jesus para com as crianças […] permitem-nos esperar que haja um
            caminho de salvação para as crianças que morrem sem Baptismo.”&nbsp;
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html"
                target="blank"
              >
                13
              </a>
            </sup>
          </S.SmallText>
          <S.SmallText>
            Um erro dos pelagianos, aponta Santo Tomás na sua catequese sobre os
            sacramentos, era acreditar que as crianças batizadas são admitidas
            no reino de Deus como alguém que passa de um estado bom a um melhor,
            e não como alguém que foi liberada de um mal ao qual estava ligada.
            Por isso, é forte o apelo da Igreja para que não adiem ou impeçam o
            Batismo das crianças, em qualquer circunstância, sobretudo nas
            situações emergenciais.
          </S.SmallText>
          <S.BigText id="batismo-biblia">
            Sacramento do Batismo na Bíblia
          </S.BigText>
          <S.SmallText>
            O Sacramento do Batismo encontra suas raízes na Bíblia e na história
            cristã, tendo sua origem no ministério de Jesus Cristo. No entanto,
            na Antiga Aliança, já se podiam ver indícios do Batismo em momentos
            marcantes. A travessia do Mar Vermelho, bem como a história da arca
            de Noé e a passagem do Jordão foram eventos que apontaram para a
            salvação trazida pelo Batismo.&nbsp;
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html"
                target="blank"
              >
                14
              </a>
            </sup>
            &nbsp;Além disso, a água, símbolo de vida, foi sendo preparada ao
            longo do tempo para manifestar a graça do Batismo.&nbsp;
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
            Tais prefigurações encontram a sua <b>realização em Jesus Cristo</b>
            , que dá início à sua vida pública ao ser batizado por São João
            Batista no rio Jordão, deixando um exemplo e uma base para o
            sacramento&nbsp;
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html"
                target="blank"
              >
                16
              </a>
            </sup>
            &nbsp;. Assim, Jesus também demonstrou Sua humildade e inaugurou uma
            nova fase da história da redenção.
          </S.SmallText>
          <S.SmallText>
            Nesse sentido, a Páscoa de Cristo abriu as fontes do Batismo para
            toda a humanidade, e Seu sangue e água simbolizaram o Batismo e a
            Eucaristia como sacramentos de vida nova.&nbsp;
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html"
                target="blank"
              >
                17
              </a>
            </sup>
            &nbsp; Ademais, Ele confiou aos Seus discípulos a missão de batizar
            todas as nações em nome do Pai e do Filho e do Espírito
            Santo.”&nbsp;
            <sup>
              <a
                href="https://www.bibliaonline.com.br/acf/mt/28/19"
                target="blank"
              >
                18
              </a>
            </sup>
          </S.SmallText>
          <S.SmallText>
            E os apóstolos, obedientes ao Mestre, começaram a praticar o Batismo
            logo após o Dia de Pentecostes. Pedro, ao pregar à multidão em
            Jerusalém, declarou: “Arrependei-vos, e cada um de vós seja batizado
            em nome de Jesus Cristo para perdão dos pecados, e recebereis o dom
            do Espírito Santo.”&nbsp;
            <sup>
              <a
                href="https://www.bibliaonline.com.br/acf/atos/2/38"
                target="blank"
              >
                19
              </a>
            </sup>
            &nbsp;O Batismo, então, tornou-se uma cerimônia de entrada na
            comunidade cristã e um{" "}
            <b>sinal visível de pertencimento à família de Deus</b>.
          </S.SmallText>
          <S.SmallText>
            O Apóstolo Paulo também enfatizou o significado profundo deste
            sacramento, dizendo que ao sermos batizados, participamos da morte e
            ressurreição de Cristo, sendo sepultados com Ele no Batismo e
            ressurgindo para uma nova vida.&nbsp;
            <sup>
              <a
                href="https://www.bibliaonline.com.br/nvi/rm/6/3,4"
                target="blank"
              >
                20
              </a>
            </sup>
          </S.SmallText>
          <S.BigText id="batismo-celebrado">
            Como é celebrado o sacramento do Batismo?
          </S.BigText>
          <S.SmallText>
            O rito se inicia com o sinal da cruz que “manifesta a marca de
            Cristo impressa naquele que vai passar a pertencer-Lhe, e […] a
            graça da redenção que Cristo nos adquiriu pela sua cruz.”&nbsp;
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html"
                target="blank"
              >
                21
              </a>
            </sup>
          </S.SmallText>
          <S.SmallText>
            A matéria do Batismo é a água, que é um símbolo profundo de
            purificação, vida e renovação espiritual.&nbsp;
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html"
                target="blank"
              >
                22
              </a>
            </sup>
            &nbsp;Essa água é consagrada por uma oração de epiclese, na qual a
            Igreja invoca o Espírito Santo sobre a água, tornando-a um veículo
            de graça divina.&nbsp;
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html"
                target="blank"
              >
                23
              </a>
            </sup>
            &nbsp;Nesse momento, a água torna-se não apenas um elemento físico,
            mas um canal sagrado de transformação espiritual.
          </S.SmallText>
          <S.SmallText>
            Durante o rito, o óleo dos catecúmenos também é aplicado antes do
            Batismo, como um sinal de proteção espiritual contra o mal, enquanto
            o santo crisma é usado após o Batismo, simbolizando a presença do
            Espírito Santo e a incorporação em Cristo. Esses óleos carregam
            significados profundos de preparação espiritual e compromisso com a
            fé.&nbsp;
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html"
                target="blank"
              >
                24
              </a>
            </sup>
          </S.SmallText>
          <S.SmallText>
            O momento central do rito do Batismo envolve a imersão do candidato
            na água ou a aspersão da água sobre sua cabeça enquanto o ministro
            pronuncia a fórmula trinitária “N., eu te batizo em nome do Pai, e
            do Filho, e do Espírito Santo.”&nbsp;
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html"
                target="blank"
              >
                25
              </a>
            </sup>
            &nbsp;Tal gesto simboliza a morte para o pecado e o renascimento em
            uma nova vida em Cristo. Aqui, a matéria e a forma se entrelaçam: a
            matéria é a água, e a forma consiste nas palavras pronunciadas pelo
            ministro.
          </S.SmallText>
          <S.SmallText>
            Ao pronunciar essa fórmula, o ministro confere o caráter sacramental
            ao ato, selando a participação do candidato na vida divina e na
            comunidade de fé. Nesse momento, a graça do Batismo é infundida,
            removendo o pecado original e inaugurando a vida divina na alma do
            batizado.&nbsp;
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html"
                target="blank"
              >
                26
              </a>
            </sup>
            &nbsp;Essa graça, além de purificação, capacita o batizado a viver
            de acordo com os princípios cristãos e a desempenhar um papel ativo
            na comunidade da Igreja.&nbsp;
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html"
                target="blank"
              >
                27
              </a>
            </sup>
          </S.SmallText>
          <S.BigText id="batismo-diaria">
            Sacramento do Batismo na nossa vida diária
          </S.BigText>
          <S.SmallText>
            Papa Bento XVI, em sua homilia da Festa do Batismo do Senhor,
            enfatizou que o Batismo é mais do que uma mera fórmula ritual; é uma
            adoção e incorporação na família divina, uma união com a Santíssima
            Trindade. “Estas palavras [a forma] não são apenas uma fórmula, mas
            uma realidade. Assinalam o momento em que os vossos filhos renascem
            como filhos de Deus. De filhos de pais humanos que são, passam a ser
            também filhos de Deus no Filho de Deus vivo.”&nbsp;
            <sup>
              <a
                href="https://www.vatican.va/content/benedict-xvi/pt/homilies/2007/documents/hf_ben-xvi_hom_20070107_battesimo.html"
                target="blank"
              >
                28
              </a>
            </sup>
          </S.SmallText>
          <S.SmallText>
            O Batismo é o sacramento que abre as portas para os demais. É o
            início da vida de fé, o começo de uma vida em sintonia com a nova
            identidade de filho de Deus. Por isso, desde a infância, os
            padrinhos e pais têm o papel de guiar os batizados nesse
            caminho&nbsp;
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html"
                target="blank"
              >
                29
              </a>
            </sup>
            , a fim de que cresçam em conhecimento e fé até a Confirmação e
            perseverem.
          </S.SmallText>
          <S.SmallText>
            Após o Batismo, somos exortados a “viver de acordo com o
            Espírito”&nbsp;
            <sup>
              <a
                href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html"
                target="blank"
              >
                30
              </a>
            </sup>
            &nbsp;, ou seja, adotar um estilo de vida guiado pelo Espírito
            Santo. Sendo assim, a vivência dos frutos do Espírito — amor,
            alegria, paz, paciência, autodomínio, entre outros&nbsp;
            <sup>
              <a
                href="https://www.bibliaonline.com.br/nvi/gl/5/22,23"
                target="blank"
              >
                31
              </a>
            </sup>
            &nbsp;— expressa a atuação do Espírito Santo em nossas vidas como
            batizados.
          </S.SmallText>
          <S.SmallText>
            Por fim, ao nos tornarmos membros da Igreja, deixamos de pertencer
            apenas a nós mesmos e passamos a pertencer àquele que se sacrificou
            e ressurgiu por nós — Cristo. Nesse sentido, somos chamados a nos
            submeter aos outros, servir em comunhão na Igreja e a demonstrar
            obediência e humildade diante da hierarquia eclesial. Assim como o
            Batismo traz consigo responsabilidades e deveres, também nos confere
            direitos, como receber os sacramentos, nutrir-nos com a Palavra de
            Deus e ser amparados por outros auxílios espirituais.
          </S.SmallText>
          <S.DefaultText style={{ fontWeight: "bold", margin: "30px 0px" }}>
            Referências
          </S.DefaultText>
          <S.SmallText
            style={{
              paddingBottom: "30px",
              borderBottom: "1px solid #D4D4D4",
            }}
          >
            <span>1. CIC, 1257</span>
            <br />
            <span>2, 3. CIC, 1131</span>
            <br /> <span>4, 5. CIC, 1213</span>
            <br /> <span>6. CIC, 1214</span>
            <br />
            <span>7. CIC, 1215</span>
            <br /> <span>8. CIC, 1270</span>
            <br /> <span>9. CIC, 1246</span>
            <br />
            <span>10. CIC, 1317</span>
            <br /> <span>11. CIC, 1256</span>
            <br />
            <span>12, 13. CIC, 1261</span>
            <br />
            <span>14. CIC 1218-1220</span>
            <br />
            <span>15. CIC 1217</span>
            <br />
            <span>16. CIC 1223</span>
            <br />
            <span>17. CIC 1225</span>
            <br />
            <span>18. Mt 28, 19</span>
            <br />
            <span>19. Atos 2, 38</span>
            <br />
            <span>20. Rm 6,3-4</span>
            <br />
            <span>21. CIC, 1235</span>
            <br />
            <span>22. CIC, 1262</span>
            <br />
            <span>23. CIC, 1238</span>
            <br />
            <span>24. CIC, 1239</span>
            <br />
            <span>25. CIC, 1240</span>
            <br />
            <span>26. CIC, 1279</span>
            <br />
            <span>27. CIC, 1269</span>
            <br />
            <span>
              28. Homilia do Papa Bento XVI na Festa do Baptismo do Senhor,
              janeiro de 2007
            </span>
            <br />
            <span>29. CIC, 1255</span>
            <br />
            <span>30. CIC 1266</span>
            <br />
            <span>31. Gl 5, 22-23</span>
          </S.SmallText>
        </div>
        <S.LinksContainer>
          <h4>O que você vai encontrar neste artigo?</h4>
          <a href="#oque-sacramento">O que é um sacramento?</a>
          <a href="#oque-batismo">O que é o sacramento do Batismo?</a>
          <a href="#batismo-biblia">Sacramento do Batismo na Bíblia</a>
          <a href="#batismo-celebrado">
            Como é celebrado o sacramento do Batismo?
          </a>
          <a href="#batismo-diaria">
            Sacramento do Batismo na nossa vida diária
          </a>
        </S.LinksContainer>
      </div>
    </div>
  );
};

export default Batismo;
