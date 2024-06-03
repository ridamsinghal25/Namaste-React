# Food Ordering App

## How to Build App

1. Planning
   - How your app will look like
   - What Component my App will have
     - Now, what my component will have in them

## Props

Passing a prop to a component is just like passing arguments to a javascript function.

```react
<Restaurant
  name="KFC"  // These are props
  cuisine="Burger"
/>
```

### Destructuring Props

```js
const RestaurantCard = ({ resName, cuisine }) => {
  return <div>{resName}</div>;
};
```

## Config Driven UI

It is a user Interface that is built and configured using a
declaration configuration file or data structure, rather than
being hardcoded.
Config is the data coming from the api which keeps on changing
according to different factors like user, location, etc.

## Unique key Id to array

When we have components at same level and if a new component
comes on the first without ID, DOM is going to re-render all the
components again. As DOM can’t identify where to place it.

But if we give each of them a unique ID then react knows where
to put that component according to the ID. It is a good
optimization and performance thing.

## Why not use index as a key
