import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { SWIGGY_API_URL } from "../utility/config";
import { Link } from "react-router-dom";
import useOnline from "../utility/useOnline";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const isOnline = useOnline();

  const filterData = (searchText, allRestaurants) =>
    allRestaurants.filter(
      (restaurant) =>
        restaurant?.info?.name
          ?.toLowerCase()
          ?.includes(searchText.toLowerCase()) ||
        restaurant?.info?.cuisines
          ?.join(", ")
          ?.toLowerCase()
          ?.includes?.(searchText.toLowerCase())
    );

  const handleEnterPress = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      const data = filterData(searchText, allRestaurants);
      setFilteredRestaurants(data);
      setSearchText("");
    }
  };

  const getRestaurantInfo = async () => {
    const data = await fetch(SWIGGY_API_URL);
    const json = await data.json();
    setAllRestaurants(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle.restaurants
    );
    setFilteredRestaurants(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle.restaurants
    );
  };

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  if (!isOnline)
    return (
      <h1 className="flex p-3 font-unique justify-center text-4xl">
        🔴 Offline, Please check your internet
      </h1>
    );

  if (!allRestaurants) return null;

  return (
    <>
      <div className="p-5 my-1 font-search flex justify-center shadow-sm">
        <input
          type="text"
          className="rounded-s-3xl p-2 m-2 text-3xl border text-black"
          placeholder="Burger"
          value={searchText}
          name="text"
          onChange={(e) => {
            e.preventDefault();
            setSearchText(e.target.value);
          }}
          onKeyDown={handleEnterPress}
        />
        <button
          className="p-3 m-2 font-search text-white bg-green-800 rounded-e-full hover:bg-green-700 text-xl"
          onClick={(e) => {
            e.preventDefault();
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
            setSearchText("");
          }}
        >
          Search
        </button>
      </div>
      {allRestaurants?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="flex flex-wrap justify-center gap-6 my-8">
          {filteredRestaurants?.length === 0 ? (
            <h1 className="text-4xl font-unique">
              No Restaurant match your Filter
            </h1>
          ) : (
            filteredRestaurants?.map((restaurant) => {
              return (
                <Link
                  to={"/restaurant/" + restaurant.info.id}
                  key={restaurant.info.id}
                >
                  <RestaurantCard {...restaurant.info} />
                </Link>
              );
            })
          )}
        </div>
      )}
    </>
  );
};

export default Body;
