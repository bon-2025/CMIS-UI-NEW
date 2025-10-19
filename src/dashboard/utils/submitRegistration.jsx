import axios from 'axios';

export const submitRegistration = async (data) => {
  try {
    const response = await axios.post("http://localhost:5000/records", data);
    return { success: true, data: response.data };
  } catch (error) {
    console.error("Submission failed:", error);
    return { success: false, error };
  }
};
