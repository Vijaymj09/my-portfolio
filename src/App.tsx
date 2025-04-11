import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="content">
        {/* Replace with routed or static content */}
        <h1 style={{ color: "white" }}>Welcome to My Portfolio</h1>
      </main>
      <Footer />
    </div>
  );
}

export default App;
