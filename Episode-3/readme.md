# npm Scripts

npm scripts are a feature of npm (Node Package Manager) that
allow you to define and run custom commands and automation tasks
directly from the package.json file of your Node.js project

# JSX

- JSX is HTML-like or XML-like syntax. JSX stands for JavaScript
  XML. It's a syntax extension for JavaScript.
- JSX is not HTML in React.
- It is not a valid javascript as it will not be understand by js engine.
- Use **CamelCase** to give attributes to JSX
- JSX prevents cross side scripting attack

# JSX v/s React.createElement()

- React.createElement gives react element which is js object and
  then it is rendered by react as HTML.
- React.createElement() => React element - JS Object => HTMLElement(render)
- JSX converts your code to React.createElement() and then do same thing.
- JSX (transpiled by Babel) ⇒ React.createElement() ⇒ ReactElement
  ⇒ JS Object ⇒ HTML Element(render)
- Babel is responsible for converting JSX to React.createElement()

# React Functional Component

- React Functional component is a simple javascript function that returns JSX code.

  **OR**

- React Functional Component is a function that returns a react elements as JSX is React element.

```js
const HeadingComponent1 = () => {
  return <h1>Namaste</h1>;
};

const HeadingComponent2 = () => <h1>Namaste</h1>;
```

- Always name React Functional Component with Capital Letters
  otherwise you will confuse it with normal function

# Component Composition

- A component inside a component.
- Calling a component inside another component is Component
  Composition.

```js
const Title = () => <h1>Namaste React</h1>;

const HeadingComponent = () => (
  <div id="container">
    <Title />
  </div>
);
```

# JSX prevents attacks

- If someone gets access to your JS code and sends some malicious
  data which will then get displayed on the screen, that attack is
  called cross-site scripting.
- It can read cookies, local storage, session storage, get
  cookies, get info about your device, and read data. JSx takes
  care of your data.
- If some API passes some malicious data JSX will escape it. It
  prevents cross-site scripting and sanitizes the data before
  rendering
