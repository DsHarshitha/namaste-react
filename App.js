import React from "react";
import ReactDOM from "react-dom/client";



// React Element
const heading = <h1 id = "heading">Namaste from jsx</h1>;

// React Functional component = def : a function that returns a jsx code
const HeadingComponent = () => {
  return <h2>Namaste from Functional component 1</h2>;
}

// Smae as above function == same as how we write arrow functions in javascript
//here for the HeadingComponent - Babel will understand that this is a functional component and replace with the above function
const HeadingComponent2 = () => (
  <div><HeadingComponent/>
<h1>Namaste from Functional componnet </h1>
  </div>
); // --> with Babel supported wrap

// Component Composition

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

// root.render(HeadingComponent) ==> we cant do this, this can be done only for React elements not React components
// But 

root.render(<HeadingComponent2/>);
// Babel understands that there is some angular brackets and serach for the component and conbverts to a reactelemnt