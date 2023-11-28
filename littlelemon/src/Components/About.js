import "./Navbar";

function About() {
  return (
    <section id="about">
      <article id="restrauntDetails">
        <h1 id="RestrauntName">Little Lemon</h1>
        <h2 id="RestrauntLocation">Chicago</h2>
        <p className="aboutText">
          Little Lemon is owned by two Italian brothers, Mario and Adrian, who
          moved to the United States to pursue their shared dream of owning a
          restaurant.
        </p>
        <p className="aboutText">
          To craft the menu, Mario relies on family recipes and his experience
          as a chef in Italy. Adrian does all the marketing for the restaurant
          and led the effort to expand the menu beyond classic Italian to
          incorporate additional cuisines from the Mediterranean region.
        </p>
      </article>
      <div id="images">
        <div id="owner1"></div>
        <div id="owner2"></div>
      </div>
    </section>
  );
}
export default About;
