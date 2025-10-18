export const getAddress = async (API_ADDRESS) => {
  try {
    const res = await fetch(API_ADDRESS);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
