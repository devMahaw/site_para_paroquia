import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rosario from "./pages/Rosario";
import Trindade from "./pages/Trindade";
import Batismo from "./pages/Batismo";
import DogmasCatolicos from "./pages/DogmasCatolicos";
import Eucaristia from "./pages/Eucaristia";
import ObrasMisericordia from "./pages/ObrasMisericordia";
import Liturgia from "./pages/Liturgia";
import Paroco from "./pages/Paroco";
import Crisma from "./pages/Crisma";
import Oracoes from "./pages/Oracoes";
import Catequese from "./pages/Catequese";
import SeteSacramentos from "./pages/SeteSacramentos";
import Confissao from "./pages/Confissao";

const RoutesVar = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/rosario" element={<Rosario />} />
    <Route path="/catequese" element={<Catequese />} />
    <Route path="/sacramentos" element={<SeteSacramentos />} />
    <Route path="/trindade" element={<Trindade />} />
    <Route path="/batismo" element={<Batismo />} />
    <Route path="/dogmascatolicos" element={<DogmasCatolicos />} />
    <Route path="/eucaristia" element={<Eucaristia />} />
    <Route path="/obrasmisericordia" element={<ObrasMisericordia />} />
    <Route path="/liturgia" element={<Liturgia />} />
    <Route path="/paroco" element={<Paroco />} />
    <Route path="/crisma" element={<Crisma />} />
    <Route path="/oracoes" element={<Oracoes />} />
    <Route path="/confissao" element={<Confissao />} />
  </Routes>
);

export default RoutesVar;
