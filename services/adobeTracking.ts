/**
 * Adobe Tracking Service for Hilton Guest Hub
 * 
 * Uses Hilton's standard pattern:
 * 1. Set window.digitalData object (data layer)
 * 2. Call _satellite.track() to trigger Launch rules
 * 
 * Reference: China LLS Home Page tracking pattern
 */

// Extend Window interface
declare global {
  interface Window {
    digitalData?: {
      global?: {
        page?: {
          language?: string;
          brandCode?: string;
          primaryCategory?: string;
          pageType?: string;
          siteName?: string;
          version?: string;
        };
      };
    };
    _satellite?: {
      track: (eventName: string, data?: object) => void;
    };
  }
}

/**
 * Wait for _satellite to become available (loaded via Adobe Launch script).
 * Retries for up to 5 seconds.
 */
function waitForSatellite(callback: () => void, maxRetries = 20, interval = 250): void {
  let retries = 0;
  const check = () => {
    if (window._satellite && typeof window._satellite.track === 'function') {
      callback();
    } else if (retries < maxRetries) {
      retries++;
      setTimeout(check, interval);
    } else {
      console.warn('[Adobe Tracking] _satellite not available after timeout.');
    }
  };
  check();
}

/**
 * Track Guest Hub home page view.
 * Sets digitalData and fires _satellite.track('guest_hub_page')
 */
export function trackPageView(language: string = 'zh-CN'): void {
  waitForSatellite(() => {
    window.digitalData = {
      global: {
        page: {
          language: language,
          brandCode: "HI",
          primaryCategory: "Hilton Guest Hub",
          pageType: "Hilton Guest Hub",
          siteName: "HiltonChina",
          version: "index"
        }
      }
    };

    window._satellite!.track('brand_page');
    console.log('[Adobe Tracking] Page view sent via _satellite.track("brand_page")');
  });
}
