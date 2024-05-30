import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Sorry, the page you were looking for was not found.
      </h1>
      <Link
        to="/"
        className="inline-block px-6 py-2 bg-blue-500 text-white font-medium text-center rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Return to Home
      </Link>
    </div>
  );
}
