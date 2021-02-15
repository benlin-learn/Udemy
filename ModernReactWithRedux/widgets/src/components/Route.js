import { useEffect, useState } from 'react';

const Route = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      // console.log('Location Change');
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', onLocationChange);

    // cleanup eventListener
    return () => {
      window.removeEventListener('popstate', onLocationChange);
    };
  }, []);

  return currentPath === path ? children : null;
};

export default Route;
