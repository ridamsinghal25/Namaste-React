# React Hooks

React Hooks are normal javascript function.

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
