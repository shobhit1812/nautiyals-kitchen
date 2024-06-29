import { IMG_CDN_URL } from "../utility/config";
import ShimmerUI from "./Shimmer";
import useRestaurant from "../utility/useRestaurant";
import { addItem } from "../utility/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const restaurant = useRestaurant();

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return !restaurant ? (
    <ShimmerUI />
  ) : (
    <div className="flex m-6 font-menu">
      <div>
        <h2 className="text-3xl py-2 font-extrabold">
          Restaurant Id: {restaurant?.info?.id}
        </h2>
        <h1 className="text-3xl py-2 font-medium underline">
          {restaurant?.info?.name}
        </h1>
        <img
          className="w-72 h-72 rounded-lg"
          src={IMG_CDN_URL + restaurant?.info?.cloudinaryImageId}
          alt="img"
        />
      </div>
      <div className="main flex flex-col items-center">
        <h1 className="text-3xl py-2 underline text-orange-400">Cuisines</h1>
        <ul className="text-3xl px-10">
          {restaurant?.info?.cuisines.map((item, index) => {
            return (
              <li key={index}>
                {item} -{" "}
                <button
                  className="p-2 m-2 bg-green-800 rounded-full hover:bg-green-500 text-xl text-white"
                  onClick={() => handleAddItem(item)}
                >
                  Add
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
