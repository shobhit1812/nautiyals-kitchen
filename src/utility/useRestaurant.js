import { useState, useEffect } from "react";
import { SWIGGY_API_URL } from "./config";

const useRestaurant = () => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  const getRestaurantInfo = async () => {
    const data = await fetch(SWIGGY_API_URL);
    const json = await data.json();
    setRestaurant(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants[4]
    );
  };

  return restaurant;
};

export default useRestaurant;
