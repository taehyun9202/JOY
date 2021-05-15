import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Shop from "./components/Shop";

function App() {
  return (
    <div className="app h-full w-screen font-bodoni min-h-screen relative pt-10 pb-48 text-text">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
