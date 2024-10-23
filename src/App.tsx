import Navbar from "./components/Navbar";
import Presentation from "./components/Presentation";
import Projects from "./components/Projects.jsx";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
import RevealOnScroll from "./components/RevealOnScroll";

function App() {
  return (
    <>
      <div className="container mx-auto bg-white rounded-md pb-12">
        <RevealOnScroll>
          <Navbar />
          <Presentation />
        </RevealOnScroll>
        <Projects />
        <RevealOnScroll>
          <Technologies />
        </RevealOnScroll>
        <Contact />
      </div>
    </>
  );
}

export default App;
