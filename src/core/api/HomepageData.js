import axios from "../axios"; 


export const fetchHomepage = async (token) => {
  try {
    const response = await axios.get("/user/auth/v1/student-groups", {
      headers: {
        Authorization: `Bearer ${token}`, 
      },
    });
    return response.data.data[0]; 
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to load homepage."
    );
  }
};
