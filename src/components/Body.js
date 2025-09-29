import RestoCard from "./RestoCard";
import { useState } from "react";

// Normal way of creating a variable
let listOfres1 = [
    {
        "info": {
            "id": "10581",
            "name": "Pizza Hut",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/59844da6-91c7-4667-9389-fd81717d8168_10581.JPG",
            "areaName": "HSR Layout",
            "cuisines": [
                "Pizzas"
            ],
            "avgRating": 3.2,
            "totalRatingsString": "21K+", 
        },
    },
    {
        "info": {
            "id": "10582",
            "name": "Domino's Pizza",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/59844da6-91c7-4667-9389-fd81717d8168_10581.JPG",
            "areaName": "HSR Layout",
            "cuisines": [
                "Pizzas"
            ],
            "avgRating": 4.2,
            "totalRatingsString": "21K+",
         
        },
    },
    {
        "info": {
            "id": "10583",
            "name": "Meghana Foods",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/59844da6-91c7-4667-9389-fd81717d8168_10581.JPG",
            "areaName": "HSR Layout",
            "cuisines": [
                "Pizzas"
            ],
            "avgRating": 4.5,
            "totalRatingsString": "21K+",
            
        },
    },
];

// Using useState hook to create a state variable
const [listOfres] = useState([
    {
        "info": {
            "id": "10581",
            "name": "Pizza Hut",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/59844da6-91c7-4667-9389-fd81717d8168_10581.JPG",
            "areaName": "HSR Layout",
            "cuisines": [
                "Pizzas"
            ],
            "avgRating": 3.2,
            "totalRatingsString": "21K+", 
        },
    },
    {
        "info": {
            "id": "10582",
            "name": "Domino's Pizza",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/59844da6-91c7-4667-9389-fd81717d8168_10581.JPG",
            "areaName": "HSR Layout",
            "cuisines": [
                "Pizzas"
            ],
            "avgRating": 4.2,
            "totalRatingsString": "21K+",
         
        },
    },
    {
        "info": {
            "id": "10583",
            "name": "Meghana Foods",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/59844da6-91c7-4667-9389-fd81717d8168_10581.JPG",
            "areaName": "HSR Layout",
            "cuisines": [
                "Pizzas"
            ],
            "avgRating": 4.5,
            "totalRatingsString": "21K+",
            
        },
    },
]);



const Body =() => {
    return (
      <div className="body">
        <div className="filter">
            <button className="filter_btn"
             onClick ={()=> {
                listOfres = listOfres.filter(
                    (res) => res.info.avgRating > 4
                );
                console.log(listOfres);
            }}>Top Rated Restaurants</button>
        </div>
        <div className="res-container">
        {listOfres.map((restaurant) => (
            <RestoCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };


  export default Body;