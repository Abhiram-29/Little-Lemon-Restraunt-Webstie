import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../Images/Logo.svg";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>
        <img src={logo} alt="Restraunt Logo" />
      </h3>
      <nav ref={navRef}>
        <a href="/#">Home</a>
        <a href="/#about">About</a>
        <a href="/#speicalsComp">Menu</a>
        <a href="/#">Reservations</a>
        <a href="/#">Order Online</a>
        <a href="/#">Login</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
