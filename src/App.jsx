import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Project from "./components/Project";
import ChooseMe from "./components/ChooseMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Experience />
      <Project />
      <ChooseMe />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
