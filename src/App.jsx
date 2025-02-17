import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import PastSeasons from "./pages/PastSeasons";
import Season7 from "./pages/Season7"
import FAQS from "./pages/FAQS"




function App() {
  return (
    <div>
      <NavBar />
              <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} /> 
              <Route path="/pastseasons" element={<PastSeasons />} /> 
              <Route path="/season7" element ={<Season7 />} />
              <Route path="/faq" element ={<FAQS />} />



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