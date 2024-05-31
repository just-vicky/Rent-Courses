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
import Courses, {loader as coursesLoader} from "./pages/Courses/Courses";
import CourseDetails, {loader as courseDetailLoader} from "./pages/Courses/CourseDetail";



import "./index.css";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} />
      <Route path="courses" element={<Courses />} loader={coursesLoader} />
      <Route path="courses/:id" element={<CourseDetails />} loader={courseDetailLoader} />

      {/* <Route path="host" element={<HostLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="income" element={<Income />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="courses" element={<HostCourses />} />
        <Route path="courses/:id" element={<HostCourseDetail />}>
          <Route index element={<HostVanInfo />} />
          <Route path="pricing" element={<HostCoursePricing />} />
          <Route path="photos" element={<HostCoursePhotos />} />
        </Route>
      </Route>  */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
