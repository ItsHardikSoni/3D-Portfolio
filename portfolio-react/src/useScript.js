import { useEffect } from 'react';

const useScript = (scriptPath) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = scriptPath;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [scriptPath]);
};

export default useScript;

