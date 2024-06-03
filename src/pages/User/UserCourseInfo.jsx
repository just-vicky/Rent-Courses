import React from "react";
import { useOutletContext } from "react-router-dom";

export default function UserCourseInfo() {
  const { currentCourse } = useOutletContext();
  return (
    <section className="p-6 bg-white shadow-md rounded-lg">
      <h4 className="text-xl font-semibold mb-2">Name: <span className="font-normal">{currentCourse.name}</span></h4>
      <h4 className="text-xl font-semibold mb-2">Category: <span className="font-normal">{currentCourse.type}</span></h4>
      <h4 className="text-xl font-semibold mb-2">Description: <span className="font-normal">{currentCourse.description}</span></h4>
      <h4 className="text-xl font-semibold mb-2">Visibility: <span className="font-normal">Public</span></h4>
    </section>
  );
}
