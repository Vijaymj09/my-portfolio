// src/App.tsx
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import About from "./pages/About";

import Navbar from "./components/Navbar"; // assuming your Navbar is here
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Interests from "./pages/Interests";
import Experience from "./pages/Experience";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/interests" element={<Interests />} />
        <Route path="/Experience" element={<Experience />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
