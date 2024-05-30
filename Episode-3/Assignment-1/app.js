import React from "react";
import ReactDOM from "react-dom/client";

//  React createElement

const nestedHeader = React.createElement("div", { className: "title" }, [
  React.createElement("h1", { key: 1 }, "Main Heading"),
  React.createElement("h2", { key: 2 }, "Sub Heading"),
  React.createElement("h3", { key: 3 }, "Sub Sub Heading"),
]);

//  JSX

const jsxNestedHeader = (
  <div className="title">
    <h1>Main Heading</h1>
    <h2>Sub Heading</h2>
    <h3>Sub Sub Heading</h3>
  </div>
);

// Functional Component

const JSXComponent = () => {
  return (
    <div className="title">
      <h1>Main Heading</h1>
      <h2>Sub Heading</h2>
      <h3>Sub Sub Heading</h3>
      <h4>Sub Heading 3</h4>
    </div>
  );
};

const Children = ({ children }) => {
  return <h2>{children}</h2>;
};

//  Component Composition

const Composition = () => {
  return (
    <div>
      <JSXComponent />
      <Children>I am Children</Children>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Composition />);
