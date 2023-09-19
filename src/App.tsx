import "./App.css";
import About from "./components/About";
import Curriculo from "./components/Curriculo";
import Header from "./components/Header";
import Hability from "./components/Hability";
import Project from "./components/Project";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="main-content-main">
      <Header />
      <Curriculo />
      <About />
      <Hability />
      <Project />
      <Footer />
    </main>
  );
}

export default App;
