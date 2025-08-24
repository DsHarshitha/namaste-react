import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Project - 1 : Food Delivery app plan
 * Header
 *   - Logo
 *   - Nav Items
 * Body
 *  - Search 
 *  - Resto Container
 *      - Resto Cards [Food pic, Restaurant name, cuisine, delivery time, rating]
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const Header = () => {
  return (
    <div className = "header">
      <div className = "logo-container">
        <img className="logo" src = "https://static.vecteezy.com/system/resources/previews/047/171/152/non_2x/logo-design-for-restaurant-and-food-company-vector.jpg"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>

  );
}

const Body =() => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestoCard/>
        <RestoCard/>
        <RestoCard/>
        <RestoCard/>
        <RestoCard/>
        <RestoCard/>
        <RestoCard/>
      </div>
    </div>
  );
};


const RestoCard = () => {
return (
<div className="res-card" style={{
  backgroundColor: "#dbe1ceeb",
}}>
<img className="card-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlPQXFO4B201Ry8o7_Soa7dwhJBrtcwJdE0w&s"></img>
<h3>Meghana Foods</h3>
<h3>Biryani, Hyderabadi, Andra style </h3>
<h3>4.4 ratings</h3>
<h3>38 minutes</h3>
</div>
);
};

const AppLayout = () => {
  return (
    <div className = "app">
      <Header/>
      <Body/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);