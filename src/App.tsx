// src/App.tsx
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import About from "./pages/About";

import Navbar from "./components/Navbar"; // assuming your Navbar is here
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/about" element={<About />} />
       
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
