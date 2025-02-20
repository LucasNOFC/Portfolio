import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import SideMenu from "./components/sidemenu/SideMenu";
import Landpage from "./pages/landpage/Landpage";
import About from "./pages/about/About";
import Skills from "./pages/skills/Skills";
import Projects from "./pages/projects/Projects";

function App() {
  return (
    <div>
      <div className="app-container">
        <SideMenu />
        <Routes>
          <Route path="/" element={<Landpage />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
