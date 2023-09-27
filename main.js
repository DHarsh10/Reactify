const heading = React.createElement("h1", {id: "header", class: "head bg-new"}, "Hello from react");

console.log(heading)
const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root)
root.render(heading)

