import React from 'react';
import { useOutletContext } from "react-router-dom"

export default function UserCoursePhotos(){
  const { currentCourse } = useOutletContext()
    return (
        <img alt='' src={currentCourse.imageUrl}/>
    )
}