import  React from "react";
import ReactDOM from "react-dom/client"

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);

// const h1 = React.createElement("h1",{},"Hello World!");
// root.render(h1);

//***************************JSX**************************/
// const h1 = <h1>Hello World!</h1>
// console.log(h1);   //-->object
// root.render(h1);
// const li1 = <li>item1</li>
// const li2 = <li>item2</li>
// const li3 = <li>item2</li>
// const ol = <ol>{li1}{li2}{li3}</ol>
// const div = <div>{h1}{ol}</div>
// root.render(div);

//**************************Function Component********************/
const H1 = ()=> <h1>Hello type1</h1>; // -->Type1
root.render(<H1 />);
//<H1 /> and H1() by this we are calling function component
//
const H2 = ()=>{        // -->Type2
    return <h1>Hello type2</h1>;
}
root.render(<H2 />)

const H3 = ()=>(    //-->Type3
    <h1>Hello type3</h1>
)
root.render(<H3 />)

const H4 = ()=>{      //-->Type4
    return (
        <h1>Hello type4</h1>
    )
}
root.render(<H4 />)
// after arrow fi=unction if u r using cruly braces then you must use return keyword.
// for rendering multiple line we use {} after return.

const H5 = function() {     //-->Type5
     return <h1>Hello type5</h1>
}
root.render(<H5 />)

const H6 = function(){      //-->Type6
    return (
        <h1>Hello type6</h1>
    )
}
root.render(<H6 />)