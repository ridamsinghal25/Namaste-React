import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = React.createElement("h2", {}, "React Element");

// JSX
const jsxheading = <h1 id="jsx">Namaste India using JSX</h1>;

// React Functional Component
const Title = () => (
  <div>
    <h1 className="head" id="title">
      Title Component
    </h1>
    {heading}
  </div>
);

// Component Composition
const HeadingComponent = () => {
  return (
    <div id="container">
      <Title />
      {jsxheading}
      <h1>Namaste React Functional Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
