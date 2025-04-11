import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ParticlesBackground from "./components/ParticlesBackground";

function App() {
  return (
    <div className="app-container">
      <ParticlesBackground />
      <Navbar />
      <main className="content">
        <h1>Welcome to My Portfolio</h1>
      </main>
      <Footer />
    </div>
  );
}

export default App;
