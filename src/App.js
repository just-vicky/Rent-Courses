import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} />
      <Route path="courses" element={<Courses />} />
      <Route path="courses/:id" element={<CourseDetails />} />

      <Route path="host" element={<HostLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="income" element={<Income />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="courses" element={<HostCourses />} />
        <Route path="courses/:id" element={<HostCourseDetail />}>
          <Route index element={<HostVanInfo />} />
          <Route path="pricing" element={<HostCoursePricing />} />
          <Route path="photos" element={<HostCoursePhotos />} />
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
