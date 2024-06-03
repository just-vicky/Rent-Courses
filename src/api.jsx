export async function getCourses() {
  const url = "https://66443e296c6a656587099b9d.mockapi.io/person/courses";
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(JSON.stringify({
      message: "Failed to fetch Courses",
      statusText: res.statusText,
      status: res.status,
    }));
  }
  const data = await res.json();
  return data;
}

export async function getWithCourses(id) {
  const url = `https://66443e296c6a656587099b9d.mockapi.io/person/courses/${id}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(JSON.stringify({
      message: "Failed to fetch Courses",
      statusText: res.statusText,
      status: res.status,
    }));
  }
  const data = await res.json();
  return data;
}

export async function getUserCourses() {
  const userUrl = "https://66443e296c6a656587099b9d.mockapi.io/person/courses";
  
  const res = await fetch(userUrl);
  
  if (!res.ok) {
    throw new Error(JSON.stringify({
      message: "Failed to fetch Courses",
      statusText: res.statusText,
      status: res.status,
    }));
  }
  const data = await res.json();
  const userCourses = data.filter(course => course.instructorId === "123");
 
  return userCourses;
}

export async function getUserCourseDetail(id) {
  const userUrl = `https://66443e296c6a656587099b9d.mockapi.io/person/courses/${id}`;
  const res = await fetch(userUrl);
  if (!res.ok) {
    throw new Error(JSON.stringify({
      message: "Failed to fetch Courses",
      statusText: res.statusText,
      status: res.status,
    }));
  }
  const data = await res.json();
  return data;
}
