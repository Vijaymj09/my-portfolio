import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ParticlesBackground from "./components/ParticlesBackground";
import "./App.css";
import Profile from "./sections/Profile";

function App() {
  return (
    <div className="app-container">
      <ParticlesBackground />
      <Navbar />
      <main className="content">
      <Profile />
      </main>
      <Footer />
    </div>
  );
}

export default App;
