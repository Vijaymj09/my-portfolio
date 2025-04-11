import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ParticlesBackground from "./components/ParticlesBackground";
import "./App.css";
import About from "./pages/About";

import Profile from "./pages/Profile";


function App() {
  return (
    <div className="app-container">
      <ParticlesBackground />
      <Navbar />
      <main className="content">
      <Profile />
      <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
