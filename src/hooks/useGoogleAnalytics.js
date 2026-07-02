import { useEffect } from 'react';

/**
 * Google Analytics Hook
 * 
 * Uso:
 * 1. Obtén tu ID de GA4 desde Google Analytics
 * 2. Importa este hook en App.jsx
 * 3. Llama a useGoogleAnalytics(GA_ID) en el componente raíz
 * 
 * Ejemplo:
 * import { useGoogleAnalytics } from './hooks/useGoogleAnalytics';
 * 
 * function App() {
 *   useGoogleAnalytics('G-XXXXXXXXXX');
 *   // ...
 * }
 */

export function useGoogleAnalytics(gaId) {
  useEffect(() => {
    if (!gaId || gaId.trim() === '') {
      console.warn('Google Analytics ID no configurado');
      return;
    }

    // Cargar script de Google Analytics
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(script);

    // Configurar gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', gaId, {
      'page_path': window.location.pathname,
      'anonymize_ip': true,
      'allow_google_signals': true,
      'allow_ad_personalization_signals': true
    });

    return () => {
      // Cleanup si es necesario
    };
  }, [gaId]);
}

/**
 * Google Tag Manager Hook
 * 
 * Para usar GTM en lugar de GA:
 */
export function useGoogleTagManager(containerId) {
  useEffect(() => {
    if (!containerId || containerId.trim() === '') {
      console.warn('GTM Container ID no configurado');
      return;
    }

    // Google Tag Manager
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${containerId}`;
    document.head.appendChild(script);

    // Noscript fallback
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', containerId);

    // Add noscript iframe
    const noscript = document.createElement('noscript');
    noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${containerId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
    document.body.insertBefore(noscript, document.body.firstChild);

    return () => {
      // Cleanup
    };
  }, [containerId]);
}
