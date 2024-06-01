import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function UserLayout() {
  
const activeStyles = "text-blue-500 font-bold border-b-2 border-blue-500";

  return (
    <>
            <nav className="flex justify-around p-4 bg-gray-700 text-white">
                <NavLink
                    to="."
                    end
                    className={({ isActive }) =>
                        isActive ? activeStyles : "hover:text-blue-300"
                    }
                >
                    Dashboard
                </NavLink>

                <NavLink
                    to="income"
                    className={({ isActive }) =>
                        isActive ? activeStyles : "hover:text-blue-300"
                    }
                >
                    Income
                </NavLink>

                <NavLink
                    to="courses"
                    className={({ isActive }) =>
                        isActive ? activeStyles : "hover:text-blue-300"
                    }
                >
                    Courses
                </NavLink>

                <NavLink
                    to="reviews"
                    className={({ isActive }) =>
                        isActive ? activeStyles : "hover:text-blue-300"
                    }
                >
                    Reviews
                </NavLink>
            </nav>
            <Outlet />
        </>
  );
}
