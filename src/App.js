import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from "./components/About";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}
