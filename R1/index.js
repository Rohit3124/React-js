const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);

const h1 = React.createElement("h1",{},"Hello World!");
root.render(h1);
const li1 = React.createElement("li",{className:"item"},"Item1" )
const li2 = React.createElement("li",{className:"item"},"Item2" )
const li3 = React.createElement("li",{className:"item"},"Item3" )

const ul = React.createElement("ul",{}, [li1,li2,li3]);

const child1 = React.createElement("div",{},ul );
root.render(child1);