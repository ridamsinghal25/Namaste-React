import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { RESTAURANTS } from "../utils/constants.js";

const Body = () => {
  const [listOfRestaurants, setListOfRestraunt] = useState(RESTAURANTS);
  return (
    <>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.stars > 4.6
            );
            setListOfRestraunt(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-list">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.stars} restaurant={restaurant} />
        ))}
      </div>
    </>
  );
};

export default Body;
