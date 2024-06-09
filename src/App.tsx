import { BrowserRouter } from "react-router-dom";
import { GlobalCss } from "./styles";
import RoutesVar from "./routes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Navbar />
      </header>
      <main>
        <RoutesVar />
      </main>
    </BrowserRouter>
  );
}

export default App;
