export const HandleSubmit = async (data) => {
  for (const item of data) {
    if (!item || Object.values(item).some(value => value === "" || value == null)) {
      return "Please fill in all required fields";
    }
  }

  // All items passed validation
  return null; // or continue to API call
};
