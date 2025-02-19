import { Routes, Route } from "react-router-dom";
import "./App.css";
import SideMenu from "./components/sidemenu/SideMenu";
import Landpage from "./pages/landpage/Landpage";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About";
import Skills from "./pages/skills/Skills";

function App() {
  return (
    <div>
      <div className="app-container">
        <SideMenu />
        <Routes>
          <Route path="/" element={<Landpage />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
