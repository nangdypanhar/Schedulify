import axios from "../axios";

export const login = async (formData) => {
  try {
    const response = await axios.post("/user/login", formData);
    const { access_token } = response.data;
    return { access_token};

  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Login failed. Please try again."
    );
  }
};
