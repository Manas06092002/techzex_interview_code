import React from "react";
import "./Navbar.css";
import { FaUser, FaChevronDown, FaShoppingBag } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        {/* brand logo */}
        <div className="brand-logo">
          <a className="navbar-brand" href="/">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT39hnuAkVj7SmsJ9yI5Bd7O40RS-6E9ghgTA&s"
              alt="Bootstrap"
              width="40"
              height="34"
            />
          </a>
        </div>

        {/* navitems */}
        <div className="nav_item">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link category" href="/">
                Categories
                <FaChevronDown />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* user info */}
        <div className="logininfo">
          <div className="user">
            <FaUser />
            <FaChevronDown />
          </div>
          <div className="shop_bag">
            <FaShoppingBag />
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Navbar;
