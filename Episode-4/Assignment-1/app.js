import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <a href="#">
          <img
            src="https://images.pexels.com/lib/api/pexels.png"
            alt="Pexels Logo"
          />
        </a>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Discover</a>
          </li>
          <li>
            <a href="#">Videos</a>
          </li>
          <li>
            <a href="#">License</a>
          </li>
          <li>
            <a href="#">Upload</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const SerachBar = () => {
  return (
    <div className="search-section">
      <h1>Free Stock Photos & Videos Shared by Talented Creators</h1>
      <form action="#">
        <input type="text" placeholder="Search for free photos and videos..." />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

const photoLinks = [
  {
    url: "https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    url: "https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg",
  },
  {
    url: "https://images.pexels.com/photos/3880576/pexels-photo-3880576.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    url: "https://images.pexels.com/photos/5634600/pexels-photo-5634600.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    url: "https://images.pexels.com/photos/4040893/pexels-photo-4040893.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    url: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
  },
  {
    url: "https://images.pexels.com/photos/3015995/pexels-photo-3015995.jpeg",
  },
  {
    url: "https://images.pexels.com/photos/1831234/pexels-photo-1831234.jpeg",
  },
  {
    url: "https://images.pexels.com/photos/1579931/pexels-photo-1579931.jpeg",
  },
  {
    url: "https://images.pexels.com/photos/572861/pexels-photo-572861.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const PhotoCard = (props) => {
  const { photoLink } = props;
  const { url } = photoLink;
  return (
    <div className="image-item">
      <img src={url} alt="Image not found" />
    </div>
  );
};

const Body = () => {
  return (
    <>
      <SerachBar />
      <section className="featured-images">
        <h2>Featured Photos</h2>
        <div className="image-grid">
          {photoLinks.map((photoLink, index) => {
            return <PhotoCard key={index} photoLink={photoLink} />;
          })}
        </div>
      </section>
    </>
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
        <span>Pexels</span>
      </strong>
    </div>
  );
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
