# React Element

    React element is an object.

```js client
const heading = React.createElement(
  "h1",
  {
    id: "heading",
  },
  "I am Heading"
);
```

### Output

```js
{
    $$typeof:Symbol(react.element)
    key:null
    props:{id: 'heading', children: Array(2)}
    ref:null
    type:"h1"
    _owner:null
    _store:{validated: false}
    _self:null
    _source:null
    [[Prototype]]:Object
}
```
