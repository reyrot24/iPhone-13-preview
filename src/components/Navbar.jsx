import React from "react";
import apple from "../assets/images/apple.svg";
import Search from "../assets/images/search.svg";
import Store from "../assets/images/store.svg";

const links = [
  { name: "Store" },
  { name: "Mac" },
  { name: "iPad" },
  { name: "iPhone" },
  { name: "Watch" },
  { name: "AirPods" },
  { name: "TV & Home" },
  { name: "Entertainment" },
  { name: "Accessories" },
  { name: "Support" },
];

const Navbar = () => {
  return (
    <nav className="nav-wrapper">
      <div className="nav-content">
        <ul className="list-styled">
          <li>
            <img
              src={apple}
              alt="Apple"
              width="20rem"
              style={{ paddingTop: "10px" }}
            />
          </li>
          {links.map((item, i) => (
            <li key={i}>
              <a className="link-styled">{item.name}</a>
            </li>
          ))}
          <li>
            <img src={Search} alt="Search" />
          </li>
          <li>
            <img src={Store} alt="Store" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
