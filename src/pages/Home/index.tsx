import * as S from "../../styles";

const Home = () => {
  return (
    <div>
      <div>
      <img style={{borderRadius: "20px", objectFit: "cover", display: "block", margin: "120px auto" }} width={"1400px"} src="assets/nswallpaper.jpg" alt="Nossa Senhora do Perpétuo Socorro" />
      </div>
      <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: "-40px"}}>
        <S.DefaultText style={{letterSpacing: "5px", fontSize: "26px"}}>CONHEÇA</S.DefaultText>
        <S.BigText style={{ fontSize: "50px", marginTop: "25px"}}>NOSSAS ATIVIDADES</S.BigText>
        <div style={{display: "flex"}}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
};

export default Home;
