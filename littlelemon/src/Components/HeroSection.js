function handleClick() {
  console.log("Table Reserved");
}

function HeroSection() {
  return (
    <section className="hero">
      <div className="left">
        <h1 id="heroH1">Little Lemon</h1>
        <h2 id="heroH2">Chicago</h2>
        <article id="heroDesc">
          We are a family owned mediterrian
          <br /> restraunt, focused on traditional recipies
          <br /> served with a modern twist.
        </article>
        <a href="/#Main">
          <button onClick={handleClick}>Reserve a Table</button>
        </a>
      </div>
      <div id="heroimg"></div>
    </section>
  );
}
export default HeroSection;
