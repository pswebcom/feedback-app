import React from "react";
import { useState } from "react";
import Button from "./shared/Button";

const FeedbackForm = () => {
  const [text, setText] = useState("");
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

  return (
    <>
      <form className="feedback-form">
        <h2>How would you rate your experience ?</h2>
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
