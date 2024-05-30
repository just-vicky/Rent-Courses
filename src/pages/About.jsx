import React from "react";
import bgImg from "../assets/download.jpeg";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-xl shadow-md space-y-6">
      <img src={bgImg} alt="Background" className="w-full rounded-t-xl" />
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-gray-900">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </h1>
        <p className="text-gray-700">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </p>
        <p className="text-gray-700">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Lorem Ipsum is simply
          <br />
          Lorem Ipsum i
        </h2>
        <Link
          to="/courses"
          className="inline-block mt-4 px-6 py-2 bg-blue-500 text-white font-medium text-center rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Explore our Courses
        </Link>
      </div>
    </div>
  );
}
