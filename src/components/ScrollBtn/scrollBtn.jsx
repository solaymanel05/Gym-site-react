import React, { useState, useEffect } from 'react';
import "./scrollBtn.css"
const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="scroll-button">
      {visible && (
        <button onClick={scrollToTop} className="scroll-button__btn">
          &#8679;
        </button>
      )}
    </div>
  );
};

export default ScrollButton;
