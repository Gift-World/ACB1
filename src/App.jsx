import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import About from "./pages/About";


function App() {
  return (
    <div>
      <NavBar />
              <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} /> 
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