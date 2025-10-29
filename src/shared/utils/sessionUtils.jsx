// Check if session has expired
export const isSessionExpired = (expiry) => {
  return new Date() > new Date(expiry);
};
