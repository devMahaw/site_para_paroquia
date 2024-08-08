import * as S from "../../styles";

const ObrasMisericordia = () => {
  return (
    <div style={{ margin: "50px 100px" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <S.StartImage
          style={{ height: "600px" }}
          src="assets/obras_misericordia/filantropia.jpg"
          alt="Filantropia"
        />
      </div>
      <audio controls style={{ transform: "scale(1.5)", marginLeft: "50px" }}>
        <source
          src="assets/obras_misericordia/obrasMisericordia.mp3"
          type="audio/mp3"
        />
        Seu navegador não suporta o elemento de áudio.
      </audio>
      <div style={{ display: "flex" }}>
        <div style={{ width: "80%" }}>
          <S.BigText>As obras de misericórdia e a vida espiritual</S.BigText>
          <S.DefaultText
            style={{
              borderBottom: "1px solid #D4D4D4",
              paddingBottom: "30px",
            }}
          >
            <span>
              Neste artigo, explicamos o que são, quais são e como colocar em
              prática todas as obras de misericórdia que a Igreja nos orienta a
              viver.
            </span>
          </S.DefaultText>
          <S.SmallText>
            Você conhece a importância das obras de misericórdia na sua vida
            espiritual? Lembremos do que que São Tiago diz: “
            <em>
              Com efeito, como o corpo sem o sopro da vida é morto, assim também
              é morta a fé sem as obras
            </em>
            ”
            <sup>
              <a
                href="https://www.bibliaonline.com.br/acf/tg/2/26"
                target="blank"
              >
                1
              </a>
            </sup>
            . Em nossa busca pela santidade não basta que tenhamos fé, é preciso
            expressá-la através das obras que imitem o próprio Cristo.
          </S.SmallText>
          <S.SmallText>
            Por ser tão importante em nossa vida cristã, neste artigo
            exploraremos mais a fundo o que são, quais são e como colocar em
            prática todas as obras de misericórdia que a Igreja nos orienta a
            viver com base nos Evangelhos de Nosso Senhor Jesus Cristo.
          </S.SmallText>
          <S.BigText id="oque-obras">
            O que são as obras de misericórdia?
          </S.BigText>
          <S.SmallText>
            As obras de misericórdia são ações concretas que fazemos para ajudar
            os nossos irmãos em suas necessidades temporais e espirituais.
          </S.SmallText>
          <S.SmallText>
            O Catecismo da Igreja Católica nos explica que
            <cite>
              <span>
                — “As obras de misericórdia são as ações caritativas pelas quais
                socorremos o próximo em suas necessidades corporais e
                espirituais. Instruir, aconselhar, consolar, confortar, são
                obras de misericórdia espirituais, como perdoar e suportar com
                paciência. As obras de misericórdia corporais consistem
                sobretudo em dar de comer a quem tem fome, dar de beber a quem
                tem sede, dar moradia aos desabrigados, vestir os maltrapilhos,
                visitar os doentes e os prisioneiros, sepultar os mortos. Dentre
                estes gestos de misericórdia, a esmola dada aos pobres é um dos
                principais testemunhos da caridade fraterna. É também uma
                prática de justiça que agrada a Deus.”
                <sup>
                  <a
                    href="https://www.vatican.va/archive/cathechism_po/index_new/p3s2cap2_2196-2557_po.html"
                    target="blank"
                  >
                    2
                  </a>
                </sup>
              </span>
            </cite>
          </S.SmallText>
          <S.SmallText>
            Mais do que atos de caridade, as obras de misericórdia são ações
            justas para aqueles que pouco ou nada tem. Jesus nas Escrituras nos
            ensina que “Quem tiver duas túnicas, reparta-as com aquele que não
            tem, e quem tiver o que comer faça o mesmo”
            <sup>
              <a
                href="https://www.bibliaonline.com.br/acf/lc/3/11"
                target="blank"
              >
                3
              </a>
            </sup>
            . Portanto, as obras de misericórdia são uma forma de imitarmos a
            Jesus e viver o Evangelho que Ele nos deixou.
          </S.SmallText>
          <S.DefaultText style={{ fontWeight: "bold", marginTop: "20px" }}>
            Quantas são as obras de misericórdia?
          </S.DefaultText>
          <S.SmallText>As obras de misericórdia são 14:</S.SmallText>
          <ul>
            <S.DotList>
              <S.SmallText>Dar de comer a que tem fome</S.SmallText>
            </S.DotList>
            <S.DotList>
              <S.SmallText>Dar de beber a quem tem sede</S.SmallText>
            </S.DotList>
            <S.DotList>
              <S.SmallText>Dar pousada aos peregrinos</S.SmallText>
            </S.DotList>
            <S.DotList>
              <S.SmallText>Vestir os nus</S.SmallText>
            </S.DotList>
            <S.DotList>
              <S.SmallText>Visitar os enfermos</S.SmallText>
            </S.DotList>
            <S.DotList>
              <S.SmallText>Visitar os presos</S.SmallText>
            </S.DotList>
            <S.DotList>
              <S.SmallText>Enterrar os mortos</S.SmallText>
            </S.DotList>
            <S.DotList>
              <S.SmallText>Ensinar os ignorantes</S.SmallText>
            </S.DotList>
            <S.DotList>
              <S.SmallText>Dar bom conselho</S.SmallText>
            </S.DotList>
            <S.DotList>
              <S.SmallText>Corrigir os que erram</S.SmallText>
            </S.DotList>
            <S.DotList>
              <S.SmallText>Perdoar as injúrias</S.SmallText>
            </S.DotList>
            <S.DotList>
              <S.SmallText>Consolar os tristes</S.SmallText>
            </S.DotList>
            <S.DotList>
              <S.SmallText>
                Sofrer com paciência as fraquezas do nosso próximo
              </S.SmallText>
            </S.DotList>
            <S.DotList>
              <S.SmallText>Rezar a Deus por vivos e defuntos</S.SmallText>
            </S.DotList>
          </ul>
          <S.SmallText>
            Essas obras de misericórdia listadas acima são dividas entre
            <strong>obras corporais</strong> e<strong>obras espirituais</strong>
            , sendo 7 de cada. A seguir, vamos explicar cada uma delas.
          </S.SmallText>
          <S.BigText id="quais-corporais">
            Quais são as obras de misericórdia corporais?
          </S.BigText>
          <S.SmallText>
            <strong>1) Dar de comer a que tem fome:</strong> é preciso que
            estejamos atentos às necessidades daqueles que estão à nossa volta.
            Diariamente, temos a oportunidade de encontrar pessoas nas ruas
            pedindo alimento ou algumas moedas para comprar comida. Também em
            nossas paróquias existem pastorais de rua, que providenciam alimento
            e cestas básicas para famílias necessitadas. Podemos fazer essa obra
            de misericórdia estando atentos aos que nos pedem e nos engajando
            nas pastorais e grupos católicos que se organizam para alimentar os
            que têm fome.
          </S.SmallText>
          <S.SmallText>
            <strong>2) Dar de beber a quem tem sede:</strong> essa obra de
            misericórdia consiste na mesma proposta da anterior, podemos e
            devemos ajudar pessoas a matarem sua sede oferecendo-lhes nossa
            própria água.
          </S.SmallText>
          <S.SmallText>
            <strong>3) Dar pousada aos peregrinos:</strong> consiste em
            oferecermos um espaço da nossa própria casa para aqueles que estão
            viajando, especialmente os peregrinos, ou seja, aqueles que viajam
            em clima e espírito de oração.
          </S.SmallText>
          <S.SmallText>
            <strong>4) Vestir os nus:</strong> muitas vezes o nosso roupeiro
            está cheio e ainda temos a coragem de dizer que não temos o que
            vestir. É preciso que nos desapeguemos constantemente dos nossos
            bens materiais e doar as roupas que não usamos mais e mesmo as que
            ainda usamos. Essa é uma forma prática e muito efetiva de nos
            desapegar e ajudar aqueles que não tem o que vestir.
          </S.SmallText>
          <S.SmallText>
            <strong>5) Visitar os enfermos:</strong> visitar os doentes é uma
            forma de mostrar que nos preocupamos com eles, de consolá-los da dor
            terrena que enfrentam e de fazer com que se sintam amados.
          </S.SmallText>
          <S.SmallText>
            <strong>6) Visitar os presos:</strong> os presos também sentem-se
            abandonados, mesmo aqueles que cometeram os piores crimes. A alma
            humana sempre pode transformar-se, assim como São Paulo foi
            transformado por Cristo. Ao visitar os presos, podemos ser para eles
            instrumentos de consolo e de conversão.
          </S.SmallText>
          <S.SmallText>
            <strong>7) Enterrar os mortos:</strong> essa obra de misericórdia
            consiste especialmente em dar apoio aos familiares que acabaram de
            perder um ente querido, consiste em estar presente em um momento de
            dor e de sofrimento daqueles que perderam alguém.
          </S.SmallText>
          <S.BigText id="quais-espirituais">
            Quais são as obras de misericórdia espirituais?
          </S.BigText>
          <S.SmallText>
            <strong>1) Ensinar os ignorantes:</strong> muitas pessoas padecem
            pela falta de conhecimento, e é dever nosso buscar a verdade e
            ensiná-la àqueles que estão distantes dela. Jesus e a Sua Palavra é
            a Verdade da qual devemos nos encher e despejar nos corações que
            podemos alcançar.
          </S.SmallText>
          <S.SmallText>
            <strong>2) Dar bom conselho:</strong> para que possamos aconselhar
            bem alguém, é preciso que antes sejamos pessoas sábias e instruídas.
            Dar bom conselho não se trata de intrometer-se na vida de todos e
            muito menos de ser fofoqueiro, trata-se de mostrar ao outro um
            caminho que ele não está vendo, caso ele dê abertura para isso.
          </S.SmallText>
          <S.SmallText>
            <strong>3) Corrigir os que erram:</strong> os erros nos levam aos
            sofrimentos corporais, mas principalmente ao pior dos sofrimentos: a
            condenação eterna, que é principalmente espiritual. Quando notamos
            um erro grave da parte do nosso irmão, é preciso que saibamos
            corrigi-lo de de forma fraterna, em particular e com caridade.
          </S.SmallText>
          <S.SmallText>
            <strong>4) Perdoar as injúrias:</strong> a falta de perdão não faz
            mal apenas para quem não foi perdoado, mas também para quem não
            perdoou. O perdão não é um sentimento que brota no nosso coração,
            mas uma decisão que nasce da nossa razão e atinge o coração. Perdoar
            traz esperança e resgata o amor.
          </S.SmallText>
          <S.SmallText>
            <strong>5) Consolar os tristes:</strong> quando alguém está triste,
            é preciso que nos esforcemos para diminuir a sua tristeza, não
            necessariamente com palavras, mas especialmente com a nossa
            presença, o nosso ombro e a nossa atenção.
          </S.SmallText>
          <S.SmallText>
            <strong>
              6) Sofrer com paciência as fraquezas do nosso próximo:
            </strong>
            todos têm defeitos (e muitos!). Por isso, cabe a nós aprender a
            lidar com os defeitos e fraquezas daqueles com quem convivemos,
            entendendo que nem sempre a pessoa faz algum ato por maldade, mas
            porque tem dificuldade de progredir na virtude. Cabe a nós
            compreender e ajudar a pessoa a melhorar.
          </S.SmallText>
          <S.SmallText>
            <strong>7) Rezar a Deus por vivos e defuntos:</strong> uma das
            maiores obras de misericórdia espirituais é a oração pela Igreja
            Militante e Padecente, ou seja, por aqueles que caminham neste mundo
            para alcançar a santidade e por aqueles que já morreram e aguardam
            no purgatório o dia de se tornarem Igreja Triunfante no céu.
          </S.SmallText>
          <S.BigText id="papel-obras">
            O papel das obras de misericórdia na nossa vida espiritual
          </S.BigText>
          <S.SmallText>
            Conhecendo um pouco mais sobre cada uma das obras de misericórdia já
            pudemos perceber a sua importância em nosso progresso espiritual e
            em nossa luta pela santidade. A seguir, vamos conhecer os frutos e
            os efeitos dessas obras em nossa vida.
          </S.SmallText>
          <S.SmallText>
            O exercício das obras de misericórdia nos alcança muitas graças de
            Deus, pois Ele mesmo nos disse no Evangelho de São Lucas: ‘Dai, e
            ser-vos-á dado’, quanto mais nos entregamos aos outros, mais
            recebemos de Deus. As obras também são formas de apagar os pecados
            que cometemos e que já foram perdoados, “
            <em>
              Bem-aventurados os misericordiosos, porque eles alcançarão
              misericórdia
            </em>
            ”
            <sup>
              <a
                href="https://www.bibliaonline.com.br/acf/mt/5/7"
                target="blank"
              >
                4
              </a>
            </sup>
            .
          </S.SmallText>
          <S.SmallText>
            As obras de misericórdia geram ainda muitos outros frutos em nossa
            jornada espiritual, mas vamos mencionar apenas mais um, sem dúvida o
            mais importante. Elas nos ajudam a sermos mais imitadores de Cristo,
            a colocarmos em prática tudo que nos foi instruído nos Evangelhos e
            nos serve como um guia simplificado de ações que nos fazem ser
            verdadeiros imitadores de Cristo.
          </S.SmallText>
          <S.DefaultText style={{ fontWeight: "bold", marginTop: "20px" }}>
            A substituição da abstinência de carne de sexta-feira por obras de
            misericórdia
          </S.DefaultText>
          <S.SmallText>
            Todo católico precisa cumprir os mandamentos da Igreja, que ao todo
            são 5. Um deles nos instrui a fazer jejum e abstinência nos dias em
            que a Igreja manda, e a Igreja nos obriga a fazer abstinência de
            carne todas as sextas-feiras do que não coincidam com uma
            solenidade, para que façamos memória do sacrifício de Cristo. No
            entanto, no Brasil, a CNBB permite que façamos a troca da
            abstinência de carne por obras de misericórdia. Então, se por algum
            motivo, em uma sexta-feira você se esquecer (ou for realmente
            necessário comer carne), lembre-se que você pode realizar uma das
            catorze obras de misericórdia explicadas neste artigo.
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
            <span>1. Tg 2,26</span>
            <span>2. CIC § 2447</span>
            <span>3. Lc 3,11</span>
            <span>4. Mt 5, 7</span>
          </S.SmallText>
        </div>
        <S.LinksContainer>
          <h3>O que você vai encontrar neste artigo?</h3>
          <a href="#oque-obras">O que são as obras de misericórdia?</a>
          <a href="#quais-corporais">
            Quais são as obras de misericórdia corporais?
          </a>
          <a href="#quais-espirituais">
            Quais são as obras de misericórdia espirituais?
          </a>
          <a href="#papel-obras">
            O papel das obras de misericórdia na nossa vida espiritual
          </a>
        </S.LinksContainer>
      </div>
    </div>
  );
};

export default ObrasMisericordia;
