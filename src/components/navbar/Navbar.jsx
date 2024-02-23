/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrolled = window.scrollY > 0;
    setIsScrolled(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const NavLinks = () => (
    <>
      <NavLink to="/">
        <li className="list-none text-xl text-white font-bold">Home</li>
      </NavLink>
      <NavLink to="/">
        <li className="list-none text-xl text-white font-bold">About</li>
      </NavLink>
      <NavLink to="/">
        <li className="list-none text-xl text-white font-bold">Service</li>
      </NavLink>
      <NavLink to="/">
        <li className="list-none text-xl text-white font-bold">Plans</li>
      </NavLink>
      <NavLink to="/">
        <li className="list-none text-xl text-white font-bold">Blogs</li>
      </NavLink>
      <NavLink to="/">
        <li className="list-none text-xl text-white font-bold">Support</li>
      </NavLink>
      <NavLink to="/">
        <li className="list-none text-xl text-white bg-green-500 p-2 rounded-md font-bold">
          Login
        </li>
      </NavLink>
    </>
  );

  return (
    <div
      className={`fixed top-0 left-0 w-full p-1 z-50 duration-300 ${
        isScrolled ? "bg-sky-900" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-around p-4">
        <div>
          <h1 className="text-orange-500  text-3xl font-bold ">
            Click <span className="text-4xl text-amber-400">2</span> Earn
          </h1>
        </div>
        <div className="flex items-center space-x-6">
          <NavLinks />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
