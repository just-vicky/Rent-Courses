import React from "react";
import { Link, useLoaderData, defer, Await } from "react-router-dom";
import { getUserCourses } from "../../api";

export async function loader() {
  return defer({ courses: getUserCourses()});
}

export default function UserCourses() {
  const dataPromise = useLoaderData();

  function renderCourseElements(courses) {
    const userCoursesEls = courses.map((course) => (
      <Link to={course.id} key={course.id} className="block">
        <div className="flex items-center my-4 bg-gray-100 rounded-lg shadow-md p-4 hover:bg-gray-300 transition duration-200">
          <img
            src={course.imageUrl}
            alt=""
            className="w-32 h-32 object-cover rounded-lg mr-4"
          />
          <div>
            <h3 className="text-lg font-semibold">{course.name}</h3>
            <p className="text-gray-600">Rs. {course.price}/day</p>
          </div>
        </div>
      </Link>
    ));
    return (
      <div className="container mx-auto p-4">
        <div className="space-y-6">
          <section>{userCoursesEls}</section>
        </div>
      </div>
    );
  }
  
  return (
    <section>
      <h1 className="text-3xl font-bold mb-6 mt-4 text-center">
        Your Listed Courses
      </h1>
      <h1 className="text-2xl font-bold mb-6">Available Courses</h1>
      <React.Suspense
        fallback={
          <div className="relative flex w-64 animate-pulse gap-2 p-4">
            <div className="h-12 w-12 rounded-full bg-slate-400"></div>
            <div className="flex-1">
              <div className="mb-1 h-5 w-3/5 rounded-lg bg-slate-400 text-lg"></div>
              <div className="h-5 w-[90%] rounded-lg bg-slate-400 text-sm"></div>
            </div>
            <div className="absolute bottom-5 right-0 h-4 w-4 rounded-full bg-slate-400"></div>
          </div>
        }
      >
        <Await resolve={dataPromise.courses}>{renderCourseElements}</Await>
      </React.Suspense>
    </section>
  );
}
