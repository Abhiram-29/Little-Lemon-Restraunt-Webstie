import StarRating from "./StarRating/StarRating";

function TestimonialCard({ UserName, rating, review, imageUrl }) {
  const ProjileStyle = {
    height: "4rem",
    width: "4rem",
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    margin: "none",
  };
  return (
    <div id="testimonial">
      <p>
        <StarRating rating={Number(rating)} />
      </p>
      <section id="customerDetails">
        <div className="profileIcon" style={ProjileStyle}></div>
        <h3>{UserName}</h3>
      </section>
      <article>{review}</article>
    </div>
  );
}

function Testimonials() {
  return (
    <>
      <div id="Heading">
        <h1 id="testimonialHeading">Customer Testimonials</h1>
      </div>
      <section id="testimonialCards">
        <TestimonialCard
          UserName="Andy"
          rating="4"
          review="This restaurant delivers an unforgettable dining experience. The ambiance is warm, the staff is friendly, and the food is simply divine."
          imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        />
        <TestimonialCard
          UserName="Mary"
          rating="5"
          review="A true gem in the culinary scene! Cozy atmosphere and impeccable service. The greek salad was a highlight—I can't wait to return."
          imageUrl="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        />
        <TestimonialCard
          UserName="Linus"
          rating="4"
          review="Dining here is like a culinary symphony. Harmonious flavors, skillful presentation—each dish is a masterpiece. "
          imageUrl="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        />
        <TestimonialCard
          UserName="Janet"
          rating="3"
          review="Charming ambiance, unforgettable flavors. The diverse menu caters to all palates. I tried the Lemon Dessert, and it was a burst of brilliance."
          imageUrl="https://images.unsplash.com/photo-1645378999013-95abebf5f3c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        />
      </section>
    </>
  );
}

export default Testimonials;
