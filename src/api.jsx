export async function getCourses(id) {
  const url = id ? `https://66443e296c6a656587099b9d.mockapi.io/person/courses${id}` : "https://66443e296c6a656587099b9d.mockapi.io/person/courses"
  const res = await fetch(url)
  if (!res.ok) {
      throw {
          message: "Failed to fetch vans",
          statusText: res.statusText,
          status: res.status
      }
  }
  const data = await res.json()
  console.log(data)
  return data[0].courses
}