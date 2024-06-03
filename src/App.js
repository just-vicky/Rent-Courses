import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Courses, { loader as coursesLoader } from "./pages/Courses/Courses";
import CourseDetails, {
  loader as courseDetailLoader,
} from "./pages/Courses/CourseDetail";
import UserLayout from "./Components/UserLayout";
import Dashboard from "./pages/User/Dashboard";
import Income from "./pages/User/Income";
import Reviews from "./pages/User/Reviews";
import UserCourses, {
  loader as userCoursesLoader,
} from "./pages/User/UserCourses";
import UserCourseDetail, {
  loader as userCourseDetailLoader,
} from "./pages/User/UserCourseDetail";
import UserCourseInfo from "./pages/User/UserCourseInfo";
import UserCoursePhotos from "./pages/User/UserCoursePhotos";
import UserCoursePricing from "./pages/User/UserCoursePricing";

import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} />
      <Route path="courses" element={<Courses />} loader={coursesLoader} />
      <Route
        path="courses/:id"
        element={<CourseDetails />}
        loader={courseDetailLoader}
      />

      <Route path="user" element={<UserLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="income" element={<Income />} />
        <Route path="reviews" element={<Reviews />} />
        <Route
          path="courses"
          element={<UserCourses />}
          loader={userCoursesLoader}
        />
        <Route
          path="courses"
          element={<UserCourses />}
          loader={
            <Route
              path="courses"
              element={<UserCourses />}
              loader={userCoursesLoader}
            />
          }
        />
        <Route path="courses/:id" element={<UserCourseDetail />} loader={userCourseDetailLoader}>
          <Route index element={<UserCourseInfo />} />
          <Route path="pricing" element={<UserCoursePricing />} />
          <Route path="photos" element={<UserCoursePhotos />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
