import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import PastSeasons from "./pages/PastSeasons";
import Season7 from "./pages/Season7"
import FAQS from "./pages/FAQS"
import Magazine from "./pages/Magazine"
import VideoGallery from "./components/VideoGallery";




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
              <Route path="/magazine" element ={<Magazine />} />
              <Route path="/acbhub" element ={<VideoGallery />} />



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