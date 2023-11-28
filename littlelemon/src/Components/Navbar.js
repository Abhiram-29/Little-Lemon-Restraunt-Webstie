import logoImg from "../Images/Logo.svg";
import "./About";
function Navbar() {
  return (
    <nav>
      <ul id="navi">
        <li>
          {" "}
          <img src={logoImg} alt="Brand logo"></img>
        </li>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a>Menu</a>
        </li>
        <li>
          <a>Reservations</a>
        </li>
        <li>
          <a>Order Online</a>
        </li>
        <li>
          <a>Login</a>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
