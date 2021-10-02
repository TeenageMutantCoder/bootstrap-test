import Header from "./header";
import Hero from "./hero";
import About from "./about";
import Skills from "./skills";
import Projects from "./projects";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
