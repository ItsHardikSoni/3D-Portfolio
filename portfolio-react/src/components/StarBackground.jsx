import React, { useEffect, useRef } from 'react';

const StarBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createStar = () => {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.left = `${Math.random() * 100}vw`;
      star.style.top = `${Math.random() * 100}vh`;
      star.style.animationDuration = `${Math.random() * 5 + 3}s`;
      const starSize = `${Math.random() * 4 + 2}px`;
      star.style.width = starSize;
      star.style.height = starSize;
      star.style.animationDelay = `${Math.random() * 2}s`;

      container.appendChild(star);

      setTimeout(() => {
        star.remove();
      }, 8000);
    };

    const intervalId = setInterval(createStar, 200);

    return () => {
      clearInterval(intervalId);
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);

  return <div ref={containerRef} className="star-container" />;
};

export default StarBackground;

