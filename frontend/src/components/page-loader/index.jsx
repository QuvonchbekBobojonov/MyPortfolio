import { useEffect, useState } from 'react';

// eslint-disable-next-line react/prop-types
function PageLoader({ ready, error }) {
  const [fading, setFading] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (!ready) return;
    const fadeTimer = setTimeout(() => setFading(true), 500);
    const hideTimer = setTimeout(() => setHidden(true), 1500);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, [ready]);

  if (hidden) return null;

  return (
    <div className="page-loader" style={{ transition: 'opacity 1s', opacity: fading ? 0 : 1 }}>
      {error ? (
        <p style={{ color: '#fff', textAlign: 'center', padding: '0 20px' }}>
          Failed to load data. Please refresh the page.
        </p>
      ) : (
        <div className="bounceball"></div>
      )}
    </div>
  );
}

export default PageLoader;
