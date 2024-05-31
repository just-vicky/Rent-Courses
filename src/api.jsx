export async function getCourses(id) {
  const url = "https://66443e296c6a656587099b9d.mockapi.io/person/courses";
  const res = await fetch(url);
  if (!res.ok) {
    throw {
      message: "Failed to fetch Courses",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();

  return data;
}

export async function getWithCourses(id) {
  const url = `https://66443e296c6a656587099b9d.mockapi.io/person/courses/${id}`;
  const res = await fetch(url);
  console.log(res);
  if (!res.ok) {
    throw {
      message: "Failed to fetch Courses",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  console.log(data);
  return data;
}
