export const getAllCourse = async ()=>{

  const res= await fetch ("http://localhost:5000/all-courses")
  const data = await res.json();
  return data;
}
export const getPopulerCourse = async ()=>{

  const res= await fetch ("http://localhost:5000/popular-courses")
  const data = await res.json();
  return data;
}
export const getPopulerMentors = async ()=>{

  const res= await fetch ("http://localhost:5000/popular-mentors")
  const data = await res.json();
  return data;
}
export const getStudentReview = async ()=>{

  const res= await fetch ("http://localhost:5000/student-reviews")
  const data = await res.json();
  return data;
}
export const getCourseByCategory = async ({categoty})=>{

  const res= await fetch (`http://localhost:5000/${categoty}`)
  const data = await res.json();
  return data;
}