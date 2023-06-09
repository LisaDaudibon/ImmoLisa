import React from "react";

const Card = (props) => {
  const { title, content } = props;

  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Card;