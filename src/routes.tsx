import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rosario from "./pages/Rosario";
import Trindade from "./pages/Trindade";
import Batismo from "./pages/Batismo";
import DogmasCatolicos from "./pages/DogmasCatolicos";
import Eucaristia from "./pages/Eucaristia";

const RoutesVar = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/rosario" element={<Rosario />} />
    <Route path="/trindade" element={<Trindade />} />
    <Route path="/batismo" element={<Batismo />} />
    <Route path="/dogmascatolicos" element={<DogmasCatolicos />} />
    <Route path="/eucaristia" element={<Eucaristia />} />
  </Routes>
);

export default RoutesVar;
