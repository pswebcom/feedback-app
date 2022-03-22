import React from "react";
import { useState } from "react";

const FeedbackItem = () => {
  const [rating, setRating] = useState(10);
  const [text, setText] = useState("example of feedback item");

  const handleClick = () => {
    setRating((prev) => {
      return 1 + prev;
    });
  };
  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display">
        <span>{text}</span>
      </div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default FeedbackItem;
