import React from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

const RatingSelect = ({ ratingNumber }) => {
  const [clickRating, setClickRating] = useState(null);
  const [hoverRating, setHoverRating] = useState(null);

  const handleChange = (ratingValue) => {
    setClickRating(ratingValue);
    ratingNumber(ratingValue);
  };

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingVal = i + 1;
        return (
          <label key={ratingVal}>
            <input
              type="radio"
              name="rating"
              value={ratingVal}
              onClick={() => handleChange(ratingVal)}
            />
            <FaStar
              className="star"
              color={
                ratingVal <= (clickRating || hoverRating)
                  ? "#ffc107"
                  : "#e4e5e9"
              }
              onMouseEnter={() => setHoverRating(ratingVal)}
              onMouseLeave={() => setHoverRating(null)}
            />
          </label>
        );
      })}
      <p className="rating-msg">
        {clickRating ? `Your Rating is ${clickRating} out of 5 ` : ""}
      </p>
    </div>
  );
};

export default RatingSelect;
