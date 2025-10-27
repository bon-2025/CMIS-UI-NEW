import server from "./server";

export const getAsync = async (url) => {
  try {
    const response = await server.get(`${url}`);
    return response.data;
    
  } catch (error) {
    console.error("Login API Error:", error.message);
    throw error;
  }
};