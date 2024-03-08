import { useEffect } from 'react';

function PageLoader() {
  useEffect(() => {
    const pageLoader = document.querySelector('.page-loader');

    const fadeOutPageLoader = () => {
      if (pageLoader) {
        pageLoader.style.transition = 'opacity 1s';
        pageLoader.style.opacity = '0';
        setTimeout(() => {
          pageLoader.style.display = 'none';
        }, 1000);
      }
    };

    window.addEventListener('load', () => {
      setTimeout(fadeOutPageLoader, 500);
    });

    return () => {
      window.removeEventListener('load', fadeOutPageLoader);
    };
  }, []);

  return (
    <div className="page-loader">
      <div className="bounceball"></div>
    </div>
  );
}

export default PageLoader;
