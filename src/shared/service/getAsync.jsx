import server from "./server";

export const getAsync = async (url) => {
  try {
    const response = await server.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching:", error);
    throw new Error(`Failed to fetch: ${url}`);
  }
};


//export const getAsync = (url) => server.get(url).then(res => res.data);
// export const postAsync = (url, data) => server.post(url, data).then(res => res.data);
// export const putAsync = (url, data) => server.put(url, data).then(res => res.data);
// export const deleteAsync = (url) => server.delete(url).then(res => res.data);