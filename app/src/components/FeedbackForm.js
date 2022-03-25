import React from "react";
import { useState } from "react";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

const FeedbackForm = ({ handleAdd }) => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(null);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("*Feedback should be minimum of 10 characters");
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setText(e.target.value);
  };

  const sendFeedback = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      handleAdd(newFeedback);
      setText("");
      setRating(null);
      setBtnDisabled(true);
    }
  };

  return (
    <>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <h2>How would you rate your experience ?</h2>
        <RatingSelect
          ratingProp={rating}
          ratingNumberProp={(ratingNumberProp) => setRating(ratingNumberProp)}
        />

        <p className="rating-msg">
          {rating ? `Your Rating is ${rating} out of 5 ` : ""}
        </p>

        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button
            type="submit"
            version="primary"
            isDisabled={btnDisabled}
            onClick={sendFeedback}
          >
            Send
          </Button>
        </div>

        {message && <div className="message">{message}</div>}
      </form>
    </>
  );
};

export default FeedbackForm;
