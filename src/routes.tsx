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

const RoutesVar = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/rosario" element={<Rosario />} />
    <Route path="/trindade" element={<Trindade />} />
    <Route path="/batismo" element={<Batismo />} />
    <Route path="/dogmascatolicos" element={<DogmasCatolicos />} />
    <Route path="/eucaristia" element={<Eucaristia />} />
    <Route path="/obrasmisericordia" element={<ObrasMisericordia />} />
    <Route path="/liturgia" element={<Liturgia />} />
    <Route path="/paroco" element={<Paroco />} />
  </Routes>
);

export default RoutesVar;
