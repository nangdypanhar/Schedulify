import axios from "../axios";

export const fetchRequestHistory = async (token, userId) => {
  try {
    const response = await axios.get(`/user/auth/v1/request/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("API Response:", response.data);

    const data = response.data
    if (data) {
      return data; 
    }

  } catch (error) {
    console.error("Error fetching request data:", error);
    throw new Error(
      error.response?.data?.message || "Failed to load the request data"
    );
  }
};
