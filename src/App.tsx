import { BrowserRouter } from "react-router-dom";
import { GlobalCss } from "./styles";
import RoutesVar from "./routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <header>
        <Navbar />
      </header>
      <main>
        <section>
          <RoutesVar />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
}

export default App;
