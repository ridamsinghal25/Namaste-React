import React from "react";
import ReactDOM from "react-dom/client";

// Planning phase of website
/* 
My Food App structure will look like this, 
    1) Header
        - Logo
        - Nav Items(right side)
        - Cart
    2) Body
        - Search bar
        - Restaurants List
            - Restaurant card
                - Image
                - Name
                - Rating
    3) Footer
        - Links
        - Copyrights
       
*/

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnqv3WhcmAkrbmhlr3ARNwybuGX0SLI9thuQ&s"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const restaurants = [
  {
    name: "The Gourmet Kitchen",
    cuisine: "Italian",
    stars: 4.5,
    deliveryTime: "30-40 mins",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597",
  },
  {
    name: "Spicy Delight",
    cuisine: "Indian",
    stars: 4.7,
    deliveryTime: "25-35 mins",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7",
  },
  {
    name: "Sushi World",
    cuisine: "Japanese",
    stars: 4.8,
    deliveryTime: "20-30 mins",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/85825a6d74b1059a63a9b688de9f67ce",
  },
  {
    name: "Burger Haven",
    cuisine: "American",
    stars: 4.3,
    deliveryTime: "30-40 mins",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d0450ce1a6ba19ea60cd724471ed54a8",
  },
  {
    name: "Taco Fiesta",
    cuisine: "Mexican",
    stars: 4.6,
    deliveryTime: "20-30 mins",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/b318c0b4bc2169550145ace1d6e791a2",
  },
  {
    name: "Dragon's Breath",
    cuisine: "Chinese",
    stars: 4.4,
    deliveryTime: "25-35 mins",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/c99751d54e4e1847186c62b3309c1327",
  },
  {
    name: "Le French Bistro",
    cuisine: "French",
    stars: 4.2,
    deliveryTime: "35-45 mins",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/b01d37a4c8e896f79ddbd36e32b9cd3c",
  },
  {
    name: "Mediterranean Bliss",
    cuisine: "Mediterranean",
    stars: 4.51,
    deliveryTime: "25-35 mins",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/85ccae4e3576f9330af102c46ca85395",
  },
  {
    name: "Vegan Vibes",
    cuisine: "Vegan",
    stars: 4.92,
    deliveryTime: "20-30 mins",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/7e526a0c0ed3cd56eefac3d318c78977",
  },
  {
    name: "Pasta Paradise",
    cuisine: "Italian",
    stars: 4.62,
    deliveryTime: "30-40 mins",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/sm5rshqg6veknumyh2ii",
  },
];

const RestaurantCard = (props) => {
  const { restaurant } = props;

  const { name, cuisine, stars, deliveryTime, image } = restaurant;

  return (
    <div className="card">
      <img src={image} />
      <h3>{name}</h3>
      <h4>{cuisine}</h4>
      <h4>{stars} stars</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restaurant-list">
      {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.stars} restaurant={restaurant} />
      ))}
    </div>
  );
};

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By
      <i class="fa-solid fa-heart"></i>
      Ridam Singhal
      <i class="fa-solid fa-copyright"></i>
      {year}
      <strong>
        Food<span>Fire</span>
      </strong>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
