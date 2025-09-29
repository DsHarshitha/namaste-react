import { CDN_URL } from "../utils/constants";

const RestoCard = (props) => {

    const {resData} = props;
    const {cloudinaryImageId, name, cuisines, avgRating, totalRatingsString, areaName} = resData.info;
  
    return (
    <div className="res-card" style={{
      backgroundColor: "#dbe1ceeb",
    }}>
    <img className="card-logo" src={CDN_URL+cloudinaryImageId}></img>
    <h3>{name}</h3>
    <h4>{cuisines.join(", ")}</h4>
    <h4>{avgRating}</h4>
    <h4>{totalRatingsString} ratings</h4>
    <h4>{areaName}</h4>
    </div>
    );
    };

    
    export default RestoCard;