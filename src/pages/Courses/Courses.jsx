import React from "react";
import {
  Link,
  useLoaderData,
  defer,
  Await,
} from "react-router-dom";
import { getCourses } from "../../api";

export function loader() {
  return defer({ courses: getCourses() });
}

export default function Courses() {
  const dataPromise = useLoaderData();

  function renderCourseElements(courses) {
    return (
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course) => (
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
        ))}
      </section>
    );
  }
   

  return (
    <div >
      <h1 className="text-2xl font-bold mb-4">Explore our courses</h1>
      <React.Suspense fallback={<h2>Loading Courses...</h2>}>
        <Await resolve={dataPromise.courses}>{renderCourseElements}</Await>
      </React.Suspense>
    </div>
  );
}
