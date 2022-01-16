import React from "react";

const Animal = ({ animal }) => {
  return (
    <div className="animal">
      <img src={animal.image_link} alt="" />
      <p className="animal__name">{animal.name}</p>
    </div>
  );
};

export default Animal;
