import React from "react";
import { Link, useLocation, useLoaderData } from "react-router-dom";
import { getWithCourses } from "../../api";

export function loader({ params }) {
  return getWithCourses(params.id);
}

export default function CourseDetail() {
  const location = useLocation();
  const course = useLoaderData();

  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  return (
    <div className="p-6">
    <Link
        to={`..${search}`}
        relative="path"
        className="text-blue-500 hover:underline flex items-center"
    >
        &larr; <span className="ml-1">Back to {type} courses</span>
    </Link>

    <div className="mt-6 p-6 bg-white rounded-lg shadow-md">
        <center><img src={course.imageUrl} alt={course.name} className="w-1/2 h-64 object-cover rounded-md mb-4" /></center>
        <i className={`course-type ${course.type} selected text-gray-500 mb-2`}>
            {course.type}
        </i>
        <h2 className="text-2xl font-bold mb-2">{course.name}</h2>
        <p className="text-xl text-green-600 mb-2">
            <span>${course.price}</span>
        </p>
        <p className="text-gray-700 mb-4">{course.description}</p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Enroll in this course
        </button>
    </div>
</div>
  );
}
