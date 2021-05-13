import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app h-full w-screen font-bodoni">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
