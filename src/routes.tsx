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
import Ordem from "./pages/Ordem";
import Contato from "./pages/Contato";
import Avisos from "./pages/Avisos";
import Dizimo from "./pages/Dizimo";
import EvangelhoDiario from "./pages/EvangelhoDiario";
import Historia from "./pages/Historia";
import HorarioConfissao from "./pages/HorarioConfissao";
import HorariosMissas from "./pages/HorariosMissas";
import NoticiasParoquia from "./pages/NoticiasParoquia";
import Nsps from "./pages/Nsps";
import Pastorais from "./pages/Pastorais";
import RedeSociais from "./pages/RedeSociais";
import SantoDia from "./pages/SantoDia";
import Secretaria from "./pages/Secretaria";
import TercoHomens from "./pages/TercoHomens";

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
    <Route path="/ordem" element={<Ordem />} />
    <Route path="/contato" element={<Contato />} />
    <Route path="/avisos" element={<Avisos />} />
    <Route path="/dizimo" element={<Dizimo />} />
    <Route path="/evangelhodiario" element={<EvangelhoDiario />} />
    <Route path="/historia" element={<Historia />} />
    <Route path="/horarioconfissao" element={<HorarioConfissao />} />
    <Route path="/horariosmissas" element={<HorariosMissas />} />
    <Route path="/noticiasparoquia" element={<NoticiasParoquia />} />
    <Route path="/nsps" element={<Nsps />} />
    <Route path="/pastorais" element={<Pastorais />} />
    <Route path="/redesociais" element={<RedeSociais />} />
    <Route path="/santodia" element={<SantoDia />} />
    <Route path="/secretaria" element={<Secretaria />} />
    <Route path="/tercohomens" element={<TercoHomens />} />
  </Routes>
);

export default RoutesVar;
