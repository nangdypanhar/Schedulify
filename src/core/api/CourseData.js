import axios from "../axios";


export const fetchCourse = async (token) => {
  try {
    const response = await axios.get("/user/auth/v1/course", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const courses = response.data.data[0]; 
    
    const formattedCourses = {};
    courses.forEach((course) => {
      formattedCourses[course.name] = course.id;
    });

    console.log("Formatted Courses:", formattedCourses);

    return formattedCourses;
  } catch (error) {
    console.error("Failed to fetch courses:", error);
    return {};
  }
};
