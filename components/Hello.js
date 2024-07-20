import data from "../models/restaurants.json";
import RestaurantCard from "./RestaurantCard";

export default function Hello(props) {
  console.log(data);
  return (
    <>
      <div className="flex flex-row flex-wrap justify-evenly">
        {data.map((restaurant) => {
          return <RestaurantCard key={restaurant.id} item={restaurant} />;
        })}
      </div>
    </>
  );
}
