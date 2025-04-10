import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GA_ID = 'G-NBL120LNT7';

export default function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', GA_ID, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);
}
