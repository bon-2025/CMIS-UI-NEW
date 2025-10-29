export const DelaySeconds = async (sec) => {
  const ms = sec * 1000;
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const ValidateUser = (user) => {
  if (!user) {
    throw new Error("User not found.");
  }
  if (!user.username || !user.password) {
    throw new Error("User data is incomplete.");
  }
  return true;
};
