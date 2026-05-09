export const getAllCourse = async ()=>{

  const res= await fetch ("https://a8-server-4s70.onrender.com/all")
  const data = await res.json();
  return data;
}
export const getPopulerCourse = async ()=>{

  const res= await fetch ("https://a8-server-4s70.onrender.com/popular-courses")
  const data = await res.json();
  return data;
}
export const getPopulerMentors = async ()=>{

  const res= await fetch ("https://a8-server-4s70.onrender.com/popular-mentors")
  const data = await res.json();
  return data;
}
export const getStudentReview = async ()=>{

  const res= await fetch ("https://a8-server-4s70.onrender.com/student-reviews")
  const data = await res.json();
  return data;
}
export const getCourseByCategory = async (categoty)=>{

  const res= await fetch (`https://a8-server-4s70.onrender.com/${categoty}`)
  const data = await res.json();
  return data;
}
export const getCourseById = async (id)=>{

  const datas = await getAllCourse();

  const res = datas.find ((data)=> data.id == id) 
  console.log(res);
  return res ;
}