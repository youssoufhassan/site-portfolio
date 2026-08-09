import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/Home";
import ProjectsList from "./pages/ProjectsList";
import ProjectDetail from "./pages/ProjectDetail";
import NotesList from "./pages/NotesList";
import NoteDetail from "./pages/NoteDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./styles/index.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects/detail/:id" element={<ProjectDetail />} />
          <Route path="/projects" element={<ProjectsList />} />
          <Route path="/notes" element={<NotesList />} />
          <Route path="/notes/:id" element={<NoteDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
