import bruchettaImg from "../Images/bruchetta.svg";
import greekSaladImg from "../Images/greekSalad.jpg";
import desertImg from "../Images/lemon dessert.jpg";

function SpecialsCard({ imageUrl, description, dishName, dishPrice }) {
  const imageStyle = {
    height: "12rem",
    width: "18rem",
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    margin: "none",
  };
  return (
    <div className="dishCard">
      <div className="dishImage" style={imageStyle}></div>
      <section id="dishInfo">
        <h2 id="name">{dishName}</h2>
        <h2 id="cost">{"$" + dishPrice}</h2>
      </section>
      <article className="dishDescription">{description}</article>
      <div className="orderOnline">
        <h3 id="orderText">Order a delivery</h3>
        <div className="deliverIcon"></div>
      </div>
    </div>
  );
}

function handleClick() {
  console.log("Redirect to Online Menu");
}

function Specials() {
  const bruchettaDesc =
    "Our Brucheta is made form grilled bread that has been smeared with garlic and seasoned with salt and olive oil";
  const saladDesc =
    "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.";
  const desertDesc =
    "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.";
  return (
    <main>
      <div className="specialHeading">
        <h1>Today's Specials</h1>
        <button onClick={handleClick} id="menuButton">
          Online Menu
        </button>
      </div>
      <div className="specialItems">
        <SpecialsCard
          imageUrl={greekSaladImg}
          description={saladDesc}
          dishName="Greek Salad"
          dishPrice="10.99"
        />
        <SpecialsCard
          imageUrl={bruchettaImg}
          description={bruchettaDesc}
          dishName="Bruchetta"
          dishPrice="8.99"
        />
        <SpecialsCard
          imageUrl={desertImg}
          description={desertDesc}
          dishName="Lemon Dessert"
          dishPrice="5.99"
        />
      </div>
    </main>
  );
}

export default Specials;
