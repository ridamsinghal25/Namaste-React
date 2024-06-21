import React, { useEffect, useState } from "react";
import { FOODFIRE_MENU_API_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(FOODFIRE_MENU_API_URL + resId);
    const json = await data.json();
    setRestaurantInfo(json);
  };

  return restaurantInfo;
};

export default useRestaurantMenu;
