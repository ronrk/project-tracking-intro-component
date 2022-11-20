import React, { useState } from "react";
import Hero from "./Components/Hero/Hero";
import ImageSection from "./Components/ImageSection/ImageSection";
import MobileMenu from "./Components/MobileMenu/MobileMenu";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="app-container">
      <div className="grey-bg"></div>
      <header className="header">
        <Navbar showMenu={isMenuOpen} toggleMenu={toggleMenu} />
      </header>
      {isMenuOpen ? <MobileMenu showMenu={isMenuOpen} /> : null}

      <main className="main" onClick={closeMenu}>
        <Hero />
        <ImageSection />
      </main>
    </div>
  );
};

export default App;
