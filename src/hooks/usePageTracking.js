import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const usePageTracking = () => {
    const location = useLocation();

    useEffect(() => {
        // Initialize GA4 only once? Typically done in App or main.
        // However, tracking page views needs to happen on location change.

        // Check if GA is initialized or ID is present
        const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;

        if (gaId) {
            if (!ReactGA.isInitialized) {
                ReactGA.initialize(gaId);
            }
            ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
        }
    }, [location]);
};

export default usePageTracking;
