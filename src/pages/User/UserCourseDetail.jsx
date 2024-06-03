import React from "react";
import { getUserCourseDetail } from "../../api";
import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  return getUserCourseDetail(params.id);
}
export default function UserCourseDetail() {
  const currentCourse = useLoaderData();
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <section className="p-6 bg-cream-100">
      <Link
        to=".."
        relative="path"
        className="text-blue-500 hover:text-blue-700 flex items-center mb-4"
      >
        &larr; <span className="ml-2">Back to all vans</span>
      </Link>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="flex  items-center">
          <img
            src={currentCourse.imageUrl}
            className="w-1/2 h-96 object-cover rounded-md"
          />
          <div className="flex flex-col  p-4 text-center">
            <div
              className={
                " bg-orange-500 text-white w-20 text-xl  py-1 rounded-full text-sm mb-2 "
              }
            >
              {currentCourse.category}
            </div>

            <h3 className="text-5xl  font-bold mt-2">{currentCourse.name}</h3>
            <h4 className="text-3xl text-gray-500 mt-1">
              ${currentCourse.price}/day
            </h4>
          </div>
        </div>

        <nav className="flex justify-around  border-gray-200 p-4">
          <NavLink
            to="."
            end
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-black border-b-2 border-black pb-2"
                : "text-gray-700 hover:text-black"
            }
          >
            Details
          </NavLink>
          <NavLink
            to="pricing"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-black border-b-2 border-black pb-2"
                : "text-gray-700 hover:text-black"
            }
          >
            Pricing
          </NavLink>
          <NavLink
            to="photos"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-black border-b-2 border-black pb-2"
                : "text-gray-700 hover:text-black"
            }
          >
            Photos
          </NavLink>
        </nav>
        <div className="p-4">
          <Outlet context={{currentCourse}}/>
        </div>
      </div>
    </section>
  );
}
