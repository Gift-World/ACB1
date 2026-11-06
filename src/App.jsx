import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import ReactGA from "react-ga4";
import ScrollToTop from "./components/ScrollToTop";
import NavBar from "./components/NavBar";
import Seo from "./components/Seo";

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

const pageMetadata = {
  home: {
    title: "Africa's Campus Battle | Unapologetically Talented",
    description: "Africa's Campus Battle is the premier continental stage where young African talent shines through dance, music, spoken word and performing arts.",
    path: "/",
  },
  about: {
    title: "About Africa's Campus Battle | ACB",
    description: "Learn about Africa's Campus Battle, its mission, vision and impact empowering young creatives across Africa.",
    path: "/about",
  },
  auditions: {
    title: "Auditions | Africa's Campus Battle",
    description: "Discover how university students across Africa can audition for Africa's Campus Battle.",
    path: "/auditions",
  },
  pastSeasons: {
    title: "Past Seasons | Africa's Campus Battle",
    description: "Celebrate the champions, memorable performances and legacy of Africa's Campus Battle past seasons.",
    path: "/pastseasons",
  },
  season7: {
    title: "ACB Season 7 | Africa's Campus Battle",
    description: "Explore Africa's Campus Battle Season 7 and opportunities for Africa's next generation of talent.",
    path: "/season7",
  },
  news: {
    title: "News & Insights | Africa's Campus Battle",
    description: "Read the latest news, stories and insights from Africa's Campus Battle.",
    path: "/news-and-insights",
  },
  faq: {
    title: "Frequently Asked Questions | Africa's Campus Battle",
    description: "Find answers to common questions about Africa's Campus Battle, auditions, participation and events.",
    path: "/faq",
  },
  terms: {
    title: "Terms and Conditions | Africa's Campus Battle",
    description: "Read the terms and conditions for Africa's Campus Battle.",
    path: "/terms",
  },
  privacy: {
    title: "Privacy Policy | Africa's Campus Battle",
    description: "Read how Africa's Campus Battle protects and uses personal information.",
    path: "/privacy-policy",
  },
  consent: {
    title: "Consent | Africa's Campus Battle",
    description: "Learn how Africa's Campus Battle handles consent and personal information.",
    path: "/consent",
  },
  erasure: {
    title: "Data Erasure | Africa's Campus Battle",
    description: "Request the deletion of personal data held by Africa's Campus Battle.",
    path: "/erasure",
  },
  dataAccess: {
    title: "Data Access | Africa's Campus Battle",
    description: "Request access to personal data held by Africa's Campus Battle.",
    path: "/data-access",
  },
  communications: {
    title: "Communication Notice | Africa's Campus Battle",
    description: "Read the communication notice for Africa's Campus Battle.",
    path: "/communication-notice",
  },
  season6Magazine: {
    title: "Season 6 Magazine | Africa's Campus Battle",
    description: "Explore the Africa's Campus Battle Season 6 magazine.",
    path: "/season-6-magazine",
  },
  season5Magazine: {
    title: "Season 5 Magazine | Africa's Campus Battle",
    description: "Explore the Africa's Campus Battle Season 5 magazine.",
    path: "/season-5-magazine",
  },
  hub: {
    title: "ACB Hub | Africa's Campus Battle",
    description: "Watch and explore Africa's Campus Battle content in the ACB Hub.",
    path: "/acbhub",
  },
};

function Page({ children, metadata }) {
  return <><Seo {...metadata} />{children}</>;
}

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
        <Route path="/news-and-insights" element={<Page metadata={pageMetadata.news}><Blogs /></Page>} />
        <Route path="/consent" element={<Page metadata={pageMetadata.consent}><Consent /></Page>} />
        <Route path="/erasure" element={<Page metadata={pageMetadata.erasure}><Erasure /></Page>} />
        <Route path="/data-access" element={<Page metadata={pageMetadata.dataAccess}><DataAccess /></Page>} />
        <Route path="/terms" element={<Page metadata={pageMetadata.terms}><Terms /></Page>} />
        <Route path="/communication-notice" element={<Page metadata={pageMetadata.communications}><Communications /></Page>} />
        <Route path="/privacy-policy" element={<Page metadata={pageMetadata.privacy}><Privacy /></Page>} />
        <Route path="/" element={<Page metadata={pageMetadata.home}><Home /></Page>} />
        <Route path="/about" element={<Page metadata={pageMetadata.about}><About /></Page>} />
        <Route path="/pastseasons" element={<Page metadata={pageMetadata.pastSeasons}><PastSeasons /></Page>} />
        <Route path="/season7" element={<Page metadata={pageMetadata.season7}><Season7 /></Page>} />
        <Route path="/faq" element={<Page metadata={pageMetadata.faq}><FAQS /></Page>} />
        <Route path="/season-6-magazine" element={<Page metadata={pageMetadata.season6Magazine}><Magazine /></Page>} />
        <Route path="/acbhub" element={<Page metadata={pageMetadata.hub}><VideoGallery /></Page>} />
        <Route path="/season-5-magazine" element={<Page metadata={pageMetadata.season5Magazine}><Magazine2 /></Page>} />
        <Route path="/auditions" element={<Page metadata={pageMetadata.auditions}><Auditions /></Page>} />
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
