const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child", key: 11 }, [
    React.createElement("h1", { key: 1 }, "I am heading 1"),
    React.createElement("h2", { key: 2 }, "I am Heading 2"),
  ]),
  React.createElement("div", { id: "child2", key: 12 }, [
    React.createElement("h1", { key: 1 }, "I am heading 1 c2"),
    React.createElement("h2", { key: 2 }, "I am Heading 2 c2"),
  ]),
]);

const heading = React.createElement(
  "h1",
  {
    id: "heading",
  },
  React.createElement("p", {}, "para one"),
  React.createElement("p", {}, "para two")
);

const info = React.createElement("div", {}, [
  React.createElement("h1", { key: 1 }, "I am Ridam Singhal"),
  React.createElement("p", { key: 2 }, "B.Tech Second Year Student"),
  React.createElement("p", { key: 3 }, "MERN Stack Developer"),
]);

console.log(info);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);

root.render(heading);

// Things to research
// React.createElement()
// React.createRoot()
// cdn links
// Critical rendering path
// Assignment
