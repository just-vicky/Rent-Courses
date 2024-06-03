import React from "react";
import { Link } from "react-router-dom";
import bg from "../assets/backgroung.jpeg";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pt-8">
      <div
        className="p-6 max-w-lg mx-auto bg-gradient-to-r from-gray-500 to-gray-300 rounded-xl shadow-md space-y-4 "
       
      >
        <h1 className="text-2xl font-bold text-black p-2 rounded">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </h1>
        <p className="text-black p-2 rounded">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </p>
        <Link
          to="courses"
          className="inline-block px-6 py-2 bg-gray-500 text-white font-medium text-center rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Find your courses
        </Link>
      </div>
    </div>
  );
}
