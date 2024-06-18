import * as S from "./styles";

const Rosario = () => {
  return (
    <div style={{ marginTop: "50px" }}>
      <S.ImageContainer>
        <img
          style={{
            borderRadius: "20px",
            objectFit: "cover",
            height: "600px",
          }}
          src="assets/ns_banner.png"
          alt="Nossa Senhora com Rosário"
        />
      </S.ImageContainer>
      <S.RosarioContainer>
        <S.BigText>Um guia para rezar o rosário</S.BigText>
        <S.DefaultText
          style={{
            borderBottom: "1px solid #D4D4D4",
            paddingBottom: "30px",
          }}
        >
          <span>
            A oração diária do rosário é o maior pedido que Nossa Senhora nos
            fez. Nesta aba, veja um guia completo para aprender a rezá-lo.
          </span>
        </S.DefaultText>
        <S.SmallText style={{ paddingTop: "30px" }}>
          Quando a Virgem Maria apareceu em Fátima sob o título de Nossa Senhora
          do Rosário, Ela pediu a Lúcia, Jacinta e Francisco que rezassem o
          terço todos os dias.
        </S.SmallText>
        <S.SmallText>
          E nós também somos chamados a praticar esta devoção diariamente — se
          possível, o Rosário completo — pela salvação das almas dos pecadores.
        </S.SmallText>
        <S.SmallText>
          Por isso, preparamos este post para ajudar você a realizar este que é
          o maior pedido de Maria Santíssima a cada um de Seus filhos.
        </S.SmallText>
        <S.BigText>O que é o rosário?</S.BigText>
        <S.SmallText>
          O Papa S. João Paulo II, em 16 de Outubro de 2002, escreveu uma bela
          carta apostólica intitulada <i>Rosarium Virginis Mariae</i>,
          explicando o sentido e o profundo significado da oração do Rosário
          para os católicos. Nesta carta, começa por explicar que “o Rosário à
          Virgem Maria é, na sua simplicidade e profundidade, uma oração de
          grande significado destinada a produzir frutos de santidade”. Em
          outras palavras, o Santo Rosário nada mais é do que contemplar os
          acontecimentos mais importantes da vida de Cristo para que “imitando o
          que eles contêm e alcançando o que prometem” possamos alcançar a
          santidade através dos olhos de Maria.
        </S.SmallText>
        <S.BigText>Qual a origem desta oração?</S.BigText>
        <S.SmallText>
          A origem do Rosário, em poucas palavras, remonta à Idade Média. Após a
          expansão do cristianismo no Oriente e no Ocidente, ou seja, após a
          conversão de famílias, aldeias e cidades inteiras, os homens medievais
          procuraram fugir das grandes metrópoles, devastadas e profundamente
          paganizadas, para lugares mais distantes onde pudessem se recolher,
          viver em comunidade cristã e em constante oração; talvez o caso mais
          conhecido de todos seja o de São Bento.
        </S.SmallText>
        <S.SmallText>
          Desde então, começaram a surgir os chamados monges e a fundar
          mosteiros. Rezavam e trabalhavam muito intensamente, em contraste com
          os nossos tempos. Por exemplo, rezavam os 150 salmos por dia, em coro
          na igreja, como uma oração diária. Enquanto outros lavravam o solo sob
          o sol duro, outros rezavam ao sol que nasce do alto.
        </S.SmallText>
        <S.SmallText>
          No entanto, houve uma dificuldade: nem todos tinham a oportunidade de
          rezar constantemente os 150 salmos juntamente com o coro de monges,
          pelo simples fato de terem de se alimentar e cultivar a terra.{" "}
        </S.SmallText>
        <S.SmallText>
          Assim, tiveram a brilhante ideia de fazer outras práticas piedosas
          enquanto cuidavam do cultivo ou mantinham a ordem monástica; começaram
          a rezar orações jaculatórias e a recitar frases do Evangelho, em lugar
          dos 150 salmos, e a contar com os dedos.
        </S.SmallText>
        <S.SmallText>
          Uma das récitas mais conhecidas foi a saudação do Anjo Gabriel à
          Virgem Maria: “Ave, cheia de graça, o Senhor é contigo: bendita és tu
          entre as mulheres” (Lucas 1,28). Estas práticas piedosas,
          especialmente a Saudação à Virgem Maria, foram transmitidas aos fiéis
          da época que não tinham acesso aos 150 Salmos por escrito, mas em vez
          disso rezavam 150 Ave-Marias. E assim, ao longo do tempo, as outras
          partes foram acrescentadas até chegarmos ao que hoje conhecemos como o
          Santo Rosário.
        </S.SmallText>
        <S.SmallText>
          De fato, o Rosário foi mencionado pela primeira vez num documento
          papal no século XVI. Em sua bula Consueverunt, São Pio V observou que
          “o Rosário ou o Saltério da Santíssima Virgem” é uma “forma de oração”
          através da qual “veneramos Maria com a saudação angélica repetida
          cento e cinquenta vezes, seguindo o número de salmos do Rei Davi, e
          antes de cada contagem de dez Ave-Marias, rezamos a Nosso Senhor, com
          meditações que ilustram toda a vida do próprio Senhor Jesus Cristo”.
        </S.SmallText>
        <S.SmallText>
          Portanto, quando falamos da origem do Santo Rosário, de uma forma
          prática e simples podemos voltar a fatos puramente históricos. Mas o
          que sabemos, sem qualquer dúvida, é que a origem do Rosário vai além
          desses fatos históricos. É um verdadeiro querer divino na Terra para
          que seus filhos estejam com o coração voltado a Ele e à Sua Mãe. Pela
          saudação divina do Anjo Gabriel à Santíssima Mãe de Deus, contemplamos
          os mistérios da vida humana e divina de Cristo, e deixamos que eles
          frutifiquem também em nossas vidas.
        </S.SmallText>
        <S.BigText>Como rezá-la?</S.BigText>
      </S.RosarioContainer>
    </div>
  );
};

export default Rosario;
