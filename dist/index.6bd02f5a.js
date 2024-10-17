/**
 *
 * <div id ="parent">
 *      <div id="child">
 *     <h1>I'm h1 tag</h1>
 *     <h2>I'm h2 tag</h2>
 *    </div>
 * <div id="child2">
 *     <h1>I'm h1 tag</h1>
 *     <h2>I'm h2 tag</h2>
 *    </div>
 *   </div>
 * 
 * reactElement(Object) => HTML (browser understand)
 * 
 */ const parent = React.createElement("div", {
    id: "Parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h2", {}, "I'm an h2 tag")
    ]),
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h2", {}, "I'm an h2 tag")
    ])
]);
//jsx
console.log(parent); //object 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
