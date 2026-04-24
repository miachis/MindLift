import Navbar from "../components/Navbar";
import Header from "../components/Header";
import "../index.css";
import About from "../components/About";
import DropDownNavbar from "../components/DropDownNavbar";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <FAQ />
      <Contact />
    </>
  );
}

export default App;
