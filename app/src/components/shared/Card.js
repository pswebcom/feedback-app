import React from "react";

const Card = ({ children, reverse, id }) => {
  // **way 1
  //   return <div className={`card ${reverse && "reverse"}`}>{children}</div>;

  return (
    <>
      <div
        className="card"
        // **way 2
        // style={{
        //   backgroundColor: id % 2 === 0 ? "#00162b" : "#fff",
        //   color: id % 2 === 0 ? "white" : "black",
        // }}
      >
        {children}
      </div>
    </>
  );
};

export default Card;
