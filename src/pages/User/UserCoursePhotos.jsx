import React from 'react';
import { useOutletContext } from "react-router-dom"

export default function UserCoursePhotos(){
  const { currentCourse } = useOutletContext()
    return (
        <img src={currentCourse.imageUrl} alt='course'/>
    )
}