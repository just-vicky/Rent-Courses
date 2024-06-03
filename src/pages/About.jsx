import React from "react";
import bgImg from "../assets/download.jpeg";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-300 rounded-xl shadow-md space-y-14 ">
      <img src={bgImg} alt="Background" className="w-full rounded-t-xl" />
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-gray-900">
          Welcome to CourseRentals!
        </h1>
        <p className="text-gray-700">
          Browse our extensive collection of top-rated courses across various
          subjects. Whether you're looking to upskill for your career or explore
          a new hobby, we have something for everyone.
        </p>
        <p className="text-gray-700">
          Rent courses by the day, week, or month. Enjoy the flexibility to
          learn at your own pace without long-term commitments.
        </p>
      </div>
      <div className="mt-6 ">
        <h2 className="text-xl font-semibold text-gray-900">
          We offer competitive pricing on all our courses. Access high-quality
          education without breaking the bank.
          <br />
          
        </h2>
        <Link
          to="/courses"
          className="inline-block mt-4 px-6 py-4 bg-blue-500 text-white font-medium text-center rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Explore our Courses
        </Link>
      </div>
    </div>
  );
}
