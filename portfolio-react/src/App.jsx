import React, { useEffect } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import StarBackground from './components/StarBackground'
import './App.css'

function App() {
  useEffect(() => {
    const addScrollEffect = () => {
      const floatingElements = document.querySelectorAll(".floating");
      const handleScroll = () => {
        const scrollY = window.scrollY;
        floatingElements.forEach((element, index) => {
          element.style.transform = `translateY(${scrollY * 0.1 * (index + 1)}px)`;
        });
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    };

    addScrollEffect();
  }, []);

  return (
    <>
      <StarBackground />
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App

