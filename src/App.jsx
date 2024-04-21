import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skill from "./components/Skill";
import Work from "./components/Work";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Work />
      <Contact/>
    </>
  );
}

export default App;
