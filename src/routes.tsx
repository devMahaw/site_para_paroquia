import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rosario from "./pages/Rosario";

const RoutesVar = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/rosario" element={<Rosario />} />
  </Routes>
);

export default RoutesVar;
