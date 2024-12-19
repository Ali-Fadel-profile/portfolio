import About from "./components/About";
import Contact from "./components/contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProjectsContainer from "./components/ProjectsContainer";
import Section from "./components/Section";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="flex w-full flex-col items-center justify-center overflow-x-hidden bg-gray font-Inter text-black transition-colors duration-300 dark:bg-black dark:text-gray">
      <Header />
      <Section>
        <About />
      </Section>
      <div className="h-1 w-screen border-b-[1px] border-b-off-white"></div>
      <Section>
        <Skills />
      </Section>
      <div className="h-1 w-screen border-b-[1px] border-b-off-white"></div>
      <ProjectsContainer />{" "}
      <div className="h-1 w-screen border-b-[1px] border-b-off-white"></div>
      <Section>
        <Contact />
      </Section>
      <div className="h-1 w-screen border-b-[1px] border-b-off-white"></div>
      <Footer />
    </div>
  );
}

export default App;
