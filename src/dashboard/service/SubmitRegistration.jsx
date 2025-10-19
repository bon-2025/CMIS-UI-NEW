// utils/SubmitRegistration.js
import axios from 'axios';

export const SubmitRegistration = async (data, onSuccess, onError, onLoading) => {
  try {
    onLoading(true);
    const res = await axios.post("http://localhost:5000/records", data);
    console.log("Success:", res.data);

    setTimeout(() => {
      onSuccess(true);
      onLoading(false);
    }, 1000);
  } catch (err) {
    console.error("Error:", err);
    setTimeout(() => {
      onError(false);
      onLoading(false);
    }, 1000);
  }
};
