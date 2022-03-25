import React from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

const RatingSelect = ({ ratingProp, ratingNumberProp }) => {
  const [clickRating, setClickRating] = useState(null);
  const [hoverRating, setHoverRating] = useState(null);

  const handleChange = (value) => {
    setClickRating(value);
    ratingNumberProp(value);
  };

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingIndex = i + 1;

        return (
          <label key={ratingIndex}>
            <input
              type="radio"
              name="rating"
              value={ratingIndex}
              onClick={() => handleChange(ratingIndex)}
            />
            <FaStar
              className="star"
              color={
                ratingIndex <= (clickRating || hoverRating) ? "#ffc107" : "#ccc"
              }
              onMouseEnter={() => setHoverRating(ratingIndex)}
              onMouseLeave={() => setHoverRating(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default RatingSelect;
