import React from "react";
import Card from "./shared/Card";
import PropTypes from "prop-types";

const FeedbackItem = ({ item, handleDelete }) => {
  return (
    <Card reverse={item.reverse} id={item.id}>
      <div className="num-display">
        <span>{item.rating}</span>
      </div>
      <button className="close" onClick={() => handleDelete(item.id)}>
        <i
          className="fa fa-close"
          style={{
            color: item.id % 2 === 0 ? "#fff" : "#00162b",
          }}
        ></i>
      </button>
      <div className="text-display">
        <span>{item.text}</span>
      </div>
    </Card>
  );
};

FeedbackItem.protoTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
