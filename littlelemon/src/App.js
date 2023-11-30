import "./App.css";
import About from "./Components/About";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import Specials from "./Components/Specials";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";
import Main from "./Components/Reservation/Main";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Specials />
      <Main />
      <Testimonials />
      <About />
      <Footer />
    </>
  );
}

export default App;
