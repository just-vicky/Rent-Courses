import React from "react";
import { Link, NavLink } from "react-router-dom";
import icon from "../assets/icons8-login-50.png";

export default function Header() {
  const activeStyles = "text-blue-500 font-bold";

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-semibold hover:text-gray-400">
        #Courses
      </Link>
      <nav className="flex space-x-4">
        <NavLink
          to="user"
          className={({ isActive }) =>
            isActive ? activeStyles : "text-white hover:text-gray-400"
          }
        >
          User
        </NavLink>
        <NavLink
          to="about"
          className={({ isActive }) =>
            isActive ? activeStyles : "text-white hover:text-gray-400"
          }
        >
          About
        </NavLink>
        <NavLink
          to="courses"
          className={({ isActive }) =>
            isActive ? activeStyles : "text-white hover:text-gray-400"
          }
        >
          Courses
        </NavLink>
        <Link to="login" className="login-link flex items-center">
          <img
            src={icon}
            className="w-8 h-8 rounded-full border border-gray-400"
            alt="Login"
          />
        </Link>
      </nav>
    </header>
  );
}
