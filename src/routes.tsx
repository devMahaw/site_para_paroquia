import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rosario from "./pages/Rosario";
import Trindade from "./pages/Trindade";
import Batismo from "./pages/Batismo";

const RoutesVar = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/rosario" element={<Rosario />} />
    <Route path="/trindade" element={<Trindade />} />
    <Route path="/batismo" element={<Batismo />} />
  </Routes>
);

export default RoutesVar;
