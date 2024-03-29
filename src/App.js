import React, { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import Home from "./scenes/Home";
import PageBreak from "./components/PageBreak";
import Skills from "./scenes/Skills";
import Projects from "./scenes/Projects";
import Contact from "./scenes/Contact";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          ></DotGroup>
        )}
        <Home setCurrentPage={setCurrentPage} />
      </div>
      <PageBreak />
      <div className="w-5/6 mx-auto md:h-fit">
        <Skills />
      </div>
      <PageBreak />
      <div className="w-5/6 mx-auto md:h-fit">
        <Projects />
      </div>
      <PageBreak />
      <div className="w-5/6 mx-auto md:h-full">
        <Contact />
      </div>
    </div>
  );
}

export default App;
