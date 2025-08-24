import React from "react";
import ReactDOM from "react-dom/client";



// React Element
const heading = <h1 id = "heading">Namaste from jsx</h1>;


const HeadingComponent = () => {
  return <h2>Namaste from Functional component 1</h2>;
}

// To write react element/ javascript inside a Functinal component - use {}
const HeadingComponent2 = () => (
  <div>
    {heading}
    {100 + 300}
    {console.log(10)}
    <HeadingComponent/>
    {HeadingComponent()}
    <HeadingComponent></HeadingComponent>
<h1>Namaste from Functional componnet </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));



root.render(<HeadingComponent2/>);