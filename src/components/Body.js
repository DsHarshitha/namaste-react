import RestoCard from "./RestoCard";
import resList from "../utils/mockData";




const Body =() => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
        {resList.restaurants.map((restaurant) => (
            <RestoCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };


  export default Body;