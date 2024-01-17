import Header from "../Header/Header";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Resume from "../Resume/Resume";
import Footer from "../Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <About />
      <Projects />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
