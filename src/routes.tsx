import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const RoutesVar = () => (
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
);

export default RoutesVar;
