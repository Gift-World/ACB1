// src/analytics.js
import ReactGA from "react-ga4";

export const initializeAnalytics = () => {
    ReactGA.initialize("G-8J85Q5Q4ME"); // Replace with your Measurement ID
};

export const trackPageView = (pagePath) => {
    ReactGA.send({ hitType: "pageview", page: pagePath });
};