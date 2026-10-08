import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
return (
<> <Navbar />


  <main>
    <Hero />
    <Services />
    <Portfolio />
    <Pricing />
    <About />
    <Contact />
  </main>
  <Footer />
</>

);
}

export default App;
