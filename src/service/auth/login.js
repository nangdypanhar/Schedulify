import axios from "../axios"; 

export const login = async (formData) => {
  try {
    const response = await axios.post("/login", formData);
    const { access_token, email, name, role } = response.data;

    return { access_token, email, name, role };
  } 
  catch (error) {
    throw new Error(error.response?.data?.message || "Login failed. Please try again.");
  }
};
