import React from "react";
import Card from "./shared/Card";

const FeedbackItem = ({ item }) => {
  return (
    <Card reverse={item.reverse} id={item.id}>
      <div className="num-display">
        <span>{item.rating}</span>
      </div>
      <div className="text-display">
        <span>{item.text}</span>
      </div>
    </Card>
  );
};

export default FeedbackItem;
