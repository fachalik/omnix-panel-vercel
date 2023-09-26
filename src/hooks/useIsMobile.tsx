'use client';

import React from 'react';

const useIsMobile = () => {
  const getIsMobile = () => window.innerWidth <= 768;
  const [isMobile, setIsMobile] = React.useState(getIsMobile());

  React.useEffect(() => {
    const onResize = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(getIsMobile());
      }
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return isMobile;
};

export default useIsMobile;
