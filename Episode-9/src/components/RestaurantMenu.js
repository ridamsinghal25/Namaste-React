import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  IMG_CDN_URL,
  ITEM_IMG_CDN_URL,
  MENU_ITEM_TYPE_KEY,
  NESTED_MENU_ITEM_KEY,
  RESTAURANT_TYPE_KEY,
} from "../utils/constants";
import { MenuShimmer } from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();

  const restaurantInfo = useRestaurantMenu(resId);

  const categories =
    restaurantInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) => c.card?.card?.["@type"] === MENU_ITEM_TYPE_KEY
    );

  const restaurant =
    restaurantInfo?.data?.cards
      ?.map((x) => x.card)
      ?.find((x) => x && x.card["@type"] === RESTAURANT_TYPE_KEY)?.card?.info ||
    null;

  const menuItemsData =
    restaurantInfo?.data?.cards
      .find((x) => x.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
      ?.filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY)
      ?.map((x) => x.itemCards)
      .flat()
      .map((x) => x.card?.info) || [];

  const menuItems = [];
  menuItemsData.forEach((item) => {
    if (!menuItems.find((x) => x.id === item.id)) {
      menuItems.push(item);
    }
  });

  const handleToggle = (index) => {
    setShowIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return !restaurant ? (
    <MenuShimmer />
  ) : (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{restaurant.name}</h1>
      <p className="font-bold text-lg">
        {restaurant.cuisines.join(", ")} - {restaurant.costForTwoMessage}
      </p>
      {/* categories Accordian */}
      {categories.map((category, index) => {
        return (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => handleToggle(index)}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
