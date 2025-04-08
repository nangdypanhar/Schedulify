import axios from "../axios";

export const fetchAvailableRooms = async (token) => {
  try {
    const response = await axios.get("/user/auth/v1/room", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const rooms = response.data.data[0];

    return rooms;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Login failed. Please try again."
    );
  }
};
