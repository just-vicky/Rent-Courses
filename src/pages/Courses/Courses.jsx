import React, { Suspense } from "react";
import {
  Link,
  useLoaderData,
  useSearchParams,
  defer,
  Await,
} from "react-router-dom";
import { getCourses } from "../../api";

export function loader() {
  return defer({ courses: getCourses() });
}

export default function Courses() {
  const [searchParams, setSearchParams] = useSearchParams();

  const dataPromise = useLoaderData();
  const typeFilter = searchParams.get("type");

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  function renderCourseElements(courses) {
    const displayedCourses = typeFilter
      ? courses.filter((course) => course.category === typeFilter)
      : courses;

    const courseElements = displayedCourses.map((course) => (
      <article key={course.id} className="border p-4 rounded-md">
        <Link to={course.id} className="flex flex-col h-full">
          <img
            src={course.imageUrl}
            alt={course.name}
            className="object-cover w-full h-48"
          />
          <div className="flex-grow flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold">{course.name}</h3>
              <p className="text-gray-700">
                ${course.price}
                <span>/day</span>
              </p>
            </div>
            <i className="text-gray-500">{course.category}</i>
          </div>
        </Link>
      </article>
    ));
    return (
      <>
        <div className="flex space-x-4 py-4">
          <button
            onClick={() => handleFilterChange("type", "Free")}
            className={`px-4 py-2 rounded-md focus:outline-none ${
              typeFilter === "Free"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Free
          </button>
          <button
            onClick={() => handleFilterChange("type", "Paid")}
            className={`px-4 py-2 rounded-md focus:outline-none ${
              typeFilter === "Paid"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Paid
          </button>

          {typeFilter ? (
            <button
              onClick={() => handleFilterChange("type", null)}
              className="px-4 py-2 rounded-md bg-gray-200 text-gray-700 focus:outline-none"
            >
              Clear filter
            </button>
          ) : null}
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courseElements}
        </section>
      </>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 ">Explore our courses</h1>
      <Suspense
        fallback={
          <div class="w-full gap-x-2 flex justify-center items-center">
            <div class="w-5 bg-gray-200 animate-pulse h-5 rounded-full animate-bounce"></div>
            <div class="w-5 animate-pulse h-5 bg-gray-400 rounded-full animate-bounce"></div>
            <div class="w-5 h-5 animate-pulse bg-gray-600 rounded-full animate-bounce"></div>
          </div>
        }
      >
        <Await resolve={dataPromise.courses}>{renderCourseElements}</Await>
      </Suspense>
    </div>
  );
}
