import React from "react";
import Logo from "../assets/images/logo.svg";
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
            <img src={Logo} alt="Apple" />
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
////15:01
