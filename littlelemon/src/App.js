import "./App.css";
import About from "./Components/About";
import HeroSection from "./Components/HeroSection";
import TableReservation from "./Components/Reservation/TableReservation";
import Navbar from "./Components/Navbar";
import Specials from "./Components/Specials";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";

function App() {
  let section = true;
  if (section) {
    return (
      <>
        <meta
          name="description"
          content="Little lemon is a family owned medeterrian restraunt based in Chicago"
        />
        <meta name="og:title" content="Little Lemon" />
        <Navbar />
        <HeroSection />
        <Specials />
        <Testimonials />
        <About />
        <Footer />
      </>
    );
  } else {
    return <TableReservation />;
  }
}

export default App;
