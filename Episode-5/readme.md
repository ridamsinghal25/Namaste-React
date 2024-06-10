# React Hooks

It's simply a regular JavaScript function. However, it
becomes powerful when used within React, as it's provided to us
by React itself. These pre-built functions have underlying logic
developed by React developers. When we install React via npm, we
gain access to these superpowers.

### Two Importants Hooks

1. useState()
2. useEffect()

# React Reconciliation / React Fiber

- React creates a **virtual dom** which is a representation of actual dom.
- And **virtual dom** is a object or a nested object.

```js
    {
    $$typeof:Symbol(react.element)
    key:null
    props:{}
    ref:null
    type:ƒ Body()
    _owner:FiberNode {tag: 0, key: null, stateNode: null, elementType: ƒ, type: ƒ, …}
    _store:{validated: false}
    _self:null
    _source:null
    }
```

- Diff. Algorithm finds the difference between the previous
  virtual dom and updated virtual dom.
- Now, React will upgrade the actual dom.

# NOTE:

- The crucial point about State variables is that
  whenever they update, React triggers a reconciliation
  cycle and re-renders the component.
- This means that as soon as the data layer changes,
  React promptly updates the UI layer. The data layer is
  always kept in sync with the UI layer.
- To achieve this rapid operation, React employs a
  reconciliation algorithm, also known as the diffing
  algorithm or React-Fibre which we will delve into further
  below.
