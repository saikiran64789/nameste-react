import React from "react";
import ReactDOM from "react-dom";
const parent  = React.createElement("div",{id:"Parent"},[
    React.createElement("div",{id:"child"},[
     React.createElement("h1",{},"this sai react"),
     React.createElement("h2",{},"by saikira ")
   ] ),
   React.createElement("div",{id:"child"},[
    React.createElement("h1",{},"I'm an h1 tag"),
    React.createElement("h2",{},"I'm an h2 tag")
] ),
]); 

//jsx

console.log(parent);//object 

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);