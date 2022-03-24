import React from "react";
import Card from "./shared/Card";

const FeedbackForm = () => {
  return (
    <>
      <form className="feedback-form">
        <h2>How would you rate your experience ?</h2>
        <div className="input-group">
          <input type="text" placeholder="Write a review" />
          <button type="submit">Send</button>
        </div>
      </form>
    </>
  );
};

export default FeedbackForm;
