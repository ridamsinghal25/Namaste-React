import React from "react";

const RestaurantCard = (props) => {
  const { restaurant } = props;

  const { name, cuisine, stars, deliveryTime, image } = restaurant;

  return (
    <div className="card">
      <img src={image} />
      <h3>{name}</h3>
      <h4>{cuisine}</h4>
      <h4>{stars} stars</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
