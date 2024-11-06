import * as S from "../../styles";
import { AtividadeDiv, FrenteDiv, ImageDiv, WhatsappButton } from "./styles";

const Home = () => {
  return (
    <div>
      <div>
        <img style={{borderRadius: "20px", objectFit: "cover", display: "block", margin: "120px auto", width: "1000px" }} src="assets/nswallpaper.jpg" alt="Nossa Senhora do Perpétuo Socorro" />
      </div>
      <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: "-40px"}}>
        <S.DefaultText style={{letterSpacing: "5px", fontSize: "26px"}}>CONHEÇA</S.DefaultText>
        <S.BigText style={{ fontSize: "50px", marginTop: "25px"}}>NOSSAS ATIVIDADES</S.BigText>
        <div style={{display: "flex", marginBottom: "100px"}}>
          <AtividadeDiv>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M344 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 24-32 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l32 0 0 46.4L183.3 210c-14.5 8.7-23.3 24.3-23.3 41.2L160 512l96 0 0-96c0-35.3 28.7-64 64-64s64 28.7 64 64l0 96 96 0 0-260.8c0-16.9-8.8-32.5-23.3-41.2L344 142.4 344 96l32 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-32 0 0-24zM24.9 330.3C9.5 338.8 0 354.9 0 372.4L0 464c0 26.5 21.5 48 48 48l80 0 0-238.4L24.9 330.3zM592 512c26.5 0 48-21.5 48-48l0-91.6c0-17.5-9.5-33.6-24.9-42.1L512 273.6 512 512l80 0z"/></svg>
            <S.BigText style={{fontSize: "28px", cursor: "pointer", marginBottom: "30px", marginTop: "0px"}}>MISSAS</S.BigText>
            <S.SmallText>Todos os dias da semana.</S.SmallText>
            <S.SmallText style={{fontWeight: "bold", marginTop: "-20px"}}>Veja Horários</S.SmallText>
          </AtividadeDiv>
          <AtividadeDiv>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
            <S.BigText style={{fontSize: "28px", cursor: "pointer", marginBottom: "30px", marginTop: "0px"}}>CATEQUESE</S.BigText>
            <S.SmallText>Artigos e estudos.</S.SmallText>
            <S.SmallText style={{fontWeight: "bold", marginTop: "-20px"}}>Saiba mais</S.SmallText>
          </AtividadeDiv>
          <AtividadeDiv>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M351.2 4.8c3.2-2 6.6-3.3 10-4.1c4.7-1 9.6-.9 14.1 .1c7.7 1.8 14.8 6.5 19.4 13.6L514.6 194.2c8.8 13.1 13.4 28.6 13.4 44.4l0 73.5c0 6.9 4.4 13 10.9 15.2l79.2 26.4C631.2 358 640 370.2 640 384l0 96c0 9.9-4.6 19.3-12.5 25.4s-18.1 8.1-27.7 5.5L431 465.9c-56-14.9-95-65.7-95-123.7L336 224c0-17.7 14.3-32 32-32s32 14.3 32 32l0 80c0 8.8 7.2 16 16 16s16-7.2 16-16l0-84.9c0-7-1.8-13.8-5.3-19.8L340.3 48.1c-1.7-3-2.9-6.1-3.6-9.3c-1-4.7-1-9.6 .1-14.1c1.9-8 6.8-15.2 14.3-19.9zm-62.4 0c7.5 4.6 12.4 11.9 14.3 19.9c1.1 4.6 1.2 9.4 .1 14.1c-.7 3.2-1.9 6.3-3.6 9.3L213.3 199.3c-3.5 6-5.3 12.9-5.3 19.8l0 84.9c0 8.8 7.2 16 16 16s16-7.2 16-16l0-80c0-17.7 14.3-32 32-32s32 14.3 32 32l0 118.2c0 58-39 108.7-95 123.7l-168.7 45c-9.6 2.6-19.9 .5-27.7-5.5S0 490 0 480l0-96c0-13.8 8.8-26 21.9-30.4l79.2-26.4c6.5-2.2 10.9-8.3 10.9-15.2l0-73.5c0-15.8 4.7-31.2 13.4-44.4L245.2 14.5c4.6-7.1 11.7-11.8 19.4-13.6c4.6-1.1 9.4-1.2 14.1-.1c3.5 .8 6.9 2.1 10 4.1z"/></svg>
            <S.BigText style={{fontSize: "28px", cursor: "pointer", marginBottom: "30px", marginTop: "0px"}}>DÍZIMO</S.BigText>
            <S.SmallText>Confira como funciona.</S.SmallText>
            <S.SmallText style={{fontWeight: "bold", marginTop: "-20px"}}>Clique acima</S.SmallText>
          </AtividadeDiv>
        </div>
        <ImageDiv>
          <FrenteDiv>
              <div style={{width: "80%", margin: "0 auto"}}>
                <S.BigText style={{fontSize: "50px", marginBottom: "25px"}}>PARTICIPE DE<br/> NOSSAS MISSAS</S.BigText>
                <S.DefaultText>De segunda-feira a sexta-feira: <b>08h e 17h.</b></S.DefaultText>
                <S.DefaultText>Sábados: <b>08h, 12h e 14h30.</b></S.DefaultText>
                <S.DefaultText style={{borderBottom: "2px solid #D4D4D4",paddingBottom: "80px",}}>Sábados: <b>08h, 12h e 14h30.</b></S.DefaultText>
                <div style={{display: "flex", marginBottom: "-40px"}}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                  <S.BigText style={{fontSize: "28px", marginLeft: "10px"}}>ENDEREÇO</S.BigText>
                </div>
                <div style={{ marginLeft: "40px"}}>
                  <S.SmallText>R. Maria Adelaide L. Quelhas, 550</S.SmallText>
                  <S.SmallText style={{marginTop: "-20px"}}>Centro, São Bernardo do Campo</S.SmallText>
                </div>
                <S.SmallText style={{borderBottom: "2px solid #D4D4D4",paddingBottom: "30px",}}></S.SmallText>
                <div style={{display: "flex", marginBottom: "-40px"}}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                  <S.BigText style={{fontSize: "28px", marginLeft: "10px"}}>SECRETARIA</S.BigText>
                </div>
                <div style={{ marginLeft: "40px"}}>
                  <S.SmallText>De segunda-feira a sexta-feira</S.SmallText>
                  <S.SmallText style={{fontWeight: "bold", marginTop: "-20px"}}>das 08h30 às 18h00.</S.SmallText>
                  <S.SmallText style={{marginTop: "-20px"}}>Sábado: <b>das 08h às 17h.</b></S.SmallText>
                </div>
                <S.SmallText style={{borderBottom: "2px solid #D4D4D4",paddingBottom: "30px",}}></S.SmallText>
                <WhatsappButton>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
                  WHATSAPP
                </WhatsappButton>
              </div>
          </FrenteDiv>
        </ImageDiv>
      </div>
    </div>
  )
};

export default Home;
