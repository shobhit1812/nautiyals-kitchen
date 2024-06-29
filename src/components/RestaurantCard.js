import { IMG_CDN_URL } from "../utility/config";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  sla,
  avgRating,
  costForTwo,
}) => {
  return (
    <div className="w-80 p-5 font-card shadow-2xl rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-400">
      <img
        className="w-full object-cover h-52 rounded-lg"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt="food-img"
      />
      <h2 className="font-bold text-3xl py-4">{name}</h2>
      <h2 className="text-2xl">{costForTwo}</h2>
      <h2 className="text-xl">{avgRating} stars</h2>
      <h3 className="text-orange-400">{sla?.lastMileTravelString} away</h3>
    </div>
  );
};

export default RestaurantCard;
