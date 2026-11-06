import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import ReactGA from "react-ga4";
import ScrollToTop from "./components/ScrollToTop";
import NavBar from "./components/NavBar";

// Pages load only when a visitor opens them. This keeps code for the PDF, video,
// magazine and policy pages out of the first homepage download.
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const PastSeasons = lazy(() => import("./pages/PastSeasons"));
const Season7 = lazy(() => import("./pages/Season7"));
const FAQS = lazy(() => import("./pages/FAQS"));
const Terms = lazy(() => import("./components/Terms"));
const Magazine = lazy(() => import("./components/Blogs/Magazine"));
const VideoGallery = lazy(() => import("./components/VideoGallery"));
const Blogs = lazy(() => import("./components/Blogs/Blogs"));
const Magazine2 = lazy(() => import("./components/Blogs/Magazine2"));
const Communications = lazy(() => import("./components/Communications"));
const Privacy = lazy(() => import("./components/Privacy"));
const Consent = lazy(() => import("./components/Consent"));
const DataAccess = lazy(() => import("./components/DataAccess"));
const Erasure = lazy(() => import("./components/Erasure"));
const Auditions = lazy(() => import("./pages/Auditions.jsx"));

ReactGA.initialize("G-8J85Q5Q4ME"); // Replace with your GA4 Measurement ID


// Component to track page views
const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    const pagePath = location.pathname + location.search;

    // Send pageview to Google Analytics
    ReactGA.send({ hitType: "pageview", page: pagePath });

    

  }, [location]);

  return null;
};

function App() {
  return (
    <div>
      <ScrollToTop />
      <NavBar />
      {/*<InstallPrompt/>*/}
      <AnalyticsTracker />
      <Suspense fallback={<main className="min-h-screen bg-black" aria-label="Loading page" />}>
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
        <Route path="/auditions" element={<Auditions />} />
      </Routes>
      </Suspense>
    </div>
  );
}

const RootApp = () => (
  <Router>
    <App />
  </Router>
);

export default RootApp;
