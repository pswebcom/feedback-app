import React from "react";
import Card from "./shared/Card";
import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";

const FeedbackItem = ({ item, handleDelete }) => {
  return (
    <Card reverse={item.reverse} id={item.id}>
      {[...Array(item.rating)].map((i) => {
        return (
          // <div className="fa-star-div">
          <span className="fa-star-span">
            <FaStar className="fa-star"></FaStar>
          </span>
        );
      })}

      <i className="fa fa-close" onClick={() => handleDelete(item.id)}></i>
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
