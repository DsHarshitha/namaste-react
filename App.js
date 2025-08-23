import React from "react";
import ReactDOM from "react-dom/client";


//const heading = React.createElement( tag we want to create, Attributes , child)
// This is hpw we create element by React
const heading = React.createElement(
  "h1",
  {id : "heading"},
  "Namaste React"
); 

// console.log(heading);


// JSX - HTML like or XML-like syntax
// This is how we create element using JSX
const jsxHeading = <h1 id = "heading">Namaste from jsx</h1> //<- This is same as the above React.createElement

// Java script/ js engine does not understand jsx [The above code]
// Js engine only understands Ecma script/ ES6
// Then how is the above code working??
// Parcel is doing transpilation
// jsx (Transpiled before it reaches javascript engine) - Parcel [Manages other modules to transpile doesnot do itself] - Babel (does the actual transpilation)
// Babel - Takes Jsx code and converts into a script that REact/ browsers understand
// Babel (not creatd by Facebook)

const root = ReactDOM.createRoot(document.getElementById("root")); // 

root.render(jsxHeading);