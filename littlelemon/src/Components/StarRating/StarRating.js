// StarRating.js
import React from "react";
import "./StarRating.css";

const StarRating = ({ rating }) => {
  const roundedRating = Math.round(rating * 2) / 2;

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      const starClass =
        roundedRating - i >= 1
          ? "full"
          : roundedRating - i === 0.5
          ? "half"
          : "empty";
      stars.push(<span key={i} className={`star ${starClass}`} />);
    }
    return stars;
  };

  return <div className="starRating">{renderStars()}</div>;
};

export default StarRating;
