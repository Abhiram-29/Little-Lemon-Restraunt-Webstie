function Footer() {
  return (
    <footer className="footer">
      <main id="footerContent">
        <div className="ambiance"></div>
        <div className="websiteNav">
          <h1 className="footerHeadings">
            Little
            <br /> Lemon
          </h1>
          <ul id="navigationLinks">
            <li className="links">Home</li>
            <li className="links">Menu</li>
            <li className="links">Reservations</li>
            <li className="links">Order Online</li>
            <li className="links">About</li>
            <li className="links">Login</li>
          </ul>
        </div>
        <div className="Contact">
          <h1 className="footerHeadings">Contact</h1>
          <article id="address">
            Little Lemon <br /> 331 E Chicago
            <br /> LaSalle Street Chicago,
            <br /> Illinois 60602 USA
          </article>
          <a href=" " id="address">
            +55 11 9999-9999
            <br />
          </a>
          <a href="https://mail.google.com/mail" id="address">
            contact@littlelemon.com
          </a>
        </div>
        <div className="SocialMediaLinks">
          <h1 className="footerHeadings">Social Media</h1>
          <div className="Socials">
            <ul id="navigationLinks">
              <li className="links">
                <a href="https://www.facebook.com/" className="links">
                  Facebook
                </a>
              </li>
              <li className="links">
                <a href="https://www.instagram.com/" className="links">
                  Instagram
                </a>
              </li>
              <li className="links">
                <a href="https://twitter.com/" className="links">
                  X (Twitter)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <div id="copyright">
        <p>Developed by Chittapu Abhiram Reddy</p>
        <p>© 2023 Little Lemon. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
