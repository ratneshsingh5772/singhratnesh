/**
 * Performance Optimization Utilities
 * Best practices for Core Web Vitals and SEO
 */

/**
 * Lazy load images with Intersection Observer
 * Usage: <img data-src="image.jpg" class="lazy" alt="Description" />
 */
export const lazyLoadImages = () => {
  if ('IntersectionObserver' in globalThis) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      }
    });

    const images = document.querySelectorAll('img.lazy');
    for (const img of images) {
      imageObserver.observe(img);
    }
  }
};

/**
 * Preload critical resources
 * Call this in your main component
 */
export const preloadCriticalAssets = () => {
  // Preload critical fonts
  const fontLinks = [
    // Add your font URLs here
    // { href: '/fonts/your-font.woff2', type: 'font/woff2' }
  ];

  if (fontLinks.length > 0) {
    for (const { href, type } of fontLinks) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'font';
      link.type = type;
      link.href = href;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    }
  }
};

/**
 * Optimize image loading with srcset
 * Returns srcset string for responsive images
 */
export const generateSrcSet = (imagePath, sizes = [320, 640, 1024, 1920]) => {
  return sizes.map(size => `${imagePath}?w=${size} ${size}w`).join(', ');
};

/**
 * Defer non-critical scripts
 */
export const deferNonCriticalScripts = () => {
  const scripts = document.querySelectorAll('script[data-defer]');
  for (const script of scripts) {
    script.defer = true;
  }
};

/**
 * Monitor Core Web Vitals
 * Requires web-vitals package: bun add web-vitals
 */
export const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

/**
 * Prefetch route on hover (for React Router)
 */
export const prefetchRoute = (path) => {
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = path;
  document.head.appendChild(link);
};

/**
 * Service Worker registration for PWA
 */
export const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(registration => {
          console.log('SW registered:', registration);
        })
        .catch(error => {
          console.log('SW registration failed:', error);
        });
    });
  }
};

/**
 * Optimize scroll performance
 */
export const optimizeScroll = () => {
  let ticking = false;

  globalThis.addEventListener('scroll', () => {
    if (!ticking) {
      globalThis.requestAnimationFrame(() => {
        // Your scroll handling code here
        ticking = false;
      });
      ticking = true;
    }
  });
};

/**
 * Resource hints for external domains
 */
export const addResourceHints = (domains = []) => {
  for (const domain of domains) {
    // DNS Prefetch
    const dnsPrefetch = document.createElement('link');
    dnsPrefetch.rel = 'dns-prefetch';
    dnsPrefetch.href = domain;
    document.head.appendChild(dnsPrefetch);

    // Preconnect
    const preconnect = document.createElement('link');
    preconnect.rel = 'preconnect';
    preconnect.href = domain;
    document.head.appendChild(preconnect);
  }
};
