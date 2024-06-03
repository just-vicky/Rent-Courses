import React from "react";
import { useOutletContext } from "react-router-dom";

export default function UserCoursePricing() {
  const {currentCourse} = useOutletContext()
  console.log(currentCourse.id)
  return (
    <h3 >Rs.{currentCourse.price}<span>/day</span></h3>
  )
}