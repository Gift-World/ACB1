import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import PastSeasons from "./pages/PastSeasons";
import Season7 from "./pages/Season7"
import FAQS from "./pages/FAQS"
import Terms from "./components/Terms";
import Magazine from "./components/Blogs/Magazine"
import VideoGallery from "./components/VideoGallery";
import Blogs from "./components/Blogs/Blogs";
import Magazine2 from './components/Blogs/Magazine2'
import Communications from "./components/Communications";
import Privacy from "./components/Privacy";
import Consent from "./components/Consent";
import DataAccess from "./components/DataAccess";
import Erasure from "./components/Erasure";


function App() {
  return (
    <div>
      <NavBar />
              <Routes>
              <Route path="/news-and-insights" element={<Blogs />} />
              <Route path="/consent" element={<Consent />} />
              <Route path="/erasure" element={<Erasure />} />
              <Route path="/data-access" element={<DataAccess />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/communication-notice" element={<Communications />} />
              <Route path="/privacy-policy" element={<Privacy />} />

              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} /> 
              <Route path="/pastseasons" element={<PastSeasons />} /> 
              <Route path="/season7" element ={<Season7 />} />
              <Route path="/faq" element ={<FAQS />} />
              <Route path="/season-6-magazine" element ={<Magazine />} />
              <Route path="/acbhub" element ={<VideoGallery />} />
              <Route path="/season-5-magazine" element ={<Magazine2 />} />


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