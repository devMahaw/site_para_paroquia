import * as S from "../../styles";

const Rosario = () => {
  return (
    <div style={{ margin: "50px 100px" }}>
      <div>
        <S.ImageContainer>
          <S.Image
            src="assets/rosario/ns_banner.png"
            alt="Nossa Senhora com Rosário"
          />
        </S.ImageContainer>
        <audio controls style={{ transform: "scale(1.5)", marginLeft: "50px" }}>
          <source src="assets/rosario/rosario.mp3" type="audio/mp3" />
          Seu navegador não suporta o elemento de áudio.
        </audio>
        <div style={{ display: "flex" }}>
          <div style={{ width: "80%" }}>
            <S.BigText>Um guia para rezar o rosário</S.BigText>
            <S.DefaultText
              style={{
                borderBottom: "1px solid #D4D4D4",
                paddingBottom: "30px",
              }}
            >
              <span>
                A oração diária do rosário é o maior pedido que Nossa Senhora
                nos fez. Neste artigo, veja um guia completo para aprender a
                rezá-lo.
              </span>
            </S.DefaultText>
            <S.SmallText style={{ paddingTop: "30px" }}>
              Quando a Virgem Maria apareceu em Fátima sob o título de Nossa
              Senhora do Rosário, Ela pediu a Lúcia, Jacinta e Francisco que
              rezassem o terço todos os dias.
            </S.SmallText>
            <S.SmallText>
              E nós também somos chamados a praticar esta devoção diariamente —
              se possível, o Rosário completo — pela salvação das almas dos
              pecadores.
            </S.SmallText>
            <S.SmallText>
              Por isso, preparamos este post para ajudar você a realizar este
              que é o maior pedido de Maria Santíssima a cada um de Seus filhos.
            </S.SmallText>
            <S.BigText id="oque-rosario">O que é o rosário?</S.BigText>
            <S.SmallText>
              O Papa S. João Paulo II, em 16 de Outubro de 2002, escreveu uma
              bela carta apostólica intitulada <em>Rosarium Virginis Mariae</em>
              , explicando o sentido e o profundo significado da oração do
              Rosário para os católicos. Nesta carta, começa por explicar que “o
              Rosário à Virgem Maria é, na sua simplicidade e profundidade, uma
              oração de grande significado destinada a produzir frutos de
              santidade”. Em outras palavras, o Santo Rosário nada mais é do que
              contemplar os acontecimentos mais importantes da vida de Cristo
              para que “imitando o que eles contêm e alcançando o que prometem”
              possamos alcançar a santidade através dos olhos de Maria.
            </S.SmallText>
            <S.BigText id="origem-oracao">
              Qual a origem desta oração?
            </S.BigText>
            <S.SmallText>
              A origem do Rosário, em poucas palavras, remonta à Idade Média.
              Após a expansão do cristianismo no Oriente e no Ocidente, ou seja,
              após a conversão de famílias, aldeias e cidades inteiras, os
              homens medievais procuraram fugir das grandes metrópoles,
              devastadas e profundamente paganizadas, para lugares mais
              distantes onde pudessem se recolher, viver em comunidade cristã e
              em constante oração; talvez o caso mais conhecido de todos seja o
              de São Bento.
            </S.SmallText>
            <S.SmallText>
              Desde então, começaram a surgir os chamados monges e a fundar
              mosteiros. Rezavam e trabalhavam muito intensamente, em contraste
              com os nossos tempos. Por exemplo, rezavam os 150 salmos por dia,
              em coro na igreja, como uma oração diária. Enquanto outros
              lavravam o solo sob o sol duro, outros rezavam ao sol que nasce do
              alto.
              <sup>
                <a
                  href="https://www.bible.com/pt/bible/211/LUK.1.78-79.NTLH"
                  target="blank"
                >
                  1
                </a>
              </sup>
            </S.SmallText>
            <S.SmallText>
              No entanto, houve uma dificuldade: nem todos tinham a oportunidade
              de rezar constantemente os 150 salmos juntamente com o coro de
              monges, pelo simples fato de terem de se alimentar e cultivar a
              terra.
            </S.SmallText>
            <S.SmallText>
              Assim, tiveram a brilhante ideia de fazer outras práticas piedosas
              enquanto cuidavam do cultivo ou mantinham a ordem monástica;
              começaram a rezar orações jaculatórias e a recitar frases do
              Evangelho, em lugar dos 150 salmos, e a contar com os dedos.
            </S.SmallText>
            <S.SmallText>
              Uma das récitas mais conhecidas foi a saudação do Anjo Gabriel à
              Virgem Maria: “Ave, cheia de graça, o Senhor é contigo: bendita és
              tu entre as mulheres” (
              <a
                href="https://www.bibliaonline.com.br/acf/lc/1/28"
                target="blank"
              >
                Lc 1, 28
              </a>
              ).. Estas práticas piedosas, especialmente a Saudação à Virgem
              Maria, foram transmitidas aos fiéis da época que não tinham acesso
              aos 150 Salmos por escrito, mas em vez disso rezavam 150
              Ave-Marias. E assim, ao longo do tempo, as outras partes foram
              acrescentadas até chegarmos ao que hoje conhecemos como o Santo
              Rosário.
            </S.SmallText>
            <S.SmallText>
              De fato, o Rosário foi mencionado pela primeira vez num documento
              papal no século XVI. Em sua bula Consueverunt, São Pio V observou
              que “o Rosário ou o Saltério da Santíssima Virgem” é uma “forma de
              oração” através da qual “veneramos Maria com a saudação angélica
              repetida cento e cinquenta vezes, seguindo o número de salmos do
              Rei Davi, e antes de cada contagem de dez Ave-Marias, rezamos a
              Nosso Senhor, com meditações que ilustram toda a vida do próprio
              Senhor Jesus Cristo”.
            </S.SmallText>
            <S.SmallText>
              Portanto, quando falamos da origem do Santo Rosário, de uma forma
              prática e simples podemos voltar a fatos puramente históricos. Mas
              o que sabemos, sem qualquer dúvida, é que a origem do Rosário vai
              além desses fatos históricos. É um verdadeiro querer divino na
              Terra para que seus filhos estejam com o coração voltado a Ele e à
              Sua Mãe. Pela saudação divina do Anjo Gabriel à Santíssima Mãe de
              Deus, contemplamos os mistérios da vida humana e divina de Cristo,
              e deixamos que eles frutifiquem também em nossas vidas.
            </S.SmallText>
            <S.BigText id="como-reza">Como rezá-lo?</S.BigText>
            <S.SmallText>
              Num ritmo compassado de orações “simples e profundas”, como as de
              uma criança à sua mãe. O Santo Rosário está dividido em elementos,
              partes, seções e o todo. Por outras palavras, é perfeitamente
              pensado com o propósito de ter uma melhor intimidade,
              familiaridade, de forma natural e sobrenatural com Jesus através
              de Maria, a mãe que dá à luz os novos filhos de Deus.
            </S.SmallText>
            <S.SmallText>
              Para uma melhor contemplação da vida de Cristo, o Santo Rosário
              está dividido em Pai-nossos, Ave-Marias e Glórias, organizados em
              dezenas de contas menores e maiores. Dessa forma, a cristandade
              quis organizar a vida de Cristo em 5 mistérios, referindo-se
              talvez teologicamente ao Pentateuco, uma vez que a nova lei “faço
              novas todas as coisas”
              <sup>
                <a
                  href="https://www.bibliaonline.com.br/acf/ap/21/5"
                  target="blank"
                >
                  2
                </a>
              </sup>
              , e a verdadeira lei “Eu sou a verdade, o caminho e a vida”
              <sup>
                <a
                  href="https://www.bibliaonline.com.br/acf/jo/14/6"
                  target="blank"
                >
                  3
                </a>
              </sup>
              , é o próprio Cristo. Ou porque historicamente, aqueles que não
              podiam rezar os 150 salmos, devido a circunstâncias da vida,
              refugiaram-se na Mãe de Deus com amor e admiração, para seguirem o
              seu exemplo de guardar no coração e viver os mistérios de Cristo,
              e para cada salmo recitaram uma Ave-Maria.
            </S.SmallText>
            <S.SmallText>
              No entanto, o que nunca deve ser esquecido é que cada Santo
              Rosário é como aquela passagem do Evangelho
              <sup>
                <a
                  href="https://www.bibliaonline.com.br/acf/lc/9"
                  target="blank"
                >
                  4
                </a>
              </sup>
              <sup>
                ,
                <a
                  href="https://www.bibliaonline.com.br/acf/mc/6"
                  target="blank"
                >
                  5
                </a>
              </sup>
              <sup>
                ,
                <a
                  href="https://www.bibliaonline.com.br/acf/mt/10"
                  target="blank"
                >
                  6
                </a>
              </sup>
              onde Jesus subiu a uma montanha para rezar, levando consigo os
              seus três discípulos favoritos, Pedro, Tiago e João. E enquanto
              rezava, o seu corpo foi transfigurado. A sua roupa tornou-se mais
              branca do que a neve, e o seu rosto mais brilhante do que o sol. E
              Moisés e Elias apareceram e falaram-lhe do que lhe estava prestes
              a acontecer em Jerusalém.
            </S.SmallText>
            <S.SmallText>
              Pedro ficou muito entusiasmado e exclamou: “Senhor, como é bom que
              estejamos aqui!” Assim acontece com o Santo Rosário: como é bom
              estarmos no colo de nossa Mãe, entregando-lhe tudo o que somos e
              temos.
            </S.SmallText>
            <S.SmallText>
              De forma prática, a oração do rosário, ou terço, se dá da seguinte
              forma:
            </S.SmallText>
            <S.SmallText style={{ fontWeight: "bold" }}>Passo 1:</S.SmallText>
            <S.SmallText>Inicie fazendo o sinal da cruz;</S.SmallText>
            <S.SmallText>
              “Pelo sinal da santa cruz, livrai-nos, Deus nosso Senhor, dos
              nossos inimigos. Em nome do Pai, e do Filho e do Espírito Santo.
              Amém”
            </S.SmallText>
            <S.SmallText style={{ fontWeight: "bold" }}>Passo 2:</S.SmallText>
            <S.SmallText>
              Ofereça a oração por alguma intenção que você queira rezar, para
              alguém ou alguma situação.
            </S.SmallText>
            <S.SmallText style={{ fontWeight: "bold" }}>Passo 3:</S.SmallText>
            <S.SmallText>
              Reze a oração do Creio. Depois, na primeira conta (bolinha) maior
              separada, reze um Pai-Nosso. Em seguida, três Ave-Marias e, na
              conta maior separada, um “Glória”:
            </S.SmallText>
            <S.SmallText>
              “Creio em Deus Pai todo-poderoso, criador do céu e da terra; e em
              Jesus Cristo, seu único Filho, Nosso Senhor; que foi concebido
              pelo poder do Espírito Santo; nasceu na Virgem Maria, padeceu sob
              Pôncio Pilatos, foi crucificado morto e sepultado; desceu à mansão
              dos mortos; ressuscitou ao terceiro dia; subiu aos céus, está
              sentado à direita de Deus Pai todo-poderoso, donde há de vir a
              julgar os vivos e os mortos; creio no Espírito Santo, na santa
              Igreja Católica, na comunhão dos santos, na remissão dos pecados,
              na ressurreição da carne, na vida eterna. Amém”
            </S.SmallText>
            <S.SmallText>
              “Pai Nosso que estais nos Céus, santificado seja o vosso Nome,
              venha a nós o vosso Reino, seja feita a vossa vontade assim na
              terra como no Céu. O pão nosso de cada dia nos dai hoje,
              perdoai-nos as nossas ofensas assim como nós perdoamos a quem nos
              tem ofendido, e não nos deixeis cair em tentação, mas livrai-nos
              do Mal. Amém”
            </S.SmallText>
            <S.SmallText>
              “Ave Maria, cheia de graça, o Senhor é convosco, bendita sois vós
              entre as mulheres e bendito é o fruto do vosso ventre, Jesus.
              Santa Maria, Mãe de Deus, rogai por nós pecadores, agora e na hora
              da nossa morte. Amém”
            </S.SmallText>
            <S.SmallText>
              “Glória ao Pai, ao Filho e o Espírito Santo. Como era no
              princípio, agora é sempre. Amém.”
            </S.SmallText>
            <S.SmallText>
              “Oh! Meu Jesus, perdoai-nos, livrai-nos do fogo do inferno, levai
              as almas todas para o céu e socorrei principalmente as que mais
              precisarem. Amém.”
            </S.SmallText>
            <S.SmallText style={{ fontWeight: "bold" }}>Passo 4:</S.SmallText>
            <S.SmallText>
              A partir daqui começamos a oração dos mistérios. A cada dezena
              lembramos de um mistério da vida de Jesus, seguido de 1 Pai-Nosso
              e 10 Ave-Marias. No terço, eles são separados da seguinte forma:
            </S.SmallText>
            <ul>
              <S.DotList>
                <S.SmallText>
                  Segunda e sábado: quando oramos os mistérios gozosos;
                </S.SmallText>
              </S.DotList>
              <S.DotList>
                <S.SmallText>
                  Terças e sextas: quando oramos os mistérios dolorosos;
                </S.SmallText>
              </S.DotList>
              <S.DotList>
                <S.SmallText>
                  Quartas e domingos: quando oramos os mistérios gloriosos;
                </S.SmallText>
              </S.DotList>
              <S.DotList>
                <S.SmallText>
                  Quinta: quando oramos os mistérios luminosos.
                </S.SmallText>
              </S.DotList>
            </ul>
            <S.SmallText style={{ fontWeight: "bold" }}>Passo 5:</S.SmallText>
            <S.SmallText>
              Após cada dezena de Ave-Marias, deve-se rezar um “Glória” e a
              oração pelas almas do Purgatório:
            </S.SmallText>
            <S.SmallText>
              “Ó meu Jesus, perdoai-nos, livrai-nos do fogo do inferno, levai as
              almas todas para o Céu, principalmente as que mais precisarem de
              Vossa Misericórdia.”
            </S.SmallText>
            <S.SmallText style={{ fontWeight: "bold" }}>Passo 6:</S.SmallText>
            <S.SmallText>
              Por fim, fecha-se o terço com um encerramento e oração da Salve
              Rainha.
            </S.SmallText>
            <S.SmallText>
              “Salve, Rainha, Mãe de misericórdia, vida, doçura e esperança
              nossa, salve! A vós bradamos, os degredados filhos de Eva; a vós
              suspiramos, gemendo e chorando neste vale de lágrimas. Eia, pois
              advogada nossa, esses vossos olhos misericordiosos a nós volvei; e
              depois deste desterro nos mostrai Jesus, bendito fruto do vosso
              ventre, ó clemente, ó piedosa, ó doce sempre Virgem Maria. Rogai
              por nós, santa Mãe de Deus. Para que sejamos dignos das promessas
              de Cristo.”
            </S.SmallText>
            <S.BigText id="terco-rosario">Terço ou Rosário?</S.BigText>
            <S.SmallText>
              Costumamos designar “terço” como a récita das 150 Ave-Marias,
              acompanhadas do mistério do dia. É possível, também, recitar todos
              os 4 grupos de mistérios em sequência. A isso designamos
              “Rosário”. Iniciamos meditando o nascimento de Jesus, com os
              mistérios gozosos, e terminamos com sua ressurreição e instituição
              sacramental da Eucaristia, com os mistérios gloriosos. Dependendo
              do tempo disponível do fiel, ele escolhe quanto deseja rezar.
            </S.SmallText>
            <S.SmallText>
              Com a oração completa do Rosário, podemos meditar sobre a vida
              inteira de Jesus e, com Ele, entregar também nossas vidas. Por
              isso, essa é uma prática muito difundida e que garante muitos
              frutos às almas.
            </S.SmallText>
            <S.BigText id="rosario-fatima">
              O Rosário e Nossa Senhora de Fátima
            </S.BigText>
            <S.SmallText>
              Em suas aparições aos pastorinhos, em 1917, Nossa Senhora de
              Fátima sempre falou sobre a necessidade de muita oração e,
              especialmente, da oração do Santo Terço. Na primeira aparição, em
              maio, ela já dizia:
            </S.SmallText>
            <S.SmallText>
              “Rezem o terço, todos os dias, para alcançarem a paz para o mundo
              e o fim da guerra.”
              <sup>
                <a
                  href="https://www.fatima.pt/files/upload/fontes/F002_Memorias1.pdf"
                  target="blank"
                >
                  7
                </a>
              </sup>
            </S.SmallText>
            <S.SmallText>
              Nas demais aparições, feitas até outubro do mesmo ano, esse foi o
              pedido constante de Nossa Senhora: rezar muito o santo terço, em
              intenção pela paz no mundo e pela salvação das almas.
            </S.SmallText>
            <S.SmallText>
              De fato, as três crianças levaram a recomendação à risca e rezavam
              incessantemente, todos os dias, ao visitar a Cova da Íria e
              durante seus afazeres. Isso está registrado nas memórias da Irmã
              Lúcia, especialmente a São Francisco Marto:
            </S.SmallText>
            <S.SmallText>
              “– Ó minha Nossa Senhora, terços, rezo todos quantos Vós
              quiserdes. E, desde aí, tomou o costume de se afastar de nós, como
              que passeando; e se chamava por ele e Ihe perguntava que andava a
              fazer, levantava o braço e mostrava-me o terço. Se Ihe dizia que
              viesse brincar, que depois rezava conosco, respondia: - Depois
              também rezo. Não te lembras que Nossa Senhora disse que tinha de
              rezar muitos terços?”
              <sup>
                <a
                  href="https://www.fatima.pt/files/upload/fontes/F002_Memorias1.pdf"
                  target="blank"
                >
                  8
                </a>
              </sup>
            </S.SmallText>
            <S.SmallText>
              Assim como essas crianças, Nossa Senhora também espera de nós um
              coração humilde e disponível, que a encontre muitas vezes na
              oração do Santo Terço. Por isso, seu pedido é recorrente em cada
              aparição que realiza. Quando estudamos tais aparições,
              especialmente com o livro “Aparições de Nossa Senhora”, vemos o
              quanto a Virgem Maria deseja nossa presença amorosa por meio do
              rosário.
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
              <span>1. Lc 1,78-79</span>
              <span>2. Apocalipse 21,5</span>
              <span>3. Jo 14, 6</span>
              <span>4. Lc. 9</span>
              <span>5. Mc. 6 </span>
              <span>6. Mt. 10</span>

              <span>7. Memórias da Ir. Lúcia, p.176</span>
              <span>8. Memórias da Ir. Lúcia, p.143</span>
            </S.SmallText>
            <S.BigText id="oque-terco">O que é a oração do terço?</S.BigText>
            <S.SmallText>
              A oração do terço, com sua simplicidade tocante e profundidade
              espiritual, destaca-se como uma das práticas mais amadas pelos
              devotos, sendo fortemente encorajada pela Igreja. Contudo, mais do
              que uma mera expressão de piedade popular, o Rosário se revela
              como uma jornada espiritual extraordinariamente rica. Ele se
              baseia na
              <strong>
                contemplação dos principais episódios da vida de Cristo
              </strong>
              , enquanto se recita as Ave-Marias. Por isso, é capaz de guiar os
              fiéis pelas mãos amorosas da Santíssima Virgem Maria em direção a
              uma união íntima com Deus.
            </S.SmallText>
            <S.SmallText>
              Nas palavras do Papa Bento XVI
              <cite>
                <span>
                  — “Podemos dizer que a recitação do Rosário tem o seu modelo
                  precisamente em Maria, porque consiste em contemplar os
                  mistérios de Cristo em união espiritual com a Mãe do Senhor.”
                  <sup>
                    <a
                      href="https://www.vatican.va/content/benedict-xvi/pt/audiences/2011/documents/hf_ben-xvi_aud_20111228.html#:~:text=Audiência%20Geral%20de%2028%20de,Família%20de%20Nazaré%20%7C%20Bento%20XVI&text=Queridos%20irmãos%20e%20irmãs%2C,liturgia%20de%20todos%20estes%20dias."
                      target="blank"
                    >
                      1
                    </a>
                  </sup>
                </span>
              </cite>
            </S.SmallText>
            <S.SmallText>
              A oração do terço, portanto, apesar de sua estrutura aparentemente
              simples, é um memorial de toda a vida de Jesus.
            </S.SmallText>
            <S.BigText id="oque-misterios">
              O que são os mistérios do terço e por que devemos contemplá-los?
            </S.BigText>
            <S.SmallText>
              Os mistérios do terço indicam os eventos mais marcantes da vida de
              Jesus Cristo e da Virgem Maria. Esses mistérios estão organizados
              em quatro conjuntos temáticos: os gozosos, os luminosos, os
              dolorosos e os gloriosos. Cada um composto por cinco episódios
              específicos da vida de Nosso Senhor.
            </S.SmallText>
            <S.SmallText>
              Assim, ao recitar cada conjunto de mistérios, os fiéis têm a
              oportunidade de
              <strong>se aprofundar em toda a narrativa da redenção</strong>. E,
              assim, reconhecer que tudo o que Jesus viveu e todas as coisas que
              ele realizou foi tendo em vista a nossa salvação. Desde o seu
              nascimento até a morte na Cruz; durante a sua vida oculta, ou já
              em sua vida pública. Desse modo, ao dirigir a nossa atenção para a
              meditação de cada acontecimento da vida de Cristo, a contemplação
              desses mistérios desperta em nós a chama da fé.
            </S.SmallText>
            <S.SmallText
              style={{
                paddingBottom: "30px",
                borderBottom: "1px solid #D4D4D4",
              }}
            >
              Ao conhecer a vida de Cristo e crer nele, somos impelidos a
              refletir também sobre a nossa própria vida, as nossas ações e o
              cumprimento de nossa vocação — que é, em primeiro lugar, a
              santidade. A contemplação dos mistérios do terço, portanto, além
              de ser um pedido incessante de Nossa Senhora, “ajuda a fazer
              brotar da nossa fé uma abundante e alegre messe de frutos, porque
              incita maravilhosamente a alma a propósitos de virtude.”
              <sup>
                <a
                  href="https://www.vatican.va/content/leo-xiii/pt/encyclicals/documents/hf_l-xiii_enc_08091892_magnae-dei-matris.html"
                  target="blank"
                >
                  2
                </a>
              </sup>
            </S.SmallText>
            <S.Image
              src="assets/rosario/anunciacao_gozozos.jpg"
              alt="Anunciação do anjo"
            />
            <S.BigText id="gozozos">
              Mistérios Gozosos: nascimento e infância de Jesus
            </S.BigText>
            <S.DefaultText
              style={{
                borderBottom: "1px solid #D4D4D4",
                paddingBottom: "30px",
              }}
            >
              <span>
                Conheça os Mistérios Gozosos do terço, os episódios que
                meditamos do nascimento e da infância de Jesus enquanto rezamos
                as Ave-Marias.
              </span>
            </S.DefaultText>
            <S.SmallText style={{ paddingTop: "30px" }}>
              A prática da oração do terço nos conduz à contemplação dos
              principais episódios da vida de Cristo. Os Mistérios Gozosos, que
              constituem o primeiro ciclo do Rosário, são marcados, sobretudo,
              pela alegria que emana da Encarnação.
              <sup>
                <a
                  href="https://www.vatican.va/content/john-paul-ii/pt/apost_letters/2002/documents/hf_jp-ii_apl_20021016_rosarium-virginis-mariae.html"
                  target="blank"
                >
                  3
                </a>
              </sup>
              O anúncio do anjo, em particular, inaugura de forma concreta a
              história de nossa redenção, envolvendo toda a criação em regozijo
              diante da Encarnação do Verbo Divino.
            </S.SmallText>
            <S.SmallText>
              Neste mistério, exploraremos cada episódio dos Mistérios Gozosos,
              buscando compreender a riqueza daquilo que devemos meditar em cada
              um deles durante as Ave-Marias.
            </S.SmallText>
            <S.BigText>Os Mistérios Gozosos</S.BigText>
            <S.DefaultText
              style={{ paddingBottom: "30px", fontWeight: "bold" }}
            >
              1º mistério gozoso: a Anunciação do anjo a Virgem Maria
            </S.DefaultText>
            <S.Image
              src="assets/rosario/anunciacao_misterios_gozozos.jpg"
              alt="Anunciação do anjo"
            />
            <S.SmallText>
              <cite>
                <span>
                  «No sexto mês, o anjo Gabriel foi enviado por Deus a uma
                  cidade da Galiléia, chamada Nazaré, a uma virgem desposada com
                  um homem que se chamava José, da casa de Davi e o nome da
                  virgem era Maria» (
                  <a
                    href="https://www.bibliaonline.com.br/nvi/lc/1/26,27"
                    target="blank"
                  >
                    Lc 1, 26-27
                  </a>
                  ).
                </span>
              </cite>
            </S.SmallText>
            <S.SmallText>
              No primeiro mistério gozoso, somos transportados para o humilde
              lar de Nazaré, onde o Arcanjo Gabriel é enviado por Deus para
              anunciar a boa-nova a Maria. O episódio é narrado no Evangelho de
              Lucas
              <sup>
                <a
                  href="https://www.bibliaonline.com.br/acf/lc/1/26-38"
                  target="blank"
                >
                  4
                </a>
              </sup>
              , o anjo Gabriel saúda Maria como “cheia de graça” e revela o
              plano divino:
              <cite>
                <span>
                  — “Ave, cheia de graça, o Senhor é contigo”. […] “Não temas,
                  Maria, pois encontraste graça diante de Deus. Eis que
                  conceberás e darás à luz um filho, e lhe porás o nome de
                  Jesus.” […] Então disse Maria: “Eis aqui a serva do Senhor.
                  Faça-se em mim segundo a tua palavra.”
                  <sup>
                    <a
                      href="https://www.bibliaonline.com.br/acf/lc/1/28"
                      target="blank"
                    >
                      5
                    </a>
                    ,
                    <a
                      href="https://www.bibliaonline.com.br/acf/lc/1/30"
                      target="blank"
                    >
                      6
                    </a>
                    ,
                    <a
                      href="https://www.bibliaonline.com.br/acf/lc/1/38"
                      target="blank"
                    >
                      7
                    </a>
                  </sup>
                </span>
              </cite>
            </S.SmallText>
            <S.SmallText>
              Neste momento, meditamos não só sobre o grande amor de Deus, que
              enviou Seu filho único para nascer, viver e morrer por nós, mas
              também sobre o alegre “sim” de Maria que a fez participante da
              nossa redenção. Ela é o grande modelo de humildade,
              disponibilidade e submissão à vontade de Deus, encorajando-nos a
              buscar também em nossa vida dar a mesma resposta, confiante e
              desprendida, diante dos desígnios de Deus.
            </S.SmallText>
            <S.SmallText>
              Familiarizada com a Sagrada Escritura, para ela, o Anjo Gabriel
              era um “enviado de Deus” e descobre, pela sua mensagem, que era
              objeto de uma extraordinário favor de Deus: ela é cheia de graça,
              sem pecado, imaculada. E Maria, com plena compreensão e
              conhecimento do sentido da grandeza de Deus, perturbou-se ao se
              sentir alvo desta graça divina que habitava nela. em plenitude. O
              Anjo lhe anuncia que ela conceberá o Filho do Altíssimo. No
              entanto, Maria precisava ser esclarecida a respeito do que se
              passaria com ela. Então, o Anjo lhe diz: “O Espírito Santo descerá
              sobre ti e o Poder do Altíssimo te cobrirá com a sua sombra”.
              Desvendava, assim, o sentido oculto da profecia de Isaías sobre a
              gravidez de uma virgem. “Para Deus, nada é impossível”. E o
              consentimento de Maria é imediato.
            </S.SmallText>
            <S.DefaultText style={{ padding: "30px 0px", fontWeight: "bold" }}>
              2º mistério gozoso: a visitação de Maria a sua prima Santa Isabel
            </S.DefaultText>
            <S.Image
              src="assets/rosario/visitacao_maria.jpg"
              alt="Visitação de Nossa Senhora a sua prima Santa Isabel"
            />
            <S.SmallText>
              <cite>
                <span>
                  «Naqueles dias, Maria se levantou e foi às pressas às
                  montanhas, a uma cidade de Judá. Entrou em casa de Zacarias e
                  saudou Isabel. Ora, apenas Isabel ouviu a saudação de Maria, a
                  criança estremeceu no seu seio; e Isabel ficou cheia do
                  Espírito Santo. E exclamou em alta voz: "Bendita és tu entre
                  as mulheres e bendito é o fruto do teu ventre"» (
                  <a
                    href="https://www.bibliaonline.com.br/acf/lc/1/39-42"
                    target="blank"
                  >
                    Lc 1, 39-42
                  </a>
                  ).
                </span>
              </cite>
            </S.SmallText>
            <S.SmallText>
              O segundo mistério gozoso leva-nos à emocionante visita da Virgem
              Maria à sua prima Isabel.
              <sup>
                <a
                  href="https://www.bibliaonline.com.br/acf/lc/1/39-56"
                  target="blank"
                >
                  8
                </a>
              </sup>
              Maria, logo após saber que seria mãe do Salvador, por obra do
              Espírito Santo, parte apressadamente para visitar Isabel, que, por
              graça divina, também está grávida. Este encontro é marcado pela
              alegria e pelo reconhecimento sobrenatural, culminando na
              exclamação inspirada de Isabel:
              <cite>
                <span>
                  — “Donde me vem esta honra de vir a mim a mãe de meu Senhor?”
                  <sup>
                    <a
                      href="https://www.bibliaon.com/versiculo/lucas_1_43/"
                      target="blank"
                    >
                      9
                    </a>
                  </sup>
                </span>
              </cite>
            </S.SmallText>
            <S.SmallText>
              Neste mistério, meditamos a visita de Maria tanto como um ato de
              serviço e amor, quanto como um testemunho sensível da presença de
              Deus. A Visitação de Maria à sua parenta deve levar-nos a meditar
              especialmente sobre o serviço desinteressado e a prontidão em
              servir àqueles que mais precisam — começando pelos que estão mais
              próximos de nós. Ao mesmo tempo consideramos a alegria que Maria
              compartilha com Isabel, refletindo sobre como nossas próprias
              vidas podem ser veículos de alegria divina para os outros.
            </S.SmallText>
            <S.SmallText>
              É muito mais pelos atos do que pelas palavras que se conhece uma
              pessoa. No diálogo entre a Virgem e o arcanjo, durante a
              Anunciação, Maria pronunciou apenas duas frases curtas que a
              revelaram. Diante da mudança de vida que ela entrevia para si, sua
              reação foi de humildade, simplicidade e retidão. Sua resposta
              denota generosidade e sua partida para junto de sua prima, bem
              como sua rapidez de decisão e sua caridade atuante, demonstram uma
              pronta obediência à ligeira insinuação feita pelo anjo, a respeito
              de Elizabeth, Com a saudação de Maria, o Espírito Santo se apossa
              de Elizabeth. Sem que esta tenha recebido qualquer notícia ou
              confidência a respeito da Encarnação do Verbo, Elizabeth se mostra
              milagrosamente informada, saudando sua jovem parenta em termos de
              elevado respeito. E foi ela a primeira pessoa neste mundo a
              conferir o magnífico título que a posteridade reconheceria: ela a
              nomeia Mãe de seu Senhor. A explosão de júbilo que eclode das
              palavras de Elizabeth, faz brotar em Maria, do mais íntimo de seu
              coração, um cântico espontâneo de louvor: “Minha alma glorifica ao
              Senhor, meu espírito exulta de alegria em Deus, meu Salvador,
              porque olhou para sua pobre serva. Por isto, desde agora, me
              proclamarão bem-aventurada todas as gerações, porque realizou em
              mim maravilhas aquele que é poderoso e cujo nome é Santo.” Este
              arroubo de fé em Deus que realiza o que ele prometera, esse grito
              de compaixão pelos oprimidos e pelos pobres, esse cântico de
              reconhecimento dirigido a Deus que vem salvar a humanidade, a
              Igreja escolheu-o para o Ofício das Vésperas: “Magnificat anima
              mea dominum…”
            </S.SmallText>
            <S.DefaultText style={{ padding: "30px 0px", fontWeight: "bold" }}>
              3º mistério gozoso: o nascimento de Jesus em Belém
            </S.DefaultText>
            <S.Image src="assets/rosario/nascimento_jesus.jpg" alt="Presépio" />
            <S.SmallText>
              <cite>
                <span>
                  «Naqueles tempos apareceu um decreto de César Augusto,
                  ordenando o recenseamento de toda a terra. Este recenseamento
                  foi feito antes do governo de Quirino, na Síria. Todos iam
                  alistar-se, cada um na sua cidade. Também José subiu da
                  Galiléia, da cidade de Nazaré, à Judéia, à Cidade de Davi,
                  chamada Belém, porque era da casa e família de Davi, para se
                  alistar com a sua esposa Maria, que estava grávida. Estando
                  eles ali, completaram-se os dias dela. E deu à luz seu filho
                  primogênito, e, envolvendo-o em faixas, reclinou-o num
                  presépio; porque não havia lugar para eles na hospedaria» (
                  <a
                    href="https://www.bibliaonline.com.br/nvi/lc/2/1-7"
                    target="blank"
                  >
                    Lc 2,1-7
                  </a>
                  ).
                </span>
              </cite>
            </S.SmallText>
            <S.SmallText>
              No terceiro mistério gozoso, mergulhamos na adoração silenciosa do
              Natal.
              <sup>
                <a
                  href="https://www.bibliaonline.com.br/nvi/lc/2/1-20"
                  target="blank"
                >
                  10
                </a>
              </sup>
              Em meio a simplicidade, a pobreza e ao frio de uma gruta em Belém,
              Maria dá à luz Jesus Cristo — e “os céus e a terra se regozijaram
              pelo nascimento do Salvador.”
              <sup>
                <a
                  href="https://www.bibliaonline.com.br/nvi/lc/2/11"
                  target="blank"
                >
                  11
                </a>
              </sup>
              A meditação nos conduz, desse modo, à humildade da manjedoura, à
              alegria dos pastores e à reverência dos Reis Magos.
            </S.SmallText>
            <S.SmallText>
              Contemplamos aqui o extraordinário acontecimento do Filho de Deus
              que se faz presente entre nós, trazendo luz e esperança ao mundo.
              Meditar sobre o nascimento de Jesus convida-nos a acolher a
              presença de Cristo em nossas vidas diárias, encontrando alegria na
              simplicidade e no dom da vida. Além disso, o mistério do Natal
              faz-nos meditar sobre a importância de estar sempre vigilantes,
              esperando pela segunda vinda de Cristo no fim dos tempos, pois não
              sabemos o dia ou a hora em que Ele voltará.
              <sup>
                <a
                  href="https://www.bibliaonline.com.br/acf/mt/25/13"
                  target="blank"
                >
                  12
                </a>
              </sup>
            </S.SmallText>
            <S.SmallText>
              A pobreza, em geral, é mal vista pela maioria dos homens. No
              entanto, foi o que Jesus escolheu para seus pais e para si mesmo.
              Será esse quadro que nós imaginaríamos para um nascimento divino?
              Onde a pompa, o conforto, o luxo requintado com que os grandes
              deste mundo costumam se cercar? Os primeiros adoradores de Cristo,
              no seu nascimento, foram Maria e José unidos em sua fé por um
              sublime segredo.. Os primeiros visitantes foram… os pastores,
              marginalizados e excluídos pela sociedade civil e religiosa de seu
              tempo No entanto, a atmosfera de todo o desenrolar da cena do
              presépio, em Belém, deve ter sido impregnada de extremo júbilo e
              grande regozijo! O nascimento do Salvador do mundo foi cantado
              pelos anjos e anunciado aos pastores como uma grande alegria:
              “Glória a Deus no mais alto dos céus!”
            </S.SmallText>
            <S.DefaultText style={{ padding: "30px 0px", fontWeight: "bold" }}>
              4º mistério gozoso: a apresentação do Menino Jesus no templo
            </S.DefaultText>
            <S.Image
              src="assets/rosario/apresentacao_jesus.jpg"
              alt="Apresentação do menino Jesus"
            />
            <S.SmallText>
              <cite>
                <span>
                  «Completados que foram os oito dias para ser circuncidado o
                  menino, foi-lhe posto o nome de Jesus, como lhe tinha chamado
                  o anjo, antes de ser concebido no seio materno. Concluídos os
                  dias da sua purificação segundo a Lei de Moisés, levaram-no a
                  Jerusalém para o apresentar ao Senhor, conforme o que está
                  escrito na lei do Senhor: Todo primogênito do sexo masculino
                  será consagrado ao Senhor; e para oferecerem o sacrifício
                  prescrito pela lei do Senhor, um par de rolas ou dois
                  pombinhos.» (
                  <a
                    href="https://www.bibliaonline.com.br/acf/lc/2/21-24"
                    target="blank"
                  >
                    Lc 2, 21-24
                  </a>
                  ).
                </span>
              </cite>
            </S.SmallText>
            <S.SmallText>
              Maria e José foram apresentar o Menino Jesus no Templo, este é o
              quarto mistério gozoso.
              <sup>
                <a
                  href="https://www.bibliaonline.com.br/acf/lc/2/22-38"
                  target="blank"
                >
                  13
                </a>
              </sup>
              A sua contemplação nos leva a refletir sobre a entrega de Maria e
              José ao apresentarem o Filho de Deus, aceitando as palavras
              proféticas de Simeão.
              <cite>
                <span>
                  — “Eis que este menino está destinado a ser uma causa de queda
                  e de soerguimento para muitos homens em Israel, e a ser um
                  sinal que provocará contradições, a fim de serem revelados os
                  pensamentos de muitos corações. E uma espada transpassará a
                  tua alma.”
                  <sup>
                    <a
                      href="https://www.bible.com/pt/bible/211/LUK.2.34-35.NTLH"
                      target="blank"
                    >
                      14
                    </a>
                  </sup>
                </span>
              </cite>
            </S.SmallText>
            <S.SmallText>
              Neste mistério, meditamos sobre o profundo significado do Filho de
              Deus submetendo-se à Lei e aos seus preceitos. Na vida da Sagrada
              Família, o respeito pela Lei não era apenas um cumprimento
              mecânico, mas uma expressão da certeza de que Deus era o seu
              alicerce. Sendo assim, na Apresentação de Jesus no Templo, assim
              como em outros episódios de sua vida oculta, temos a oportunidade
              de contemplar o Deus Santo que adota o ritmo dos homens. Ele é,
              portanto, o Deus de Amor que entra na história humana para nos
              ensinar a viver uma vida com verdadeiro sentido.
            </S.SmallText>
            <S.SmallText>
              Humildemente, para guardar o segredo de Deus, Maria e José foram
              consagrar seu filho primogênito ao Senhor e fazer a oferta dos
              pobres: duas pombas brancas. Os ricos ofereciam um carneiro.
              Quanta emoção contida no coração daqueles pais, ao ouvirem as
              palavras do velho Simeão, visivelmente inspirado pelo Espírito
              Santo! O grande segredo que traziam consigo estava confirmado por
              aquela profecia que designava Jesus como a Salvação do mundo, Luz
              das nações e Glória de Israel! Mas, tanto quanto o encontro com
              Simeão proporcionara grande felicidade a Maria e a José, a
              despedida deixara dolorosos pressentimentos à Sagrada Família.
              Dirigindo-se a Maria, o velho Simeão lhe anunciara que Jesus
              sofreria por ser alvo de violenta contradição e que ela própria
              teria seu coração traspassado por uma espada de dor… E Ana, uma
              velha viúva, ao ver chegar o Menino Jesus, reconheceu-o como sendo
              o Messias.
            </S.SmallText>
            <S.DefaultText style={{ padding: "30px 0px", fontWeight: "bold" }}>
              5º mistério gozoso: a perda e o reencontro de Jesus no templo
              entre os doutores
            </S.DefaultText>
            <S.Image
              src="assets/rosario/jesus_doutores.jpg"
              alt="Jesus entre os doutores"
            />
            <S.SmallText>
              <cite>
                <span>
                  «Seus pais iam todos os anos a Jerusalém para a festa da
                  Páscoa. Tendo ele atingido doze anos, subiram a Jerusalém,
                  segundo o costume da festa. Acabados os dias da festa, quando
                  voltavam, ficou o menino Jesus em Jerusalém, sem que os seus
                  pais o percebessem... Três dias depois o acharam no templo,
                  sentado no meio dos doutores, ouvindo-os e interrogando-os.
                  Todos os que o ouviam estavam maravilhados da sabedoria de
                  suas respostas» (
                  <a
                    href="https://www.bibliaonline.com.br/nvi/lc/2/41-47"
                    target="blank"
                  >
                    Lc 2, 41-47
                  </a>
                  ).
                </span>
              </cite>
            </S.SmallText>
            <S.SmallText>
              No quinto mistério gozoso, vivenciamos a aflição de Maria e José
              ao perderem o jovem Jesus durante a peregrinação anual a
              Jerusalém.
              <sup>
                <a
                  href="https://www.bibliaonline.com.br/acf/lc/2/41-52"
                  target="blank"
                >
                  15
                </a>
              </sup>
              Jesus estava entre os doutores da lei, que se admiravam com as
              Suas respostas tão cheias de sabedoria. Sobre este acontecimento,
              Lucas narra que
              <cite>
                <span>
                  — “Maria conservava todas essas palavras, meditando-as no seu
                  coração.”
                  <sup>
                    <a
                      href="https://www.bibliaonline.com.br/nvi/lc/2/19"
                      target="blank"
                    >
                      16
                    </a>
                  </sup>
                </span>
              </cite>
            </S.SmallText>
            <S.SmallText>
              Assim também nós devemos meditar cada acontecimento da vida de
              Cristo em nossos corações. A meditação deste mistério leva-nos a
              refletir sobre a importância de buscar constantemente a presença
              de Jesus em nossas vidas, especialmente em meio às ocupações
              cotidianas. A contemplação da alegria que Maria e José
              experimentaram ao reencontrar Jesus após três dias deve servir
              como um impulso para intensificarmos nossas práticas de oração e
              buscarmos uma vida mais íntima com o Senhor.
            </S.SmallText>
            <S.SmallText>
              Para os judeus, a idade de doze anos representava a maioridade
              espiritual (correspondendo aproximadamente à idade da Primeira
              Comunhão e Crisma dos católicos).. Assim sendo, Jesus ingressava
              neste novo período de sua vida, com um comportamento inusitado
              para os leigos, mas absolutamente certo, no entender das pessoas
              religiosas, ele estava na idade de se dedicar ao serviço de Deus.
              Este episódio em que Jesus inicia seu ministério de pregador e de
              testemunho da verdade, nos permite compreender o fato de que Maria
              só vivenciava o mistério de seu filho na parte espiritual. Quantos
              momentos de angústia, de ansiedade e de inquietação terão
              perturbado o coração de seus pais! Aquele desaparecimento de três
              dias, prenunciava a Paixão e morte de Jesus em semelhante data,
              naquele mesmo lugar. Por esta atitude profética, o Menino Jesus
              preparava sua mãe para a provação da última Páscoa, levando-a mais
              depressa a penetrar nos sofrimentos de sua maternidade divina.
              Mas, o drama terminou em alegria e ação de graças: Jesus, se
              perdera e fora reencontrado.
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
              <span>
                1. Papa João Paulo II, Carta Apostólica Rosarium Virginis Mariae
              </span>

              <span>
                2. Papa Bento XVI, Audiência Geral, 28 de dezembro de 2011
              </span>

              <span>3. Papa Leão XIII, Carta Encíclica Magnae Dei Matris</span>
              <span>4. Lc1, 26-38</span>
              <span>5. Lc 1, 28 </span>
              <span>6. Lc 1, 30</span>

              <span>7. Lc 1, 38</span>
              <span>8. Lc 1, 39-56</span>
              <span>9. Lc 1, 43</span>
              <span>10. Lc 2, 1-20</span>
              <span>11. Lc 2, 11</span>
              <span>12. Mt 25, 13</span>
              <span>13. Lc 2, 22-38</span>
              <span>14. Lc 2, 34-35</span>
              <span>15. Lucas 2, 41-52</span>
              <span>16. Lc 2, 19</span>
            </S.SmallText>
            <S.Image
              src="assets/rosario/eucaristia_anjos.jpg"
              alt="Eucaristia e anjos"
            />
            <S.BigText id="luminosos">
              Mistérios Luminosos: a vida pública de Jesus
            </S.BigText>
            <S.DefaultText
              style={{
                borderBottom: "1px solid #D4D4D4",
                paddingBottom: "30px",
              }}
            >
              <span>
                Os mistérios luminosos se voltam para os principais
                acontecimentos da vida pública de Jesus. Confira aqui quais são
                e o que meditamos neles.
              </span>
            </S.DefaultText>
            <S.SmallText style={{ paddingTop: "30px" }}>
              Os mistérios do terço nos conduzem a meditar sobre os principais
              acontecimentos da vida de Jesus, constituindo um verdadeiro
              memorial da Encarnação do Verbo. Ao contemplarmos os mistérios
              luminosos, dedicamos especial atenção à vida pública de Jesus,
              inaugurada pelo seu Batismo no Jordão. Um momento marcado pela
              presença do Espírito Santo — assim como o nosso Batismo.
            </S.SmallText>
            <S.SmallText>
              O início dos sinais em Caná também é um mistério de luz, ali Jesus
              abre o coração dos discípulos para a fé, por meio da intercessão
              da Virgem Maria. Cada mistério é rico em detalhes que proporcionam
              uma profunda reflexão. Neste artigo, passaremos por cada um dos
              mistérios da luz, entendendo qual o episódio da vida de Cristo é
              contemplado e o que se medita nele.
            </S.SmallText>
            <S.BigText>Os Mistérios Luminosos</S.BigText>
            <S.DefaultText
              style={{ paddingBottom: "30px", fontWeight: "bold" }}
            >
              1º mistério luminoso: o batismo de Jesus no Rio Jordão
            </S.DefaultText>
            <S.Image
              src="assets/rosario/batismo_jesus.jpg"
              alt="Batismo de Jesus"
            />
            <S.SmallText>
              <cite>
                <span>
                  «Depois que Jesus foi batizado, saiu logo da água. Eis que os
                  céus se abriram e viu descer sobre ele, em forma de pomba, o
                  Espírito de Deus. E do céu baixou uma voz: "Eis meu Filho
                  muito amado em quem ponho minha afeição"» (
                  <a
                    href="https://www.bibliaonline.com.br/acf/mt/3/16,17"
                    target="blank"
                  >
                    Mt 3,16-17
                  </a>
                  ).
                </span>
              </cite>
            </S.SmallText>
            <S.SmallText>
              No primeiro mistério luminoso, somos conduzidos às águas do Rio
              Jordão, onde Cristo é batizado.
              <sup>
                <a
                  href="https://www.bibliaonline.com.br/acf/mt/3/13-17"
                  target="blank"
                >
                  1
                </a>
              </sup>
              Neste episódio, Jesus, mesmo não tendo pecado, aceita o batismo
              ministrado por João Batista. Este ato de humildade e obediência
              simboliza a consagração de Jesus ao cumprimento da vontade divina.
              É o momento que do Céu ouve-se a voz do pai dizendo
              <cite>
                <span>
                  — “Eis meu Filho muito amado em quem ponho minha afeição”.
                  <sup>
                    <a
                      href="https://www.bibliaonline.com.br/acf/mt/3/17"
                      target="blank"
                    >
                      2
                    </a>
                  </sup>
                </span>
              </cite>
            </S.SmallText>
            <S.SmallText>
              Neste mistério meditamos a humildade, a pureza e a obediência de
              Jesus. O mesmo Espírito Santo que desceu para investi-lo na missão
              vem também sobre nós, para nos ajudar a cumprir a vontade do Pai.
              Por isso, recordamos também o nosso Batismo: somos filhos de Deus
              e membros do seu corpo, a Igreja.
            </S.SmallText>
            <S.SmallText>
              Na meditação deste mistério podemos refletir como o Espírito Santo
              conduziu toda a vida de Cristo e deseja também conduzir a nossa. A
              contemplação do Batismo de Jesus deve levar-nos a renovar as
              promessas do nosso Batismo e, assim, buscar o Senhor todos os
              dias. Isso se dá na aceitação humilde de Sua vontade e no esforço
              por levar uma vida reta, que encontre seu verdadeiro sentido no
              Reino dos Céus.
            </S.SmallText>
            <S.SmallText>
              Depois de trinta anos de vida oculta, Jesus realiza um
              desconcertante ato de humildade. Ele que é o Filho de Deus, o
              Verbo Encarnado, dirige-se ao rio Jordão, misturando-se à multidão
              dos atraídos pela pregação de João Batista. E como eles, pede o
              batismo, como se tivesse algum pecado em si. Em continuação aos
              ensinamentos dos antigos profetas, João Batista anuncia a vinda do
              Messias esperado por Israel. Sua palavra é de fogo e sua reputação
              se propagara pelos arredores do país. João acrescenta à sua
              pregação um batismo de arrependimento. Essa instituição original,
              mesmo que os judeus, pelas suas leis, estivessem acostumados a
              múltiplas purificações, tinha por finalidade não a pureza exterior
              e legal e sim a pureza do coração. Por outro lado, o batismo de
              Jesus não tinha a eficácia do sacramento tal como Jesus iria
              instituí-lo, sacramento que possui uma virtude intrínseca ao
              próprio rito. Justamente no momento em que Jesus se mostra ao
              povo, misturado aos pecadores, seu Pai se preocupa em
              glorificá-lo. Que testemunho esplendoroso prestado à divindade de
              Jesus Cristo pelas duas outras Pessoas da Trindade! O céu se abre;
              o Espírito Santo desce visivelmente e paira sobre a cabeça do
              Salvador; o Pai fala e declara solenemente que aquele homem que
              acaba de se rebaixar à condição de pecador é seu Filho
              “Bem-Amado”! Assim, o primeiro ato da vida pública de Jesus mostra
              que Jesus, tinha como única preocupação assumir imediatamente o
              seu papel de representante dos pecadores e de substituí-los, pela
              sua Missão de Redentor. A intervenção pessoal de Deus -o Pai-
              proporciona à missão de seu Filho uma espécie de consagração
              oficial.
            </S.SmallText>
            <S.DefaultText style={{ padding: "30px 0px", fontWeight: "bold" }}>
              2º mistério luminoso: a autorrevelação de Jesus nas Bodas de Caná
            </S.DefaultText>
            <S.Image
              src="assets/rosario/bodas_cana.jpg"
              alt="Milagre nas bodas de Caná"
            />
            <S.SmallText>
              <cite>
                <span>
                  «Três dias depois, celebravam-se bodas em Caná da Galiléia, e
                  achava-se ali a mãe de Jesus. Também foram convidados Jesus e
                  os seus discípulos. Como viesse a faltar vinho, a mãe de Jesus
                  disse-lhe: "Eles já não têm vinho". Respondeu-lhe Jesus:
                  "Mulher, isso compete a nós? Minha hora ainda não chegou".
                  Disse, então, sua mãe aos serventes: "Fazei o que ele vos
                  disser"» (
                  <a
                    href="https://www.bibliaonline.com.br/acf/jo/2/1-5"
                    target="blank"
                  >
                    Jo 2, 1-5
                  </a>
                  ).
                </span>
              </cite>
            </S.SmallText>
            <S.SmallText>
              No segundo mistério luminoso, testemunhamos a autorrevelação de
              Jesus nas Bodas de Caná
              <sup>
                <a
                  href="https://www.bibliaonline.com.br/nvi/jo/2/1-11"
                  target="blank"
                >
                  3
                </a>
              </sup>
              Durante uma festa de casamento, Jesus realiza seu primeiro
              milagre, por intercessão de sua mãe, transformando água em vinho.
              Neste momento, ele não só revela sua divindade e poder sobre a
              natureza, mas também abre os corações dos discípulos à fé.
            </S.SmallText>
            <S.SmallText>
              Neste mistério, meditamos sobre a presença atenta da Virgem Maria,
              que conhece o poder salvífico de seu Filho: “Fazei o que ele vos
              disser”. Desse modo, pensemos também na obediência a Deus e na
              confiança que devemos ter em Sua Palavra. Refletimos ainda a
              respeito da generosidade de Cristo, que não apenas atende às
              nossas necessidades materiais, mas também espirituais — e deseja a
              nossa participação na operação da graça: “Enchei as talhas de
              água”. Além disso, a presença de Jesus nas bodas de Caná leva-nos
              a compreender o matrimônio como um sinal eficaz da presença de
              Deus.
              <sup>
                <a
                  href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap3_1533-1666_po.html"
                  target="blank"
                >
                  4
                </a>
              </sup>
            </S.SmallText>
            <S.SmallText>
              Uma festa em Caná! Um banquete de casamento! A Mãe de Jesus está
              presente. Jesus também tinha sido convidado para o casamento, bem
              como seus amigos. De repente um incidente bastante banal veio
              chamar a atenção de Maria: não havia mais vinho. Compadecida do
              constrangimento de seus anfitriões, Maria dirige-se ao seu Filho,
              dizendo-lhe: “Eles não têm mais vinho”. Sua oração formula-se com
              tato e discrição. Entretanto, quanta confiança em sua breve
              súplica! Até então, Jesus ainda não havia demonstrado sua
              onipotência, mas a Virgem Maria conhecia o segredo de seu poder.
              Jesus responde à sua Mãe com uma aparente recusa, a fim de
              enfatizar que só Deus tem poder sobre a temporalidade. Todavia,
              como quisesse demonstrar também que Deus ouve nossas preces, suas
              palavras foram ditas num certo tom, e seu olhar assumiu tal
              expressão, que pareciam encorajadores. Assim sendo, Maria
              dirigiu-se aos empregados e disse-lhes: “Fazei tudo que ele vos
              disser”.
            </S.SmallText>
            <S.DefaultText style={{ padding: "30px 0px", fontWeight: "bold" }}>
              3º mistério luminoso: o anúncio do Reino de Deus
            </S.DefaultText>
            <S.Image
              src="assets/rosario/anuncio_reino.jpg"
              alt="Anúncio do Reino de Deus"
            />
            <S.SmallText>
              <cite>
                <span>
                  «Completou-se o tempo e o Reino de Deus está próximo; fazei
                  penitência e crede no Evangelho» (
                  <a
                    href="https://www.bibliaonline.com.br/nvi/mc/1/15"
                    target="blank"
                  >
                    Mc 1, 15
                  </a>
                  ).
                </span>
              </cite>
            </S.SmallText>
            <S.SmallText>
              No terceiro mistério luminoso, deparamo-nos com o anúncio do Reino
              de Deus por Jesus durante seu ministério terreno
              <sup>
                <a
                  href="https://www.bibliaonline.com.br/acf/mc/1/14,15"
                  target="blank"
                >
                  5
                </a>
              </sup>
              , onde Jesus proclama:
              <cite>
                <span>
                  — “Completou-se o tempo e o Reino de Deus está próximo; fazei
                  penitência e crede no Evangelho”.
                  <sup>
                    <a
                      href="https://www.bibliaonline.com.br/nvi/mc/1/15"
                      target="blank"
                    >
                      6
                    </a>
                  </sup>
                </span>
              </cite>
            </S.SmallText>
            <S.SmallText>
              Neste mistério meditamos a vida pública de Jesus; todos os
              milagres, curas e sermões foram realizados pensando em nossa
              salvação. Por isso, é importante refletir sobre a nossa disposição
              para acolher a mensagem do Evangelho e examinar a nossa vida
              considerando como podemos contribuir para a edificação do Reino de
              Deus em nosso meio. Isto é, como podemos testemunhar o Cristo nas
              pequenas coisas do dia a dia e transmitir os valores do Evangelho,
              sendo cristãos — ou seja, “outro Cristo” — para os outros,
              começando pelos que estão mais próximos de nós.
            </S.SmallText>
            <S.SmallText>
              Nas duas frases curtas e cortantes do Evangelho de São Marcos,
              acima citadas, há como que um tom de eternidade. Deus havia
              preparado os espíritos, em Israel, com mensagens cada vez mais
              esclarecedoras. Terminara o tempo de expectativa, de espera, era o
              que anunciava um homem chamado Jesus, cujas pregações eram causa
              de grandes esperanças. Para a humanidade, a boa nova seria a vinda
              do reino da justiça e da misericórdia, da vitória do bem sobre o
              mal, da vida sobre a morte. E Jesus anunciava também duas
              disposições do coração, para acolher o Reino de Deus que seu povo
              aguardava: conversão e fé.
            </S.SmallText>
            <S.DefaultText style={{ padding: "30px 0px", fontWeight: "bold" }}>
              4º mistério luminoso: a transfiguração de Jesus no Monte Tabor
            </S.DefaultText>
            <S.Image
              src="assets/rosario/transfiguracao.jpg"
              alt="Transfiguração"
            />
            <S.SmallText>
              <cite>
                <span>
                  «Seis dias depois, Jesus tomou consigo Pedro, Tiago e João,
                  seu irmão, e conduziu-os à parte a uma alta montanha.Lá se
                  transfigurou na presença deles: seu rosto brilhou como o sol,
                  suas vestes tornaram-se resplandecentes de brancura» (
                  <a
                    href="https://www.bibliaonline.com.br/acf/mt/17/1,2"
                    target="blank"
                  >
                    Mt 17, 1-2
                  </a>
                  ).
                </span>
              </cite>
            </S.SmallText>
            <S.SmallText>
              No quarto mistério luminoso, somos conduzidos ao Monte Tabor, onde
              Jesus, diante dos apóstolos Pedro, Tiago e João, é transfigurado e
              resplandece em glória divina.
              <sup>
                <a
                  href="https://www.bibliaonline.com.br/acf/mt/17/1-8"
                  target="blank"
                >
                  7
                </a>
              </sup>
              Ao contemplarmos a Transfiguração, elevamos os nossos olhos e
              nossos corações para as realidades celestiais, reconhecendo a
              verdadeira identidade de Jesus como o Filho de Deus.
            </S.SmallText>
            <S.SmallText>
              Neste mistério, meditamos a grandeza de Deus, que, por amor a nós,
              escolhe humilhar-se ao ocultar Sua divindade e assumir a natureza
              humana, compartilhando nossa condição — exceto o pecado. No
              momento da transfiguração, Cristo revela Sua divindade aos
              discípulos mais íntimos, de modo que este mistério lança luz sobre
              toda a vida de Jesus, recordando — aos discípulos e a nós — que,
              mesmo nos momentos de aparente desfiguração, como na crucificação,
              a divindade de Cristo permanece.
            </S.SmallText>
            <S.SmallText>
              Além disso, ao contemplar a transfiguração de Jesus, devemos
              meditar sobre a vinda gloriosa de Cristo e a transformação do
              nosso corpo miserável em corpo glorioso. O que nos lembra também
              que é necessário “passar por muitas tribulações para entrar no
              Reino de Deus”.
              <sup>
                <a
                  href="https://www.vatican.va/archive/cathechism_po/index_new/p1s2cap2_422-682_po.html"
                  target="blank"
                >
                  8
                </a>
              </sup>
            </S.SmallText>
            <S.SmallText>
              Jesus chama à parte Pedro, Tiago e João, os três discípulos
              privilegiados, que já havia escolhido para assistirem à
              ressurreição da filha de Jairo e que levará consigo para lhe fazer
              companhia no Getsêmani, conduzindo-os ao alto do Monte Tabor. E
              lá, Jesus se transfigurou. E não somente seu rosto, como também
              suas vestes tornaram-se resplandecentes. E de cada lado de Jesus,
              apareceram Moisés e Elias, simbolizando a perfeita harmonia e
              continuidade entre o Antigo e o Novo Testamento. A nuvem luminosa
              que envolvia o Pai, o Filho e o Espírito Santo vai pairar sobre os
              discípulos. E como de outras vezes, no Monte Sinai, Deus fala
              através da nuvem. Sua voz não se dirigia a Jesus, como em seu
              batismo e, sim, aos discípulos. Confirmava-os na fé e na divindade
              de Cristo. “Este é meu Filho bem amado…” E a voz de Deus continua,
              fortificando-os também na doutrina e nos ensinamentos de Jesus:
              “Escutai-o…”
            </S.SmallText>
            <S.DefaultText style={{ padding: "30px 0px", fontWeight: "bold" }}>
              5º mistério luminoso: a instituição da Eucaristia
            </S.DefaultText>
            <S.Image src="assets/rosario/ultima_ceia.jpg" alt="A Última Ceia" />
            <S.SmallText>
              <cite>
                <span>
                  «Durante a refeição, Jesus tomou o pão, benzeu-o, partiu-o e o
                  deu aos discípulos, dizendo: "Tomai e comei, isto é meu
                  corpo"» (
                  <a
                    href="https://www.bibliaonline.com.br/acf/mt/26/26"
                    target="blank"
                  >
                    Mt 26, 26
                  </a>
                  ).
                </span>
              </cite>
            </S.SmallText>
            <S.SmallText>
              O quinto mistério nos conduz à Última Ceia, quando Jesus institui
              a Eucaristia, antecipando sua entrega na Cruz.
              <sup>
                <a
                  href="https://www.bibliaonline.com.br/acf/mt/26/26-30"
                  target="blank"
                >
                  9
                </a>
              </sup>
              Neste mistério, mergulhamos na profundidade do amor sacrificial de
              Cristo.
            </S.SmallText>
            <S.SmallText>
              Na contemplação deste mistério, somos chamados a reconhecer a
              presença real de Jesus na Eucaristia, refletindo sobre o dom
              incomparável de sua essência em forma de pão e vinho. A meditação
              deve nos conduzir a participar deste sacramento com reverência,
              pureza de coração e plena compreensão da sua dimensão espiritual.
              É o verdadeiro banquete celestial que se apresenta diante de nós.
              Assim, refletimos sobre como a Eucaristia nutre nossa alma e
              fortalece nossa comunhão com Cristo, sendo um memorial contínuo de
              Seu sacrifício redentor.
            </S.SmallText>
            <S.SmallText>
              A Eucaristia, instituída pelo Cristo na véspera de sua Paixão, é o
              grande mistério da fé. Através de um alimento dos mais simples e
              elementares, com palavras também simples, mas ao mesmo tempo muito
              fortes, num ritual discreto e familiar a todos nós, Jesus realiza
              a doação total de si mesmo à humanidade. O pão não muda de
              aparência e nem tão pouco o vinho, porém, pela palavra toda
              poderosa do Filho de Deus, sua substância é mudada no corpo e no
              sangue de Cristo. A fórmula da consagração do cálice, mais
              desenvolvida do que a do pão, exprime com maior clareza o sentido
              da nova instituição. Esta não apenas com o objetivo de realizar a
              presença do Cristo sob as aparências do pão e do vinho, mas, para
              assim tornar-se alimento dos fiéis, O sacrifício da Cruz se
              reproduz a cada instante: é o memorial do mistério pascal.
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
              <span>1. Mt 3, 13-17</span>

              <span>2. Mt 3, 17</span>

              <span>3. Jo 2, 1-11</span>

              <span>4. CIC, 1613</span>
              <span>5. Marcos 1, 14-15</span>
              <span>6. Mc 1, 15 </span>
              <span>7. Mt 17, 1-8</span>

              <span>8. CIC, 556</span>
              <span>9. Mt 26, 26-30</span>
            </S.SmallText>
            <S.Image
              src="assets/rosario/crucificacao_paisagem.jpg"
              alt="Maria e Jesus morto"
            />
            <S.BigText id="dolorosos">
              Mistérios Dolorosos: o sofrimento redentor de Nosso Senhor Jesus
              Cristo
            </S.BigText>
            <S.DefaultText
              style={{
                borderBottom: "1px solid #D4D4D4",
                paddingBottom: "30px",
              }}
            >
              <span>
                Conheça o que contemplamos nos Mistérios Dolorosos da oração do
                terço e saiba como meditar as dores de Jesus em cada um deles.
              </span>
            </S.DefaultText>
            <S.SmallText>
              Os Evangelhos conferem uma grande importância aos mistérios da dor
              de Cristo, destacando a relevância da meditação sobre esses
              episódios centrais da nossa fé. A piedade cristã, ao longo dos
              séculos, encontrou na Quaresma, sobretudo com o exercício da Via
              Sacra, uma maneira de mergulhar nos diferentes momentos da Paixão,
              reconhecendo nesses eventos o ápice da revelação do amor divino e
              a fonte da nossa salvação.
              <sup>
                <a
                  href="https://www.vatican.va/content/john-paul-ii/pt/apost_letters/2002/documents/hf_jp-ii_apl_20021016_rosarium-virginis-mariae.html"
                  target="blank"
                >
                  1
                </a>
              </sup>
            </S.SmallText>
            <S.SmallText>
              O Rosário, por sua vez, oferece um caminho de meditação das dores
              de Jesus, ao selecionar momentos específicos da Paixão. Desse
              modo, os mistérios dolorosos guiam o fiel orante a fixar o olhar
              do coração nessas cenas, revivê-las espiritualmente e unir os seus
              sofrimentos aos de Cristo. Conheça a seguir os mistérios da dor e
              o que meditamos em cada um deles.
            </S.SmallText>
            <S.BigText>Os Mistérios Dolorosos </S.BigText>
            <S.DefaultText
              style={{ paddingBottom: "30px", fontWeight: "bold" }}
            >
              1º mistério doloroso: a agonia de Jesus no Horto das Oliveiras
            </S.DefaultText>
            <S.Image
              src="assets/rosario/agonia_jesus.jpg"
              alt="Agonia no Horto das Oliveiras"
            />
            <S.SmallText>
              <cite>
                <span>
                  «Retirou-se Jesus com eles para um lugar chamado Getsêmani e
                  disse-lhes: "Assentai-vos aqui, enquanto eu vou ali orar". E,
                  tomando consigo Pedro e os dois filhos de Zebedeu, começou a
                  entristecer-se e a angustiar-se. Disse-lhes, então: "Minha
                  alma está triste até a morte. Ficai aqui e vigiai comigo".
                  Adiantou-se um pouco e, prostrando-se com a face por terra,
                  assim rezou: "Meu Pai, se é possível, afasta de mim este
                  cálice! Todavia não se faça o que eu quero, mas sim o que tu
                  queres"» (
                  <a
                    href="https://www.bibliaonline.com.br/acf/mt/26/36-39"
                    target="blank"
                  >
                    Mt 26, 36-39
                  </a>
                  ).
                </span>
              </cite>
            </S.SmallText>
            <S.SmallText>
              No primeiro mistério doloroso, deparamo-nos com a agonia de Jesus
              no Horto das Oliveiras, onde Ele chega a transpirar sangue.
              <sup>
                <a
                  href="https://www.bibliaonline.com.br/acf/lc/22/39-46"
                  target="blank"
                >
                  2
                </a>
              </sup>
              Antecipando a sua crucificação, Jesus retira-se para rezar. Em um
              estado de angústia profunda, Ele roga ao Pai para afastar dele o
              cálice da Paixão, mas submete-se à vontade divina.
            </S.SmallText>
            <S.SmallText>
              Neste momento, meditamos sobre a humanidade genuína de Jesus, que
              se manifesta ao implorar ao Pai para afastar dele o cálice da
              morte na Cruz. No entanto, de todos os tormentos que Jesus
              passaria, o que mais o afligia era saber que — apesar de todas as
              suas penas — ainda se cometeriam tantos pecados no mundo.
              <sup>
                <a
                  href="https://catholicatraditio.wordpress.com/wp-content/uploads/2010/10/a_paixo_de_nosso_senhor_jesus_.pdf"
                  target="blank"
                >
                  3
                </a>
              </sup>
              Assim, contemplamos o grande amor de Deus por nós que, mesmo
              sabendo disso, segue firme na sua decisão até a Cruz,
              entregando-se ao plano redentor. Além disso, este mistério
              leva-nos a pensar sobre a nossa própria capacidade de aceitar a
              vontade de Deus em meio às adversidades, buscando a oração e
              nutrindo a confiança na providência divina.
            </S.SmallText>
            <S.SmallText>
              Ao jardim chamado Getsêmani, Jesus leva consigo os três apóstolos:
              Pedro, Tiago e João que haviam assistido à Transfiguração. Uma
              angústia mortal leva o pensamento de Jesus a meditar sobre os
              suplícios que deveria sofrer e uma insondável desolação: a
              tristeza do amigo traído, do Mestre abandonado, do Mestre
              rejeitado; o horror dos pecados e das infâmias da humanidade; a
              dor diante da ingratidão com que os homens retribuem seu amor; e
              as almas que o rejeitam. Na provação, Jesus se volta com humildade
              e confiança para seu Pai. Ele se afasta para rezar e depois volta
              para junto dos três apóstolos que tinham adormecido. Ele dirige a
              Pedro algumas palavras de reprovação, juntando uma exortação:
              “Vigiai e orai…” E pela segunda vez e depois pela terceira vez,
              Jesus se afasta para rezar. Quando, finalmente, se junta aos
              discípulos, Jesus estava pronto para o combate. Sua oração
              perseverante havia sido ouvida. Fortificado pela graça, Jesus
              aceita o cálice da Paixão.
            </S.SmallText>
            <S.DefaultText style={{ padding: "30px 0px", fontWeight: "bold" }}>
              2º mistério doloroso: a flagelação de Jesus
            </S.DefaultText>
            <S.Image
              src="assets/rosario/flagelado_jesus.jpg"
              alt="Flagelação de Jesus"
            />
            <S.SmallText>
              <cite>
                <span>
                  «Então lhes soltou Barrabás; mas a Jesus mandou açoitar, e o
                  entregou para ser crucificado» (
                  <a
                    href="https://www.bibliaonline.com.br/acf/mt/27/26"
                    target="blank"
                  >
                    Mt 27,26
                  </a>
                  ).
                </span>
              </cite>
            </S.SmallText>
            <S.SmallText>
              No segundo mistério doloroso, dirigimos nosso olhar à flagelação
              de Jesus.
              <sup>
                <a
                  href="https://www.bibliaonline.com.br/acf/mt/27/26"
                  target="blank"
                >
                  4
                </a>
              </sup>
              Nesse ato de crueldade, Jesus é impiedosamente açoitado por
              soldados romanos, suportando dores indescritíveis por amor à
              humanidade — cada um de nós, em particular. Meditar sobre essa
              flagelação nos mergulha na profundidade do sacrifício de Cristo
              pela nossa redenção.
            </S.SmallText>
            <S.SmallText>
              Neste mistério, meditamos Jesus, inocente, recebendo um dos
              castigos reservados somente aos escravos. Alguns escritos, como os
              de Cornélio a Lápide e os de S. Lourenço auxiliam-nos nessa
              meditação. Eles revelam que nesse tormento Jesus deveria
              naturalmente ter morrido — uma vez que foram muitos algozes.
              Contudo, por virtude divina, quis conservar a sua vida para sofrer
              tormentos ainda maiores por amor a nós.
              <sup>
                <a
                  href="https://catholicatraditio.wordpress.com/wp-content/uploads/2010/10/a_paixo_de_nosso_senhor_jesus_.pdf"
                  target="blank"
                >
                  5
                </a>
              </sup>
              Ao contemplar este cenário podemos examinar nossas próprias
              fraquezas e pecados, reconhecendo a necessidade de redenção e
              renovando nosso compromisso com uma vida alinhada aos ensinamentos
              de Cristo, que suportou a flagelação — e outros tormentos — para
              nos libertar do peso do pecado.
            </S.SmallText>
            <S.SmallText>
              Jesus foi flagelado. Trata-se de um fato histórico, relatado pelos
              quatro Evangelistas como um episódio marcante de sua Paixão.
              Pilatos, a quem Jesus foi conduzido, depois da conspiração com o
              grande sacerdote Caifás, livra Jesus do seu jugo, mesmo antes de
              pronunciar a sentença de morte. Efetivamente, desconcertado por
              todos aqueles acontecimentos, propôs a anistia, mas um famoso
              prisioneiro, chamado Barrabás, tinha a preferência dos judeus.
              Pilatos ainda esperava acalmar os inimigos de Jesus, livrando-o do
              suplício da flagelação. Os soldados romanos despojaram Jesus de
              suas vestes, amarraram-no a uma coluna e começaram a açoitá-lo com
              seus chicotes compostos de duas ou três correias, tendo às suas
              extremidades ossos de carneiro ou bolas de metal aos pares. Entre
              os judeus, o limite máximo de açoites era de 49 golpes. A
              flagelação romana era muito mais violenta. No Sudário de Turim, os
              especialistas encontraram cerca de 120 impressões de golpes
              desfechados contra Jesus.
            </S.SmallText>
            <S.DefaultText style={{ padding: "30px 0px", fontWeight: "bold" }}>
              3º mistério doloroso: a coroação de espinhos de Jesus
            </S.DefaultText>
            <S.Image
              src="assets/rosario/coroacao_espinhos.jpg"
              alt="Coroação de Espinhos"
            />
            <S.SmallText>
              <cite>
                <span>
                  «Os soldados do governador conduziram Jesus para o pretório e
                  rodearam-no com todo o pelotão. Arrancaram-lhe as vestes e
                  colocaram-lhe um manto escarlate. Depois, trançaram uma coroa
                  de espinhos, meteram-lha na cabeça e puseram-lhe na mão uma
                  vara. Dobrando os joelhos diante dele, diziam com escárnio:
                  "Salve, rei dos judeus!"» (
                  <a
                    href="https://www.bibliaon.com/versiculo/mateus_27_27-29/#:~:text=27%20Então%2C%20os%20soldados%20do,a%20colocaram%20em%20sua%20cabeça."
                    target="blank"
                  >
                    Mt 27, 27-29
                  </a>
                  ).
                </span>
              </cite>
            </S.SmallText>
            <S.SmallText>
              No terceiro mistério doloroso, voltamos nossa atenção à coroação
              de espinhos em Nosso Senhor.
              <sup>
                <a
                  href="https://www.bibliaonline.com.br/acf/mt/27/29"
                  target="blank"
                >
                  6
                </a>
              </sup>
              Jesus é cruelmente zombado e torturado por soldados romanos, que o
              coroam com espinhos, escarnecendo de Sua realeza divina.
            </S.SmallText>
            <S.SmallText>
              Aqui meditamos o tormento mais prolongado da paixão, pois Jesus o
              suportou até a morte.
              <cite>
                <span>
                  — “E o manso Cordeiro deixava atormentar-se ao gosto deles,
                  sem dizer palavras, sem se lamentar.”
                  <sup>
                    <a
                      href="https://catholicatraditio.wordpress.com/wp-content/uploads/2010/10/a_paixo_de_nosso_senhor_jesus_.pdf"
                      target="blank"
                    >
                      7
                    </a>
                  </sup>
                </span>
              </cite>
            </S.SmallText>
            <S.SmallText>
              Ao meditar sobre esse mistério, contemplamos a humilhação de Jesus
              e a injustiça sofrida em nome da nossa redenção. Sendo assim, ao
              considerar a coroa de espinhos, somos convidados a examinar as
              vezes em que nossa própria dignidade foi menosprezada. Como
              reagimos? Nosso modelo deve ser a paciência e o perdão de Cristo,
              que transforma o sofrimento em redenção e dignifica até os maiores
              sofrimentos.
            </S.SmallText>
            <S.SmallText>
              Quando os algozes fartaram-se de açoitar Jesus, desamarraram-no da
              coluna e jogaram sobre seus ombros ensangüentados um manto
              vermelho, colocaram uma coroa feita por longos espinhos
              entrelaçados, cujas pontas lhe rasgavam a cabeça e a fronte. Com
              risos de escárnio, prostravam-se aos seus pés, zombando de suas
              pretensões reais e esbofeteando-lhe o rosto. A realeza do Cristo,
              Rei do Céu e da terra, transformava-se em motivo de deboche, mas
              através daquele abismo de humilhações, a coroação de espinhos
              deixava antever o triunfo de Cristo-Rei. A coroa de espinhos,
              objeto da veneração dos cristãos, foi depositada na Catedral de
              Paris devido a um ofício importante de São Luis, rei de França,
              que, para conservá-la, fez construir a “Sainte Chapelle”, isto em
              1246. A coroa de espinhos é venerada em todas as primeiras
              sextas-feiras do mês e nas sextas-feiras da Quaresma, na Igreja de
              Notre Dame de Paris.
            </S.SmallText>
            <S.DefaultText style={{ padding: "30px 0px", fontWeight: "bold" }}>
              4º mistério doloroso: a subida ao Calvário
            </S.DefaultText>
            <S.Image
              src="assets/rosario/subida_calvario.jpg"
              alt="Subida ao Calvário"
            />
            <S.SmallText>
              <cite>
                <span>
                  «Passava por ali certo homem de Cirene, chamado Simão, que
                  vinha do campo, pai de Alexandre e de Rufo, e obrigaram-no a
                  que lhe levasse a cruz. Conduziram Jesus ao lugar chamado
                  Gólgota, que quer dizer lugar do crânio» (
                  <a
                    href="https://www.bibliaon.com/versiculo/marcos_15_21-22/"
                    target="blank"
                  >
                    Mc 15, 21-22
                  </a>
                  ).
                </span>
              </cite>
            </S.SmallText>
            <S.SmallText>
              No quarto mistério doloroso acompanhamos a penosa subida de Jesus
              ao Calvário.
              <sup>
                <a
                  href="https://www.bibliaonline.com.br/nvi/jo/19/16,17"
                  target="blank"
                >
                  8
                </a>
              </sup>
              Jesus, exausto e carregando a cruz, caminha em direção ao local da
              crucificação. Jesus carrega em seus ombros o instrumento de sua
              própria morte. O mesmo por meio do qual nos viria a salvação: a
              cruz tão pesada.
            </S.SmallText>
            <S.SmallText>
              Neste mistério, meditamos o efeito do peso dos nossos pecados
              sobre os ombros de um inocente, o próprio Deus Encarnado. A
              iniquidade de todos nós pesou sobre Ele.
              <sup>
                <a
                  href="https://www.bibliaonline.com.br/nvi/is/53/6"
                  target="blank"
                >
                  9
                </a>
              </sup>
              Pensemos na cruz que
              <cite>
                <span>
                  — “foi o nobre instrumento com que Jesus Cristo adquiriu
                  tantas almas, porque, morrendo nela, pagou a pena de nossos
                  pecados e assim as resgatou do inferno, fazendo-as suas.”
                  <sup>
                    <a
                      href="https://catholicatraditio.wordpress.com/wp-content/uploads/2010/10/a_paixo_de_nosso_senhor_jesus_.pdf"
                      target="blank"
                    >
                      10
                    </a>
                  </sup>
                </span>
              </cite>
            </S.SmallText>
            <S.SmallText>
              Ao contemplar este episódio, consideramos o peso da cruz em nossas
              próprias vidas e como devemos seguir o exemplo de Cristo na
              aceitação das dificuldades. Cada passo que Cristo deu em direção a
              crucificação foi pensando em nós. Ao meditar sobre a subida ao
              Calvário, refletimos, portanto, sobre o amor de Deus por nós e o
              modo como carregamos nossas próprias cruzes.
            </S.SmallText>
            <S.SmallText>
              Desse modo, ele nos ensina que a nossa “cruz” pode se tornar um
              meio de transformação e, até mesmo, de redenção em nossa vida — se
              a abraçarmos como Ele fez.
              <cite>
                <span>
                  — “Se alguém quiser vir após mim, abnegue-se a si mesmo e tome
                  sua cruz e siga-me.”(
                  <a
                    href="https://www.bibliaonline.com.br/acf/mt/16/24"
                    target="blank"
                  >
                    Mt 16, 24
                  </a>
                  )
                </span>
              </cite>
            </S.SmallText>
            <S.SmallText>
              Segundo as regras, o condenado devia levar, até o lugar do
              suplício, a pesada parte transversal da cruz, à qual seria pregado
              ou amarrado. Do alto de antiga pedreira, nos arredores de
              Jerusalém, ergue-se um pico rochoso de cerca de 4 metros de
              altura. Três estacas foram enfileiradas, sobre o montículo chamado
              Gólgota. Pouco a pouco a lembrança do caminho por onde passou o
              lúgubre cortejo tornou-se local de crescente devoção dos cristãos.
              No século XVIII definiram-se e difundiram-se as quatorze estações
              sob a influência de São Leonardo de Port-Maurice que fez
              reproduzir um total de 572 ditos Caminhos da Cruz inclusive a Via
              Sacra do Coliseu, em Roma, que a cada ano, na Sexta-Feira Santa, o
              Papa percorre em oração.
            </S.SmallText>
            <S.DefaultText style={{ padding: "30px 0px", fontWeight: "bold" }}>
              5º mistério doloroso: a crucificação e morte de Nosso Senhor
            </S.DefaultText>
            <S.Image
              src="assets/rosario/crucificacao_vertical.jpg"
              alt="Jesus crucificado"
            />
            <S.SmallText>
              <cite>
                <span>
                  «Chegados que foram ao lugar chamado Calvário, ali o
                  crucificaram, como também os ladrões, um à direita e outro à
                  esquerda. E Jesus dizia: "Pai, perdoa-lhes; porque não sabem o
                  que fazem"... Era quase à hora sexta e em toda a terra houve
                  trevas até a hora nona. Escureceu-se o sol e o véu do templo
                  rasgou-se pelo meio. Jesus deu então um grande brado e disse:
                  "Pai, nas tuas mãos entrego o meu espírito". E, dizendo isso,
                  expirou» (
                  <a
                    href="https://www.bible.com/pt/bible/211/LUK.23.33-46.NTLH"
                    target="blank"
                  >
                    Lc 23, 33-46
                  </a>
                  ).
                </span>
              </cite>
            </S.SmallText>
            <S.SmallText>
              No quinto mistério doloroso, direcionamos nossa atenção para a
              crucificação e morte de Nosso Senhor.
              <sup>
                <a
                  href="https://www.bibliaonline.com.br/acf/jo/19/17-37"
                  target="blank"
                >
                  11
                </a>
              </sup>
              Jesus é pregado na cruz, oferecendo Sua vida como sacrifício
              redentor por cada um de nós individualmente. Neste mistério,
              contemplamos o imenso amor de Deus, pois a morte de Cristo é
              reconhecida como a mais dolorosa, revelando-se um testemunho
              supremo desse amor divino. Ele suportou inúmeros tormentos em seu
              corpo e, de maneira ainda mais profunda, experimentou na alma a
              dor pelos nossos pecados.
            </S.SmallText>
            <S.SmallText>
              Ao contemplar este mistério, meditamos sobre imenso amor de Deus
              manifestado na cruz, que nos leva a encontrar sentido na dor
              através da fé na ressurreição. Diante da meditação da morte de
              Jesus na cruz, podemos identificar-nos com a figura do bom ladrão
              e pedir
              <cite>
                <span>
                  — “recordai-vos, Senhor, que eu sou uma daquelas ovelhas pelas
                  quais vós destes a vida. Consolai-me, fazendo-me sentir que me
                  perdoastes, dando-me uma grande dor de meus pecados. Ó grande
                  sacerdote, que vos sacrificastes a vós mesmo por amor das
                  vossas criaturas, tende compaixão de mim. Sacrifico-vos de
                  agora em diante a minha vontade, os meus sentidos, as minhas
                  satisfações e todos os meus desejos. Eu creio que vós, meu
                  Deus, morrestes pregado na cruz por mim. Caia sobre mim, vos
                  suplico, o vosso sangue divino: ele me lave de todos os meus
                  pecados; ele me abrase em vosso santo amor e me faça todo
                  vosso. Eu vos amo, ó meu Jesus, e desejo morrer crucificado
                  por vós que morrestes crucificado por mim.”
                  <sup>
                    <a
                      href="https://catholicatraditio.wordpress.com/wp-content/uploads/2010/10/a_paixo_de_nosso_senhor_jesus_.pdf"
                      target="blank"
                    >
                      12
                    </a>
                  </sup>
                </span>
              </cite>
            </S.SmallText>
            <S.SmallText>
              São três horas da tarde. Nesta hora trágica, o Filho de Deus acaba
              de morrer, executado pelos homens. É sem resistência que o Mestre
              do céu e da terra sujeitou-se ao terrível suplício da
              crucificação. Quão despedaçado o coração de sua Mãe, que o
              acompanhou até o Calvário e permaneceu de pé junto à Cruz!
              Testemunha ocular da morte de Jesus, João nos reporta seu
              testamento. Quatro mulheres também estavam perto da Cruz. Diante
              desse grupo Jesus declara sua vontade suprema: confia à sua mãe o
              discípulo bem-amado e através dele sua Igreja e a humanidade
              inteira; e sobre a terra, João ocupará junto à Mãe de Jesus o
              lugar de seu Filho que vai morrer. Ele lhe dará abrigo,
              alimentando-a e amando-a como filho. Depois de sua morte, uma
              derradeira revelação do amor de Jesus nos é dada através de um ato
              cheio de simbolismos: seu coração é trespassado por uma lança e
              dali sai sangue e água.
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
              <span>
                1. Papa João Paulo II, Carta Apostólica Rosarium Virginis Mariae
              </span>
              <span>2. Lc 22, 39-46</span>
              <span>
                3. Ligório, Afonso Maria de. A Paixão de Nosso Senhor Jesus
                Cristo. p.18
              </span>
              <span>4. Mt 27, 26</span>

              <span>
                5. Ligório, Afonso Maria de. A Paixão de Nosso Senhor Jesus
                Cristo. p.24
              </span>
              <span>6. Mt 27, 29</span>

              <span>
                7. Ligório, Afonso Maria de. A Paixão de Nosso Senhor Jesus
                Cristo. p.26
              </span>
              <span>8. Jo 19,16-17</span>
              <span>9. Is 53, 6</span>

              <span>
                10. Ligório, Afonso Maria de. A Paixão de Nosso Senhor Jesus
                Cristo. p.31
              </span>
              <span>11. Jo 19,17-37</span>

              <span>
                12. Ligório, Afonso Maria de. A Paixão de Nosso Senhor Jesus
                Cristo. p.34
              </span>
            </S.SmallText>
            <S.Image
              src="assets/rosario/ressureicao_banner.png"
              alt="Coroação de Nossa Senhora"
            />
            <S.BigText id="gloriosos">
              Mistérios Gloriosos: a ressurreição de Jesus e seus efeitos
            </S.BigText>
            <S.DefaultText
              style={{
                borderBottom: "1px solid #D4D4D4",
                paddingBottom: "30px",
              }}
            >
              <span>
                Saiba como meditar os mistérios gloriosos do terço, nos quais
                contemplamos a glória de Jesus e da Virgem Maria.
              </span>
            </S.DefaultText>
            <S.SmallText>
              Meditar a Paixão de Cristo é parte fundamental da vida do cristão,
              pois conduz ao cerne da mensagem redentora. No entanto, a
              contemplação do rosto de Cristo não se restringe à imagem do
              crucificado: Ele é também o Ressuscitado! Por isso, a contemplação
              dos Mistérios Gloriosos torna-se uma jornada enriquecedora, por
              meio da qual o cristão não apenas recorda as alegrias manifestadas
              aos Apóstolos, a Madalena e aos discípulos de Emaús, mas também
              mergulha na intensidade da nova existência do Cristo glorificado.
              <sup>
                <a
                  href="https://www.vatican.va/content/john-paul-ii/pt/apost_letters/2002/documents/hf_jp-ii_apl_20021016_rosarium-virginis-mariae.html"
                  target="blank"
                >
                  1
                </a>
              </sup>
            </S.SmallText>
            <S.SmallText>
              Os Mistérios Gloriosos do terço englobam o episódio da
              Ressurreição até a Coroação de Maria como Rainha dos Anjos e
              Santos. Nesse percurso, a Ascensão de Cristo à direita do Pai e a
              Assunção de Maria tornam-se destinos que revelam não apenas a
              glória individual de ambos, mas também apontam para a condição
              escatológica da Igreja — de cada um de nós. Enquanto isso, somos
              conduzidos na caminhada terrena pelo Espírito Santo, enviado do
              Pai. Vamos, neste artigo, passar por estes mistérios, a fim de
              compreender como podemos meditar cada um deles.
            </S.SmallText>
            <S.BigText>Os Mistérios Gloriosos</S.BigText>
            <S.DefaultText
              style={{ paddingBottom: "30px", fontWeight: "bold" }}
            >
              1º mistério glorioso: a ressurreição de Jesus Cristo
            </S.DefaultText>
            <S.Image
              src="assets/rosario/ressureicao_jesus.jpg"
              alt="Ressureição de Jesus Cristo"
            />
            <S.SmallText>
              <cite>
                <span>
                  «No primeiro dia da semana, muito cedo, dirigiram-se ao
                  sepulcro com os aromas que haviam preparado. Acharam a pedra
                  removida longe da abertura do sepulcro. Entraram, mas não
                  encontraram o corpo do Senhor Jesus. Não sabiam elas o que
                  pensar, quando apareceram em frente delas dois personagens com
                  vestes resplandecentes. Como estivessem amedrontadas e
                  voltassem o rosto para o chão, disseram-lhes eles: "Por que
                  buscais entre os mortos aquele que está vivo? Não está aqui,
                  mas ressuscitou"» (
                  <a
                    href="https://www.bibliaonline.com.br/nvi/lc/24/1-6"
                    target="blank"
                  >
                    Lc 24, 1-6
                  </a>
                  ).
                </span>
              </cite>
            </S.SmallText>
            <S.SmallText>
              No primeiro mistério glorioso, contemplamos a Ressurreição de
              Jesus Cristo. O mistério pascal é o ápice da nossa fé, a Paixão de
              Cristo que culmina em sua ressurreição.
              <sup>
                <a
                  href="https://www.bibliaonline.com.br/nvi/mt/28/1-10"
                  target="blank"
                >
                  2
                </a>
              </sup>
              Ela simboliza a vitória de Cristo sobre o pecado e a morte,
              oferecendo, assim, a esperança e a vida eterna aos fiéis.
              <cite>
                <span>
                  — “O cristão, que une a sua própria morte à de Jesus, encara a
                  morte como chegada até junto d’Ele, como entrada na vida
                  eterna.”
                  <sup>
                    <a
                      href="https://www.vatican.va/archive/cathechism_po/index_new/p1s2cap3_683-1065_po.html"
                      target="blank"
                    >
                      3
                    </a>
                  </sup>
                </span>
              </cite>
            </S.SmallText>
            <S.SmallText>
              Ao meditar este mistério, refletimos, durante as Ave-Marias, sobre
              a alegria da Ressurreição, renovando a nossa confiança na promessa
              de vida eterna por meio de Cristo. Saber que Cristo ressuscitou
              dos mortos e triunfou sobre a morte deve levar-nos a desejar
              também esta vitória, que se alcança dia após dia lutando contra o
              pecado. Meditar a ressurreição, portanto, deve inspirar-nos a uma
              vida reta, por meio da qual buscamos alcançar o céu, uma vez que —
              como rezamos no Credo — cremos na ressurreição dos mortos:
              <cite>
                <span>
                  — “Os que tiverem praticado o bem, para uma ressurreição de
                  vida e os que tiverem praticado o mal, para uma ressurreição
                  de condenação” (
                  <a
                    href="https://www.bibliaonline.com.br/acf/jo/5/29"
                    target="blank"
                  >
                    Jo 5, 29
                  </a>
                  ).
                </span>
              </cite>
            </S.SmallText>
            <S.SmallText>
              A Ressurreição de Jesus Cristo é o fato principal da história.
              Sobre este fato repousa o Cristianismo: “Ele ressuscitou!” foi o
              “toque de reunir” dos discípulos, na manhã de Páscoa, profissão de
              fé selada com sangue. Os onze, a quem Jesus apareceu, reconheceram
              Jesus vivo. E durante quarenta dias, puderam conversar com Ele,
              tocá-lo e comer em sua companhia. Entre os Evangelistas, só Mateus
              tentou evocar a Ressurreição com discrição e sobriedade, partindo
              do testemunho das mulheres, a quem o anjo aparecera. Abstiveram-se
              de descrever a Ressurreição propriamente dita, mistério que
              ocorreu sem testemunhas. O anjo confiou às mulheres uma mensagem
              para os Apóstolos. E o próprio Jesus veio-lhes ao encontro e lhes
              reiterou a mesma mensagem..
            </S.SmallText>
            <S.DefaultText style={{ padding: "30px 0px", fontWeight: "bold" }}>
              2º mistério glorioso: a ascensão de Jesus ao Céu
            </S.DefaultText>
            <S.Image
              src="assets/rosario/ascencao_jesus.jpg"
              alt="Ascenção de Jesus"
            />
            <S.SmallText>
              <cite>
                <span>
                  «Depois que o Senhor Jesus lhes falou, foi levado ao céu e
                  está sentado à direita de Deus» (
                  <a
                    href="https://www.bibliaonline.com.br/acf/mc/16/19"
                    target="blank"
                  >
                    Mc 16, 19
                  </a>
                  ).
                </span>
              </cite>
            </S.SmallText>
            <S.SmallText>
              No segundo mistério glorioso, voltamos nossa atenção para a
              Ascensão de Jesus ao Céu, ou seja, Jesus sobe aos céus, diante de
              seus discípulos, após ter cumprido plenamente sua missão.
              <sup>
                <a
                  href="https://www.bibliaonline.com.br/acf/lc/24/50-53"
                  target="blank"
                >
                  4
                </a>
                ,
                <a
                  href="https://www.bibliaonline.com.br/acf/atos/1/9-11"
                  target="blank"
                >
                  5
                </a>
              </sup>
              <cite>
                <span>
                  — “A ascensão de Cristo marca a entrada definitiva da
                  humanidade de Jesus no domínio celeste de Deus, de onde há-de
                  voltar mas que, entretanto, O oculta aos olhos dos homens.”
                  <sup>
                    <a
                      href="https://www.vatican.va/archive/cathechism_po/index_new/p1s2cap2_422-682_po.html"
                      target="blank"
                    >
                      6
                    </a>
                  </sup>
                </span>
              </cite>
            </S.SmallText>
            <S.SmallText>
              A Ascensão ressalta a natureza divina de Cristo e sua soberania
              sobre o universo. Ao meditar sobre este mistério, recordamos a
              promessa de Cristo de nos preparar um lugar na morada celeste
              <sup>
                <a
                  href="https://www.bibliaonline.com.br/acf/jo/14/2"
                  target="blank"
                >
                  7
                </a>
              </sup>
              , apontando para o céu como nosso destino final. Ao mesmo tempo,
              essa reflexão nos conduz a considerar a missão evangelizadora que
              Jesus confiou a seus seguidores após sua partida. Como cristãos,
              assumimos essa mesma responsabilidade, reconhecendo-a como nossa
              antes de alcançarmos o Reino Celeste. Cada Ave-Maria é, portanto,
              uma oportunidade para renovar o compromisso pessoal com a missão
              cristã, buscando o auxílio divino para viver o Evangelho e
              proclamá-lo — começando sempre pelos que estão mais próximos.
            </S.SmallText>
            <S.SmallText>
              No 40º dia depois da Ressurreição, Jesus apareceu pela última vez
              aos seus discípulos, no Cenáculo, em Jerusalém. Depois de
              compartilhar da refeição deles, marca encontro com eles no Monte
              das Oliveiras. Jesus refez, portanto, o percurso da noite da
              Quinta Feira Santa. Que distância entre Jesus do Getsêmani e Jesus
              da Ascensão! O primeiro, curvado ao peso de um sofrimento tal que
              se manifestava num suor de sangue e o segundo, triunfante sobre a
              morte e sobre o inferno, numa glória radiosa. O pequeno grupo
              passa pelo jardim do Getsêmani, galgando o Monte das Oliveiras até
              o seu pico, onde Jesus dirige aos seus um solene adeus e em
              seguida uma última benção. Jesus começa, então. a elevar-se
              majestosamente da terra, diante dos discípulos prosternados.. Em
              pouco tempo uma nuvem luminosa escondeu-o dos olhares humanos.
            </S.SmallText>
            <S.DefaultText style={{ padding: "30px 0px", fontWeight: "bold" }}>
              3º mistério glorioso: a descida do Espírito Santo sobre Maria e os
              Apóstolos
            </S.DefaultText>
            <S.Image
              src="assets/rosario/pentecostes.jpg"
              alt="Ascenção de Jesus"
            />
            <S.SmallText>
              <cite>
                <span>
                  «Chegando o dia de Pentecostes, estavam todos reunidos no
                  mesmo lugar. De repente, veio do céu um ruído, como se
                  soprasse um vento impetuoso, e encheu toda a casa onde estavam
                  sentados. Apareceu-lhes então uma espécie de línguas de fogo
                  que se repartiram e pousaram sobre cada um deles. Ficaram
                  todos cheios do Espírito Santo e começaram a falar em línguas,
                  conforme o Espírito Santo lhes concedia que falassem» (
                  <a
                    href="https://www.bibliaonline.com.br/acf/atos/2/1-4"
                    target="blank"
                  >
                    At 2, 1-4
                  </a>
                  ).
                </span>
              </cite>
            </S.SmallText>
            <S.SmallText>
              No terceiro mistério glorioso, contemplamos a Descida do Espírito
              Santo sobre Maria e os Apóstolos — episódio conhecido como
              Pentecostes.
              <sup>
                <a
                  href="https://www.bibliaonline.com.br/acf/atos/2/1-13"
                  target="blank"
                >
                  8
                </a>
              </sup>
              Neste evento, o Espírito Santo desce sobre os discípulos reunidos
              manifestando-se como línguas de fogo. Esta efusão capacita os
              apóstolos a proclamarem o Evangelho em diversas línguas,
              simbolizando a universalidade da mensagem cristã.
            </S.SmallText>
            <S.SmallText>
              Ao meditar sobre este mistério, recordamos a
              <strong>
                presença ativa do Espírito Santo na vida da Igreja
              </strong>
              e na nossa própria vida; refletimos sobre a importância do
              Espírito Santo como nosso guia e consolador. Enquanto rezamos as
              Ave-Marias, podemos invocar também a presença do Espírito Santo,
              pedindo discernimento e coragem para testemunhar a fé de maneira
              corajosa, assim como fizeram os apóstolos depois de Pentecostes.
            </S.SmallText>
            <S.SmallText>
              Depois da Ascensão, o momento era crucial: Cristo desaparecera e
              não estava mais visivelmente presente. Refere o historiador São
              Lucas que os Apóstolos, reunidos no Cenáculo com Maria e as santas
              mulheres, aguardavam pela realização das promessas de Jesus. Ao
              fim de dez dias de retiro, aconteceu o extraordinário prodígio,
              considerado como evidente milagre pelos Apóstolos e pelos próprios
              judeus. Um vento impetuoso invadiu o Cenáculo. Surgiram línguas de
              fogo pairando sobre cada um deles. O Espírito Santo apossou-se da
              Igreja de Cristo. Aqueles homens simples e medrosos começam a
              falar em línguas e deixam de ter medo. E proclamavam nas praças
              públicas a divindade de Jesus Cristo.
            </S.SmallText>
            <S.DefaultText style={{ padding: "30px 0px", fontWeight: "bold" }}>
              4º mistério glorioso: a assunção de Maria ao Céu
            </S.DefaultText>
            <S.Image
              src="assets/rosario/assuncao_maria.jpg"
              alt="Ascenção de Jesus"
            />
            <S.SmallText>
              <cite>
                <span>
                  «Por isto, desde agora, me proclamarão bem-aventurada todas as
                  gerações, porque realizou em mim maravilhas aquele que é
                  poderoso e cujo nome é Santo» (
                  <a
                    href="https://www.bibliaonline.com.br/acf/lc/1/48,49"
                    target="blank"
                  >
                    Lc 1, 48-49
                  </a>
                  ).
                </span>
              </cite>
            </S.SmallText>
            <S.SmallText>
              No quarto mistério glorioso, dirigimos nossa atenção à Assunção de
              Maria ao Céu. A Assunção refere-se à subida de Maria, em corpo e
              alma, ao céu.
              <sup>
                <a
                  href="https://www.bibliaon.com/versiculo/apocalipse_12_1/"
                  target="blank"
                >
                  9
                </a>
              </sup>
              Ao meditar sobre este mistério, recordamos a pureza de Nossa
              Senhora e seu papel único na história da redenção. A Assunção da
              Santíssima Virgem é uma singular participação na ressurreição do
              seu Filho e uma antecipação da ressurreição dos outros cristãos.
            </S.SmallText>
            <S.SmallText>
              Desse modo, ao contemplar este mistério, meditamos sobre a
              importância da dignidade e da honra concedidas a Maria. Este
              evento leva-nos a meditar a posição única que ocupa a Mãe de Deus
              entre todos os santos. Uma vez que a morte é consequência do
              pecado, não seria oportuno que Ela passasse por esta experiência,
              já que foi isenta do pecado desde a sua concepção. Sendo assim, a
              Assunção da Virgem Maria é consequência de outro dogma, o da
              Imaculada Conceição; a pureza de Nossa Senhora acompanhou-a desde
              a concepção até o fim de sua vida terrena, culminando na sua
              assunção.
            </S.SmallText>
            <S.SmallText>
              Por fim, a meditação deste mistério leva-nos a recordar dois
              dogmas marianos e, assim, reforçar a nossa fé no que a Igreja crê
              há muitos séculos.
            </S.SmallText>
            <S.SmallText>
              A última morada de Nossa Senhora terá sido provavelmente na cidade
              de Éfeso. Lá, ao término de sua vida terrestre (a tradição
              oriental emprega o termo “dormição”) Maria foi elevada, em corpo e
              alma, à glória do céu. O corpo de Maria não conheceu a corrupção.
              Isso foi o que Pio XII solenemente proclamou a 1º de novembro de
              1950, no dogma da Assunção de Maria, participação especial na
              Ressurreição de Cristo e numa antecipação de nossa própria
              ressurreição. Este privilégio concedido à Virgem Maria, é
              decorrente de sua maternidade divina. Assim como, para o homem
              pecador, a ressurreição só se realizará no último dia da
              existência do mundo, para a Virgem Maria, isenta de toda e
              qualquer falta pessoal e preservada do pecado original, a
              glorificação de seu corpo foi imediata.
            </S.SmallText>
            <S.DefaultText style={{ padding: "30px 0px", fontWeight: "bold" }}>
              5º mistério glorioso: a coroação de Maria como Rainha do Céu e da
              Terra
            </S.DefaultText>
            <S.Image
              src="assets/rosario/coroacao_nossa.jpg"
              alt="Coroação de Nossa Senhora"
            />
            <S.SmallText>
              <cite>
                <span>
                  «Apareceu em seguida um grande sinal no céu: uma Mulher
                  revestida do sol, a lua debaixo dos seus pés e na cabeça uma
                  coroa de doze estrelas» (
                  <a
                    href="https://www.bibliaon.com/versiculo/apocalipse_12_1/"
                    target="blank"
                  >
                    Ap 12, 1
                  </a>
                  ).
                </span>
              </cite>
            </S.SmallText>
            <S.SmallText>
              No quinto mistério glorioso, contemplamos a Coroação de Maria como
              Rainha do Céu e da Terra.
              <sup>
                <a
                  href="https://www.bibliaonline.com.br/acf/ap/12/1-6"
                  target="blank"
                >
                  10
                </a>
              </sup>
              De acordo com a tradição cristã, Maria é reverenciada como Rainha
              devido à sua singular maternidade divina; sua participação na
              redenção do gênero humano, trazendo-nos o Salvador; seu papel como
              Mãe de Cristo e, por fim, sua elevação acima de todos os anjos e
              santos.
            </S.SmallText>
            <S.SmallText>
              Ao contemplar este mistério, meditamos, à luz das Escrituras, que
              Maria recebe o título de Rainha, cumprindo a promessa feita a
              Davi. A tradição da “Rainha Mãe”, iniciada com Salomão e sua mãe
              Betsabé, é um eco dessa promessa.
              <sup>
                <a
                  href="https://www.bibliaonline.com.br/nvi/1rs/2/19"
                  target="blank"
                >
                  11
                </a>
              </sup>
              Maria, ao transmitir a Cristo seu sangue, torna-se com todo
              direito Rainha dos céus e da terra, sendo seu Filho Senhor de toda
              a criação. Além disso, cabe nesta meditação lembrar que essa
              majestade de Maria foi sempre acompanhada por uma profunda
              humildade. Apesar de ser Rainha, Maria se reconhece como serva do
              Senhor, ensinando-nos, com a sua vida, uma verdadeira lição de
              amor, serviço e submissão à vontade de Deus.
            </S.SmallText>
            <S.SmallText>
              Em 1954, por ocasião do centenário do dogma da Imaculada
              Conceição, o Papa Pio XII instituiu a festa litúrgica da “Santa
              Virgem Maria Rainha” no dia 22 de agosto. Não se trata de uma nova
              verdade para se acreditar. Realmente, a dignidade real de Maria já
              havia sido formulada desde muito tempo, em antigos documentos da
              Igreja e nos livros litúrgicos. A intenção do Papa era de oferecer
              aos cristãos uma ocasião de louvar Maria reavivando a lembrança
              desta antiga tradição a que corresponde numerosa e importante
              iconografia. Mais próximo a nós, o Concílio Vaticano II lembrou
              que a Virgem Imaculada, tendo sido elevada em corpo e alma à
              glória do céu, fora elevada pelo Senhor como Rainha do Universo. É
              preciso compreender a realeza de Maria dentro do espírito do
              Evangelho, isto é, muito mais como uma atribuição do que como um
              título. Maria é uma Rainha maternal, já que ela é nossa Mãe na
              ordem da graça, e uma Rainha suplicante que intercede pela
              humanidade.
            </S.SmallText>
            <S.DefaultText style={{ fontWeight: "bold", margin: "30px 0px" }}>
              Referências
            </S.DefaultText>
            <S.SmallText
              style={{
                paddingBottom: "30px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span>
                1. Papa João Paulo II, Carta Apostólica Rosarium Virginis Mariae
              </span>

              <span>2. Mt 28, 1-10</span>

              <span>3. CIC, 1020</span>
              <span>4. Lc 24, 50-53</span>

              <span>5. Atos 1, 9-11</span>
              <span>6. CIC, 665</span>

              <span>7. João 14, 2</span>
              <span>8. Atos 2, 1-13</span>
              <span>9. Ap 12, 1</span>

              <span>10. Ap 12,1-6</span>
              <span>11. 1Rs 2, 19</span>
            </S.SmallText>
          </div>
          <S.LinksContainer>
            <h3>O que você vai encontrar neste artigo?</h3>
            <a href="#oque-rosario">O que é o rosário?</a>
            <a href="#origem-oracao">Qual a origem desta oração?</a>
            <a href="#como-reza">Como rezá-lo?</a>
            <a href="#terco-rosario">Terço ou Rosário?</a>
            <a href="#rosario-fatima">O Rosário e Nossa Senhora de Fátima</a>
            <a href="#oque-terco">O que é a oração do terço?</a>
            <a href="#oque-misterios">
              O que são os mistérios do terço e por que devemos contemplá-los?
            </a>
            <a href="#gozozos">Mistérios Gozosos</a>
            <a href="#luminosos">Mistérios Luminosos</a>
            <a href="#dolorosos">Mistérios Dolorosos</a>
            <a href="#gloriosos">Mistérios Gloriosos</a>
          </S.LinksContainer>
        </div>
      </div>
    </div>
  );
};

export default Rosario;
