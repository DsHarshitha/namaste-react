import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
// or we can use import Header from "./components/Header.js "; --> both are same
import Body from "./components/Body";


  // Always use Key in a map, else React wont be able to understand which element to update.
  // also Key should be unique for each element.
  // key={restaurant.info.id} is a good choice.
  // key={index} is a bad choice. [REACT itself do not approve of this]
  // As react gets confused which element to update, it may lead to bugs in your app.






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