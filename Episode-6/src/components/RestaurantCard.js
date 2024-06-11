import React from "react";

const IMG_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

const RestaurantCard = (props) => {
  const { restaurant } = props;

  const { info } = restaurant;

  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } = info;

  return (
    <div className="card">
      <img src={IMG_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
