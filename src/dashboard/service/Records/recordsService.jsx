// src/services/recordsService.js
const BASE_URL = "http://localhost:5000/records";


export const getRecords = async () => {
    
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error("Failed to fetch records");
  
  return res.json();
};

export const updateRecord = async (id, updatedData) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedData),
  });
  if (!res.ok) throw new Error("Failed to update record");
  return res.json();
};
