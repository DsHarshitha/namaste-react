
/** 
 * TODO: This is the html structure we want to create using React
 * <div id ='parent'>
 * <div id ='child 1'> 
 * <h1>I'm h1 tag</h1>
 * <h2>I'm h2 tag</h2>
 * </div>
 * <div id ='child 2'> 
 * <h1>I'm h1 tag</h1>
 * <h2>I'm h2 tag</h2>
 * </div>
 * </div>
 * 
 * 
 * 
 * React.createElement(type, [props], ...[children]) // syntax
 */



//ReactElement(object) => becomes an HTML(Browser Understands)

// Parent = react element
const parent = React.createElement(
  //type
  "div",

  // props
  { id: "parent" }, 
  
  //children
  React.createElement("div", { id: "child1" }, [  // To create siblings create array 
    React.createElement("h1", {}, "I'm a H1 tag"),
    React.createElement("h2", {}, "I'm a H2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [  // To create siblings create array 
    React.createElement("h1", {}, "I'm a H1 tag"),
    React.createElement("h2", {}, "I'm a H2 tag"),
  ])
);

/** The above code is tooo complicated to write.
 * But this is how the CORE REACT code looks like.
 * Therefore we use JSX to make our lives easier
 * NOTE: We can always write React code without JSX but it will be complicated
 * 
*/

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React!"
// );

console.log(parent); //object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); // this is just putting the parent in the "root" tag in index.html file
