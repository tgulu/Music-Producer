import { Element } from "react-scroll";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen w-full bg-black">
      <Nav />
      <Element name="Home">
        <Hero />
      </Element>
      <Element name="Artist">
        <Gallery />
      </Element>
      <Element name="Contact">
        <ContactForm />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
