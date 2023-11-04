import { useEffect } from 'react';

function PageLoader() {
  useEffect(() => {
    setTimeout(() => {
      const pageLoader = document.querySelector('.page-loader');
      if (pageLoader) {
        pageLoader.style.transition = 'opacity 1s';
        pageLoader.style.opacity = '0';

        setTimeout(() => {
          pageLoader.style.display = 'none';
        }, 2000);
      }
    }, 1000);
  }, []);

  return (
    <div className="page-loader">
      <div className="bounceball"></div>
    </div>
  );
}

export default PageLoader;
