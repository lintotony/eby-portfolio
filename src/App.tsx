import Home from "./pages/Home";
import About from "./pages/About";
import Career from "./pages/Career";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import CustomCursor from "./animations/CustomCursor";
import Header from "./components/Header";
import Certifications from "./pages/Certifications";
import Blogs from "./pages/Blogs";

function App() {
  return (
    <>
      <CustomCursor />
      <div className="fixed top-0 left-0 w-full z-50 bg-primary">
        <Header />
      </div>
      <main className="bg-primary min-h-screen relative scroll-smooth">
        <Home />
        <About />
        <Career />
        <Projects />
        <Certifications />
        <Blogs />
        <Contact />
      </main>
    </>
  );
}

export default App;
