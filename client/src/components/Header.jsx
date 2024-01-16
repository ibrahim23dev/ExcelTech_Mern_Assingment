import React from "react";

import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import "../assets/Css/Header.css";
const Header = () => {
  return (
    <>
      <header className="header-top-strip py-1">
        <div className="container-xxl">
          <div className="row">
            <div className="col-5">
              <p className="text-white mb-0 pl-10 font-serif font-semibold">
                <h3>Real State Company</h3>
              </p>
            </div>
            <div className="col-6">
              <p className="text-white mb-0">
                <h6 className="text-end pr-12 font-serif font-semibold">
                  Hotline: <a href="+880 1315974775">+880 1315974775</a>
                </h6>
              </p>
            </div>
          </div>
        </div>
      </header>

      <header className="header-upper py-0">
        <div className="container-xxl">
          <div className="row">
            <div className="col-2">
              <h3 className="text-white text-end pr-8 font-serif font-bold">
                <Link to="/">Regnum Resources LTD</Link>
              </h3>
            </div>
            <div className="col-5">
              <div className="py-3 px-5 flex rounded-md">
                <div>
                  <input
                    type="text"
                    id="search"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search"
                    required
                  />
                </div>
                <span className="" id="basic-addon2">
                  {" "}
                  <BsSearch />
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-uapper-link py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div>
                <ul className="flex flex-wrap justify-center gap-8 font-serif">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/service">Services</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
