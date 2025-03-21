import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import ReactGA from "react-ga4";
import Clarity from "@microsoft/clarity"; // Import Clarity
import ScrollToTop from "./components/ScrollToTop";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import PastSeasons from "./pages/PastSeasons";
import Season7 from "./pages/Season7";
import FAQS from "./pages/FAQS";
import Terms from "./components/Terms";
import Magazine from "./components/Blogs/Magazine";
import VideoGallery from "./components/VideoGallery";
import Blogs from "./components/Blogs/Blogs";
import Magazine2 from "./components/Blogs/Magazine2";
import Communications from "./components/Communications";
import Privacy from "./components/Privacy";
import Consent from "./components/Consent";
import DataAccess from "./components/DataAccess";
import Erasure from "./components/Erasure";

ReactGA.initialize("G-8J85Q5Q4ME"); // Replace with your GA4 Measurement ID
Clarity.init("qrt90bfpnx"); // Replace with your Clarity Project ID

// Component to track page views
const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    const pagePath = location.pathname + location.search;

    // Send pageview to Google Analytics
    ReactGA.send({ hitType: "pageview", page: pagePath });

    // Send pageview to Microsoft Clarity
    Clarity.event("pageview"); // Optionally track custom events

  }, [location]);

  return null;
};

function App() {
  return (
    <div>
      <ScrollToTop />
      <NavBar />
      <AnalyticsTracker />
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
        <Route path="/season7" element={<Season7 />} />
        <Route path="/faq" element={<FAQS />} />
        <Route path="/season-6-magazine" element={<Magazine />} />
        <Route path="/acbhub" element={<VideoGallery />} />
        <Route path="/season-5-magazine" element={<Magazine2 />} />
      </Routes>
    </div>
  );
}

const RootApp = () => (
  <Router>
    <App />
  </Router>
);

export default RootApp;
