import * as S from "../../styles";
import { AtividadeDiv } from "./styles";

const Home = () => {
  return (
    <div>
      <div>
        <img style={{borderRadius: "20px", objectFit: "cover", display: "block", margin: "120px auto" }} width={"1000px"} src="assets/nswallpaper.jpg" alt="Nossa Senhora do Perpétuo Socorro" />
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
        <div style={{backgroundImage: "url('assets/frente_igreja.png')", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover", width: "1100", height: "1020px"}}>
          <div>

          </div>
        </div>
      </div>
    </div>
  )
};

export default Home;
