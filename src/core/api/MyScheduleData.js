import axios from "../axios";

export const fetchMySchedule = async (token) => {
  try {
    const response = await axios.get("/user/auth/v1/user/sessions", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const schedule = response.data.data; 

    console.log("Fetched Schedule:", schedule);

    return schedule;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Login failed. Please try again."
    );
  }
}