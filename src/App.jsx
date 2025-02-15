import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import PastSeasons from "./pages/PastSeasons";


function App() {
  return (
    <div>
      <NavBar />
              <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} /> 
              <Route path="/pastseasons" element={<PastSeasons />} /> 

              </Routes>
    </div>
  )
}

const RootApp = () => (
  <Router>
    <App />
  </Router>
);

export default RootApp;