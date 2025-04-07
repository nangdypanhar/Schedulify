import axios from "../axios"; // Import your Axios instance

// Modify fetchHomepage to accept a token as a parameter
export const fetchHomepage = async (token) => {
  try {
    const response = await axios.get("/user/auth/v1/student-groups", {
      headers: {
        Authorization: `Bearer ${token}`, // Add the Authorization header with the token
      },
    });
    return response.data.data[0]; // Adjust this according to your API response structure
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to load homepage."
    );
  }
};
